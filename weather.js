
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

 //Email verification 
const sendBtn = document.getElementById("send");
function validateEmail(){
    let email = document.getElementById("email").value 
    const hasAtSign = email.includes("@")
    const hasPeriod = email.includes(".")
    const isLongEnough = email.length > 2
    let verifyCriteria1 = hasAtSign
    let verifyCriteria2 = hasPeriod
    let verifyCriteria3 = isLongEnough
    let x = (verifyCriteria1 && verifyCriteria2 && verifyCriteria3)
    return x
}

 
