const axios = require("axios");
const request = require("request");
const fs = require("fs");
const token = "07486efd789916558eba8a6aa60975434a34b87e"



// request(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`, function ( response, body) {
//   console.log('body:', body); // Print the HTML for the Google homepage.

//   fs.writeFileSync('answer.json', JSON.stringify(response.data));
// });


async function reqHttp(){
    const res = await axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`);

    console.log(res.data)

    fs.writeFileSync('answer.json', JSON.stringify(res.data));
    return 
} 

reqHttp()

// let jsonContent = JSON.stringify(reqHttp);
// console.log(jsonContent);

// let  jsonObj = JSON.parse(jsonContent);
// console.log(jsonObj);


// const reqHttp = axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=07486efd789916558eba8a6aa60975434a34b87e')
//     .then(function (res){
//         console.log(res.data);
//     })
//         .catch(function(error){
//             if (error){
//                 console.log(error)
//             }
//         });




