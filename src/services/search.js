import { CLIENT_SECRET, CLIENT_ID } from "./config";

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

    //

    const searchResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist,track,album&market=ES&limit=50&include_external=audio`,
      searchParams,
    );
    const searchData = await searchResponse.json();
    // console.log("searchData from search.js", searchData);

    //# ARTIST

    const artistID = searchData.artists?.items?.at(0)?.id;

    if (!artistID) throw new Error("No artistID found");

    const artistTracksResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/top-tracks`,
      searchParams,
    );

    const artistTracksData = await artistTracksResponse.json();
    console.log("artistData from search.js", artistTracksData);

    //# TRACK

    const trackID = searchData.tracks?.items?.at(0)?.id;

    if (!trackID) throw new Error("No trackID found");

    const trackResponse = await fetch(
      `https://api.spotify.com/v1/tracks/${trackID}`,
      searchParams,
    );

    const trackData = await trackResponse.json();
    // console.log("trackData", trackData);

    //

    return { artistTracksData: artistTracksData, trackData: trackData };
  } catch (error) {
    console.error(`Error in search: ${error}`);
    return { albumData: [], trackData: [] };
  }
}

export default search;
