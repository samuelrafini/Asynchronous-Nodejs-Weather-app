var somePromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Hey. It worked!');
    }, 2500);
});

somePromise.then((message) =>{
    console.log('Succes: ', message);
}, (errorMessage)=> {
    console.log('Error: ', errorMessage)
});