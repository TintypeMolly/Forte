import request from 'request-promise';
import cheerio from 'cheerio';
import esprima from 'esprima'
import toValue from 'esprima-to-value';

const fetchStation = async (station) => {
    const addr = `http://m.airkorea.or.kr/sub_new/sub11.jsp?lat=${station.dmX}&lng=${station.dmY}`;
    const response = await request(addr);
    const $ = cheerio.load(response);
    const scriptContent = $('script').last().html();
    const program = esprima.parse(scriptContent, {range: true});
    const variables = [];
    for (let i = 0; true; ++i) {
        const currentToken = program.body[i];
        if (currentToken.declarations[0].id.name === "wrapper") {
            break;
        } else {
            variables.push(currentToken);
        }
    }
    const observations = {};
    for (let dec of variables) {
        if (dec.declarations[0].id.name.endsWith('3')) {
            const observationName = dec.declarations[0].id.name.replace('JSONObject', '').replace('_3', '');
            const rawData = toValue(dec.declarations[0].init);
            const observationValue = rawData.rows[rawData.rows.length - 1].c[1];
            observations[observationName] = observationValue;
        }
    }
    return observations;
};

export default fetchStation;
