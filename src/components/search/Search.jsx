import { useEffect, useRef, useState } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../../services/config";
import Loader from "../common/Loader";
import SearchResultsItem from "./SearchResultsItem";

function Search() {
  // TODO: Add search functionality
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const inputEl = useRef(null);

  //# API access token
  useEffect(function () {
    // API Access Token
    const authParams = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    fetch(`https://accounts.spotify.com/api/token`, authParams)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((error) => console.log(error));
  }, []);

  //# autofocus on input
  useEffect(
    function () {
      if (inputEl.current && searchInput === "") {
        inputEl.current.focus();
      }
    },
    [searchInput],
  );

  //# keypress event
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      search();
      setSearchInput("");
    }
  }

  //# Search Function
  async function search() {
    setIsLoading(true);

    // GET request using search to get the Artist ID
    const searchParams = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
      searchParams,
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items.at(0).id;
      })
      .catch((error) => console.log(error));

    // console.log(artistID);

    // GET request Artist ID grab all the albums from that artist
    const returnedAlbums = fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`,
      searchParams,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      })
      .finally(() => setIsLoading(false));

    // Display those albums to the user
  }

  if (isLoading) return <Loader />;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          placeholder="What do you want to listen to ?"
          className="mb-14 w-full max-w-md rounded-3xl border-none bg-neutral-700 p-3 pl-4 text-white outline-none focus:ring focus:ring-white"
          ref={inputEl}
          onKeyPress={handleKeyPress}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>

      <div className="flex flex-wrap justify-between gap-4">
        {albums.map((album) => (
          <SearchResultsItem key={album.id} album={album} />
        ))}
      </div>
    </>
  );
}

export default Search;
