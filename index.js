// The code below is temporary and can be commented out.
const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('142.120.70.191', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});