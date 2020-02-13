import axios from 'axios';

async function spotifyAuthorization() {
  const token = await axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      grant_type: 'client_credentials',
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: process.env.CLIENT_ID,
      password: process.env.CLIENT_SECRET,
    },
  })
    .then(function(response) {
      return response.data.access_token;
    })
    .catch(function(error) {
      console.log(error);
    });

  return token;
}

export default spotifyAuthorization;
