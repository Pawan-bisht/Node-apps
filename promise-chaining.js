const add = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a + b);
        },2000);
    });
}

// add(2, 3)
// .then(sum=>{
//     console.log(sum);
//     add(sum, 5)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
    
// })
// .catch(err=>{
//     console.log(err);
// })

//------------------------- PROBLEM IN THIS SOLUTION----------------------

/*
    In this problem it is same as the multiple callbacks without Promises
    In this it is problamatic when the nesting of promises has to handle
*/

//------------------------SOLUTION -------------------------


add(1, 4)
.then(sum=>{
    console.log(sum);
    return add(sum, 5);
})
.then(sum2=>{
    console.log(sum2);
})
.catch(err=>{
    console.log(err);
})
