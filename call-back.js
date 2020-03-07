console.log("Starting Point");

const names = ["andrew","mead"];

//Call back is notonly used for Asynchronous programming
// As we See here
names.forEach((name)=>
        {
            console.log(name);        
        });

// Thats the problem  without using callback

let geocode  = (address,callback)=>{
    setTimeout(()=>{
        const coord = {
            lat:23,
            long:34
        };
        return coord;
    },2000);
}

let data = geocode("Delhi");
console.log(data);

//Problem Resolved using callback

 geocode  = (address,callback)=>{
    setTimeout(()=>{
        let coord,error;

        let statusCode = 500;
        if(statusCode===400)
        {
             error = {errorMessage:"We are unbale to get data"};
            coord = null;
            callback(error,coord);
        }
        else
        {
            coord = {
                lat:23,
                long:34
            };
            error = null;
            callback(error,coord);

        }
    },2000);
}
 data = geocode("Delhi",(err,data)=>
                    {
                            if(err)
                            {
                                console.log(err);
                            }
                            else
                            {
                                console.log(data);
                            }
                    });

console.log("Stopping Point");


function add(x, y, callback)
{
    setTimeout(()=>{
        callback(x + y);
    },2000);
}

add(2,3,(data)=>{console.log(data)});