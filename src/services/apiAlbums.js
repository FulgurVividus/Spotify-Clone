const BASE_URL = `https://api.deezer.com`;

export async function getAlbums() {
  const res = await fetch(`${BASE_URL}/chart/albums`);

  if (!res.ok) {
    console.log(`Failed to fetch albums: ${res.status}`);
    throw new Error(`Failed to fetch albums`);
  }

  const data = await res.json();
  console.log(data);

  return data.data;
}
