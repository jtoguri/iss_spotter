const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("FetchMyIP didn't work!" , error);
    return;
  }

  fetchCoordsByIP(ip, (error, coordinates) => {
    if (error) {
      console.log("fetchCoords didn't work!" , error);
      return;
    }
  
    console.log('It worked! Returned coordinates:' , coordinates);
  });
});

