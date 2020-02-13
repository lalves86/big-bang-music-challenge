import axios from 'axios';

async function getPlaylist(token, playlist_id) {
  const offset = Math.floor(Math.random() * 30);
  const playlist_url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=20&offset=${offset}`;

  try {
    const playlist = await axios.get(playlist_url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const tracksArray = [];
    playlist.data.items.map(track => {
      tracksArray.push(track.track.name);
    });
    return tracksArray;
  } catch (e) {
    console.log(e);
  }
}

export default getPlaylist;
