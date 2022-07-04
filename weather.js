
const axios = require('axios');

 axios
 .get(`https://api.weather.gov`)
.then(res => {
     console.log(`statusCode: ${res.status}`);
     console.log(res);
 })
 .catch(error => {
    console.error(error);
 });
