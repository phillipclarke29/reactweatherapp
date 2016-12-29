var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var temp = this.props.temp;
    var location = this.props.location;
    console.log(this.props.location);
    return (
      <div>
        <p>The Temperature in {location} is {temp}</p>
    </div>
    );
  }

});

module.exports = WeatherMessage;
