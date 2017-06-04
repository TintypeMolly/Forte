import stations from './stations.json';
import {Station} from '../../forte-model';

const initDB = () => {
    for (const station of stations) {
        Station.create({
            uuid: station.uuid,
            oper: station.oper,
            addr: station.addr,
            mangName: station.mangName,
            item: station.item,
            stationName: station.stationName,
            year: parseInt(station.year, 10),
            dmX: parseFloat(station.dmX),
            dmY: parseFloat(station.dmY),
        });
    }
};

initDB();

export default initDB;
