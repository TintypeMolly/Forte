import stations from './stations.json';
import fetchStation from './fetch_station';
import {Station, Observation} from '../../forte-model';
import initDB from 'init_db';

initDB();

export {
    stations,
};
