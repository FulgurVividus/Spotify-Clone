import { useEffect, useRef, useState } from "react";
import Loader from "../common/Loader";
import SearchResultsItem from "./SearchResultsItem";
import search from "../../services/search";

function Search() {
  // TODO: Add search functionality
  const [searchInput, setSearchInput] = useState("");
  const [artistTopTracks, setArtistTopTracks] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const inputEl = useRef(null);

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
  async function handleKeyPress(e) {
    if (e.key === "Enter") {
      setIsLoading(true);

      const { artistTracksData, trackData } = await search(searchInput);
      console.log("artistTracksData", artistTracksData);
      console.log("trackData", trackData);

      setArtistTopTracks(artistTracksData.tracks || []);
      setTracks(trackData?.tracks || []);

      setSearchInput("");
      setIsLoading(false);
    }
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

      {artistTopTracks.length > 0 ? (
        <div>
          <h1 className="mb-10 font-semibold">Top Tracks</h1>

          <div className="mb-10 flex flex-col gap-y-5">
            {artistTopTracks.map((artistTrack) => (
              <SearchResultsItem
                key={artistTrack.id}
                artistTrack={artistTrack}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm">No results yet, search.</p>
      )}
    </>
  );
}

export default Search;
