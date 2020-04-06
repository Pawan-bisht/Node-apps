// async function add()
// {
//     const res = await setTimeout(()=>{
//         console.log("Added function");
//     },2000);
//     console.log(res);
//     console.log("End of Function");
    
// }

// console.log("Starting Point");
// console.log(add());
// console.log("Pawan Bisht");

//----------------------NOTE ------------------------
/** So this is the first important thing to note about 
 *  async functions  always return a promise
 *   that promise is fulfilled with the value you the developer
 *  choose to return from the function 
 * 
 */

const doWork = async () =>{
    return "Pawan";              //In this return value is a promise which is fulfiled with a string 
                                // "Pawan" value
}                   

console.log(doWork());       // Promise{ "Pawan" }

doWork()
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err);
})

/*
    So what we get access to in async is the await operator V
     await operator gets used with a promise
*/                                



const add = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0)
                return reject("The number cant be negative");
            resolve(a + b);
        },2000);
    });
}

const doAdd = async ()=>{
    let sum = await add(1, 99);            //Reject the function in just 2 sec later
    let sum2 = await add(sum, 50);
    let sum3 = await add(sum2, -50);         //Reject the function in 6 sec
    return sum3;
}

doAdd()
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})
