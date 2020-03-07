const request = require("request");

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoicGF3YW4xNyIsImEiOiJjazY1YTc4YmUwOWNsM3NwN2lqZ3g2YnRmIn0.xDCqXuPTZ6-6HHertVwXsQ";

const geoLocation = (lat,long,callback)=>{

    request(
    {
        url:"https://api.mapbox.com/geocoding/v5/mapbox.places/" + lat + "," + long + ".json?access_token=pk.eyJ1IjoicGF3YW4xNyIsImEiOiJjazY1YTc4YmUwOWNsM3NwN2lqZ3g2YnRmIn0.xDCqXuPTZ6-6HHertVwXsQ",
        json:true
    },
    (err,response)=>{
        if(err)
        {
            callback(err,undefined);
        }
        else if(response.body.features.length ===0)
        {
            callback({err:"Record not found as your entered location!!!"},undefined);
        }
        else
        {
            callback(undefined, {address:response.body.features[0].place_name});
        }
    });
}


module.exports = geoLocation;
