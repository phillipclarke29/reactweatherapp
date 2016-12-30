var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherApp = require('openWeatherApp');
var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});
    openWeatherApp.getTemp(location).then(function (temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading : false,
      })
    }, function(err) {
      alert(err);
      that.setState({
        isLoading : false
      });
    })

  },
  render: function(){
    var temp = this.state.temp;
    var location = this.state.location;
    var isLoading = this.state.isLoading;
    function renderMessage(){
      if (isLoading == true){
        return <h3 className="text-center">Fetching Weather ...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>

      }
    }
    return (
      <div>
      <h2 className="text-center">Get Weather</h2>
      <WeatherForm onSearch={this.handleSearch}></WeatherForm>
      {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;
