import axios from 'axios';
import getPlaylist from '../utils/getPlaylist';
import spotifyAuthorization from '../../config/spotifyConfig';

class WeatherController {
  async index(req, res) {
    const { city } = req.body;

    const token = await spotifyAuthorization();

    try {
      const weatherConditions = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APP_ID}&units=metric`
      );

      const { temp } = weatherConditions.data.main;

      if (temp > 30) {
        const playlist_id = '37i9dQZF1DXaXB8fQg7xif';
        const playlist = await getPlaylist(token, playlist_id);
        return res.json({
          sugestion: 'Party music',
          city,
          temp,
          playlist,
        });
      }
      if (temp > 15 && temp <= 30) {
        const playlist_id = '37i9dQZF1DXcBWIGoYBM5M';
        const playlist = await getPlaylist(token, playlist_id);
        return res.json({
          sugestion: 'Pop hits',
          city,
          temp,
          playlist,
        });
      }
      if (temp > 10 && temp <= 15) {
        const playlist_id = '37i9dQZF1DWXRqgorJj26U';
        const playlist = await getPlaylist(token, playlist_id);
        return res.json({
          sugestion: 'Rock On',
          city,
          temp,
          playlist,
        });
      }
      if (temp <= 10) {
        const playlist_id = '37i9dQZF1DWWEJlAGA9gs0';
        const playlist = await getPlaylist(token, playlist_id);
        return res.json({
          sugestion: 'Classical chill',
          city,
          temp,
          playlist,
        });
      }
    } catch (e) {
      return res.status(400).json({
        Error:
          'Something went wrong with your request, probably you mistyped the city name',
      });
    }
  }
}

export default new WeatherController();
