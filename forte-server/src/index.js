import express from 'express';
import {Station, Observation} from '../../forte-model';

const app = express();

app.get('/', (req, res) => {
    Station.findAll({include: Observation}).then(stations => {
        const data = stations.map(s => s.get({plain: true}));
        res.send(JSON.stringify(data));
    });
});

app.listen(3000, function() {
    console.log('listening on port 3000!');
});
