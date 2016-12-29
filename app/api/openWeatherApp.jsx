var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=77d99bca9979c6f0ece0fa798eb12f43&units=metric';
//api.openweathermap.org/data/2.5/weather?q=London&appid=77d99bca9979c6f0ece0fa798eb12f43
//77d99bca9979c6f0ece0fa798eb12f43
module.exports={
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);

    });
  }
}
