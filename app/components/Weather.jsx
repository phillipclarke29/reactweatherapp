var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      location: 'London',
      temp: 88
    }
  },
  handleSearch: function(location){
  this.setState({
    location: location,
    temp: 23
  })
  },
  render: function(){
    var temp = this.state.temp;
    var location = this.state.location;
    return (
      <div>
      <h3>Get Weather</h3>
      <WeatherForm onSearch={this.handleSearch}></WeatherForm>
      <WeatherMessage temp={temp} location={location}></WeatherMessage>
      </div>
    );
  }

});

module.exports = Weather;
