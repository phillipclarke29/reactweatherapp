var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length>0){
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },
  render: function(){
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
        <input type = "search" placeholder="enter a city" ref="location"/>
        <div>
        <button className="button expanded hollow">Get Temperature</button>
        </div>
      </form>
    </div>
    );
  }

});

module.exports = WeatherForm;
