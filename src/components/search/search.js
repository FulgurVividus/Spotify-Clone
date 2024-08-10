import { CLIENT_SECRET, CLIENT_ID } from "../../services/config";

async function search(searchInput) {
  try {
    // API Access Token
    const authParams = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    const tokenResponse = await fetch(
      `https://accounts.spotify.com/api/token`,
      authParams,
    );
    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;

    //

    const searchParams = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const searchResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist,track,album&market=US&limit=50`,
      searchParams,
    );
    const searchData = await searchResponse.json();

    const artistID = searchData.artists?.items?.at(0)?.id;

    if (!artistID) throw new Error("No artistID found");

    // console.log(artistID);

    const albumResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`,
      searchParams,
    );

    const albumData = await albumResponse.json();
    console.log(albumData);

    return albumData;
  } catch (error) {
    console.error(`Error in search: ${error}`);
    return { data: [] };
  }
}

export default search;
