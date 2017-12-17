const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyDhJxH0l8R7vsySB1YXcjtU19JArIXIPLw',
    json: true
}, (error, respond, body) =>{
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
    
    
});


