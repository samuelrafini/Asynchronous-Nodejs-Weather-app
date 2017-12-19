
const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodeAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyDhJxH0l8R7vsySB1YXcjtU19JArIXIPLw`,
            json: true
        }, (error, respond, body) => {
            if (error) {
                reject('Unable to connect to Google server.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find adress');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longtitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
