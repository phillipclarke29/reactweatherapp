var React = require('react');

var WeatherMessage = ({temp,location})=> {
    return (
      <div>
        <p>The Temperature in {location} is {temp}</p>
    </div>
)
};
module.exports = WeatherMessage;
