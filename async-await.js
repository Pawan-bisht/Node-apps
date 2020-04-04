async function add()
{
    const res = await setTimeout(()=>{
        console.log("Added function");
    },2000);
    console.log(res);
    console.log("End of Function");
    
}

console.log("Starting Point");
console.log(add());
console.log("Pawan Bisht");