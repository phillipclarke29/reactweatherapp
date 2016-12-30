var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherApp = require('openWeatherApp');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherApp.getTemp(location).then(function (temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading : false,
      })
    }, function(e) {
      that.setState({
        isLoading : false,
        errorMessage: e.message
      });
    })
  },
  render: function(){
    var temp = this.state.temp;
    var location = this.state.location;
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;
    function renderMessage(){
      if (isLoading == true){
        return <h3 className="text-center">Fetching Weather ...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>

      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
      <h2 className="text-center">Get Weather</h2>
      <WeatherForm onSearch={this.handleSearch}></WeatherForm>
      {renderMessage()}
      {renderError()}
      </div>
    );
  }

});

module.exports = Weather;
