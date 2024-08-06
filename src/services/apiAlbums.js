export async function getAlbums() {
  const res = await fetch(`https://api.music.apple.com/v1/catalog/albums`);

  if (!res.ok) throw new Error(`Failed to fetch charts`);

  const data = await res.json();
  console.log(data);

  return data;
}
