
// const axios = require('axios');

//  axios
//  .get(`https://api.weather.gov/points/39.7456,-97.0892`)
// .then(res => {
//      console.log(`statusCode: ${res.status}`);
//      console.log(res.body);
//  })
//  .catch(error => {
//     console.error(error);
//  });

// // Express server 

//  let express = require(`express`);
//  let app = express();

//  let router = express.Router();

//  router.get('/', function(req,res,next){
//         res.send("sweet");
//  });

//  app.use('/api/', router);

//  var server = app.listen (5010,function(){
//      console.log('Node server is running');
//  });

 //Search verification 
const searchBtn = document.getElementById("search");

function validateRequest(){
    let weatherRequest = document.getElementById("searchInput").value
    console.log(weatherRequest)
    let allInSameCase = document.getElementById("searchInput").value.toLowerCase() 
    console.log(allInSameCase)
    if (allInSameCase === "wave" || allInSameCase === "wind"){
        console.log("this a wave")
    }
    else {
        console.log("something Else")
    }
}


const weatherUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={623c95481a0a14267b1da87baef2cdde}'
fetch(weatherUrl)
    .then(res => console.log(res))
