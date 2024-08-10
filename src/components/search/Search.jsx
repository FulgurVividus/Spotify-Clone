import { useEffect, useRef, useState } from "react";
import Loader from "../common/Loader";
import SearchResultsItem from "./SearchResultsItem";
import search from "./search";

function Search() {
  // TODO: Add search functionality
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);
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

      const data = await search(searchInput);
      setAlbums(data.items || []);
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

      {albums.length > 0 ? (
        <div>
          <h1>Albums</h1>

          <div className="flex flex-wrap justify-between gap-x-1 gap-y-5 md:gap-x-0">
            {albums.map((album) => (
              <SearchResultsItem key={album.id} album={album} />
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
