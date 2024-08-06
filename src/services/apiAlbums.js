import { API_KEY } from "./config";

async function getAlbums() {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch albums");
  }

  const data = await response.json();
  const charts = data.tracks.track;

  console.log(charts);
  return charts;
}

export default getAlbums;
