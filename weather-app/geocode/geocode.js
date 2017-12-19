const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodeAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyDhJxH0l8R7vsySB1YXcjtU19JArIXIPLw`,
        json: true
    }, (error, respond, body) => {
        if (error) {
            callback('Unable to connect to Google server.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find adress');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            })
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;

