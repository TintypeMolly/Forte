import express from 'express';
import {Station, Observation} from '../../forte-model';

const app = express();

const getData = (req, res) => {
    Station.findAll({include: Observation}).then(stations => {
        const data = stations.map(s => s.get({plain: true}));
        res.send(JSON.stringify(data));
    });
};

app.get('/', getData);
app.get('/api', getData);

app.listen(3000, function() {
    console.log('listening on port 3000!');
});
