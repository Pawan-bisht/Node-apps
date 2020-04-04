const exPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve([1,2,3]);
        reject("This is the error");
    },2000);
})

exPromise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})