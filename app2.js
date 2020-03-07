const geoLocation = require("./utils.js/forecast");


geoLocation(70.45,40.733,(error,data)=>{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(data);
    }
})