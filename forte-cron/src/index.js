import stations from './stations.json';
import fetchStation from './fetch_station';
import {Station, Observation} from '../../forte-model';

const updateObservations = async () => {
    for (const station of stations) {
        const observation = await fetchStation(station);
        await Observation.findOrCreate({
            where: {station_id: station.uuid},
            defaults: observation,
        });
        // sleep 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
};

updateObservations().then(_ => console.log('done'));

export {
    stations,
};
