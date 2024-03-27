
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

// Express server    for node running this code must not be commented out...the front end code must be commented out...then in terminal enter" npm run start" 

 // let express = require(`express`);
 // let app = express();

 // let router = express.Router();

 // router.get('/', function(req,res,next){
 //        res.send("sweet");
 // });

//  app.use('/api/', router);
//  let port = process.env.PORT;
//  if (port == null || port == "") {
//    port = 8000;
 
 //    app.listen(port);
 //   var server = app.listen (80,function(){
 //     console.log('Node server is running');
 // });

 //Search verification 
// const searchBtn = document.getElementById("search");

// function validateRequest(){
//     let weatherRequest = document.getElementById("searchInput").value
//     console.log(weatherRequest)
//     let allInSameCase = document.getElementById("searchInput").value.toLowerCase() 
//     console.log(allInSameCase)
//     if (allInSameCase === "wave" || allInSameCase === "temp" || allInSameCase === "temperature" ){
//         console.log("this a wave")
//     }
//     else {ls
//         document.getElementById("errorMessage")
//     }
// }

// const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=50&lon=100&appid='
// fetch(weatherUrl)
//     .then(res => res.json())
//     .then((data) => console.log(data.list[35].wind))
