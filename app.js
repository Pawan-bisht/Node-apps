const express = require('express'); 
const request  = require("request");
const app = express();
const PORT = process.env.port || 3000;

request({
    url:'https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoicGF3YW4xNyIsImEiOiJjazY1YTc4YmUwOWNsM3NwN2lqZ3g2YnRmIn0.xDCqXuPTZ6-6HHertVwXsQ'
    ,json:true
},
function(err,resp,body){
        if(err)
        {
            throw err;
        }
        else if(body.message)
        {
            console.log(body.message);
        }
        else
        {
            console.log(resp.statusCode);
            console.log("Logitude and latitude are "+body.features[0].center[0]+  "  " + body.features[0].center[1]);
        }
})


app.listen(PORT,()=>{
    console.log("Server is running at 3000");
});