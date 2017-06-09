import stations from './stations.json';
import fetchStation from './fetch_station';
import {Station, Observation} from '../../forte-model';

const updateObservations = async () => {
  for (const station of stations) {
    let observation;
    let retry = 0;
    while (true) {
      try {
        observation = await fetchStation(station);
        break;
      } catch (err) {
        console.error(err);
        console.log('retry...');
        retry += 1;
        if (retry > 10) {
          console.log('something is srsly wrong');
          process.exit(1);
        }
      }
    }
    const dbObservation = await Observation.findOne({where: {station_id: station.uuid}});
    if (dbObservation) {
      dbObservation.update(observation);
    } else {
      Observation.create(observation);
    }

    // sleep 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

updateObservations().then(_ => console.log('done'));

export {
  stations,
};
