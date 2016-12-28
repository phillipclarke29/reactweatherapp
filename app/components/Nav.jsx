var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <div>
      <h2>Nav Component</h2>
      <Link to="/">Get Weather</Link>
      <Link to="/about">About</Link>
      <Link to="/Examples">Examples</Link>
      </div>
    );
  }

})

module.exports = Nav;
