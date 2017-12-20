const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
    a: {
        demand: true,
        alias:'address',
        describe: 'address to fetch weather for',
        string: true,
        default: 'aruba'
    }
})
.help()
.alias('help', 'h')
.argv;


var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyDhJxH0l8R7vsySB1YXcjtU19JArIXIPLw`

axios.get(geocodeUrl).then( (response) => {
    if(response.data.status==='ZERO_RESULTS'){
        throw new Error('Unable to find that adress')
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/b922a860a6b8da843f0d8939c9e7926f/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var temperatureMin = response.data.daily.data[0].temperatureMin;
    var temperatureMax = response.data.daily.data[0].temperatureMax;
    var summary = response.data.daily.summary;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`)
    console.log(`Min Temperature: ${temperatureMin}. Max ${temperatureMax}.`)
    console.log(summary);
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to Connect');
    }else{
        console.log(e.message);
    }
    
});












