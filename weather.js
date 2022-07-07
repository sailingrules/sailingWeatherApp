
const axios = require('axios');

 axios
 .get(`https://api.weather.gov/points/39.7456,-97.0892`)
.then(res => {
     console.log(`statusCode: ${res.status}`);
     console.log(res.body);
 })
 .catch(error => {
    console.error(error);
 });
