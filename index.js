console.log("Starting");


setTimeout(()=>{
    console.log("3 timer out");
},10000);

setTimeout(()=>{
    console.log("0 timer out");
},0);

setTimeout(()=>{
    console.log("2 timer out");
},5000);

pause = function()
{
    for(let i =0 ;i<1000000000;i++)
    {
    var x = i *2;
    }
    console.log("We are here");
}
pause();
console.log('Stoping');