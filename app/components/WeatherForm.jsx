var React = require('react');

var WeatherForm = React.createClass({
  render: function(){
    return (
      <div>
      <form>
        <input type = "text" placeholder="enter a city"/>
        <div>
        <button>Get Temperature</button>
        </div>
      </form>
    </div>
    );
  }

});

module.exports = WeatherForm;
