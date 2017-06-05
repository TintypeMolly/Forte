import geodist from 'geodist';

const findNearestActiveStation = (stations, lat, lng) => {
  let nearestStation = null;
  let nearestDistance = 40000000;
  for (const station of stations) {
    if (!station.observation.pm25) {
      continue;
    }
    const distance = geodist({lat, lng}, {lat: station.dmX, lng: station.dmY}, {exact: true, unit: 'meters'});
    if (distance < nearestDistance) {
      nearestStation = station;
      nearestDistance = distance;
    }
  }
  return nearestStation;
};

export {
  findNearestActiveStation,
}
