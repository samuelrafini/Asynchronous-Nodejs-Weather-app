// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs
// .options({
//     a: {
//         demand: true,
//         alias:'address',
//         describe: 'address to fetch weather for',
//         string: true
//     }
// })
// .help()
// .alias('help', 'h')
// .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage){
//         console.log(errorMessage);
//     }else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

// b922a860a6b8da843f0d8939c9e7926f
// https://api.darksky.net/forecast/b922a860a6b8da843f0d8939c9e7926f/52.074029,4.3225757

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/b922a860a6b8da843f0d8939c9e7926f/52.074029,4.3225757',
    json:true
    
}, (error, response, body) => {
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    }else{
        console.log("Unable to fetch WebAuthnAssertion.");
    }
});










