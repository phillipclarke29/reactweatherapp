var React = require('react');

var WeatherMessage = ({temp,location})=> {
    return (
        <h3 className="text-center">The Temperature in {location} is {temp}</h3>

)
};
module.exports = WeatherMessage;
