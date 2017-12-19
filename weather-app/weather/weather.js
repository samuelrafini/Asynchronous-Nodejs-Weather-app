
const request = require('request');

var getWeather = (lat, lng, callback) => {

   

    request({
        url: `https://api.darksky.net/forecast/b922a860a6b8da843f0d8939c9e7926f/${lat},${lng}`,
        json:true
        
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        }else{
            callback("Unable to fetch WebAuthnAssertion.");
        }
    });
}

module.exports.getWeather = getWeather;

