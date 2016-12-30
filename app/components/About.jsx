var React = require('react');

var About = (props)=> {
  return (
    <div>
    <div className="text-center page-title">
    <h1>About</h1>
    </div>
    <p>This add is about exploring REACT using the Open Weather API</p>
    <li>
    <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">Learn React</a>
    </li>
    <li>
    <a href="https://openweathermap.org/api">Open Weather</a>
    </li>
    </div>
)
};
module.exports = About;
