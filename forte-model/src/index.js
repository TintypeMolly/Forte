import Sequelize from 'sequelize';

const sequelize = new Sequelize('forte', 'forte', 'BDfdssx4BqthXFxpmWE5');

const Station = sequelize.define('station', {
    'oper': {type: Sequelize.STRING},
    'addr': {type: Sequelize.STRING, unique: true},
    'mangName': {type: Sequelize.STRING},
    'item': {type: Sequelize.STRING},
    'stationName': {type: Sequelize.STRING},
    'year': {type: Sequelize.INTEGER},
    'dmX': {type: Sequelize.DOUBLE},
    'dmY': {type: Sequelize.DOUBLE},
    'uuid': {type: Sequelize.STRING, primaryKey: true},
}, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
});

const Observation = sequelize.define('observation', {
    'so2': {type: Sequelize.DOUBLE},
    'co': {type: Sequelize.DOUBLE},
    'o3': {type: Sequelize.DOUBLE},
    'no2': {type: Sequelize.DOUBLE},
    'pm10': {type: Sequelize.DOUBLE},
    'pm25': {type: Sequelize.DOUBLE},
}, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
});

Station.hasOne(Observation, {as: 'observation', foreignKey: 'station_id'});

export {
    sequelize,
    Station,
    Observation,
};
