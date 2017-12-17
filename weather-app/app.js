const request = require('request');
//1301 Lombard street

const yargs = require('yargs');
const argv = yargs.
options({
    a: {
        demand: true,
        alias:'address',
        describe: 'address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

var encodeAddress = encodeURIComponent(argv.a);
console.log(argv);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyDhJxH0l8R7vsySB1YXcjtU19JArIXIPLw`,
    json: true
}, (error, respond, body) =>{
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
});




