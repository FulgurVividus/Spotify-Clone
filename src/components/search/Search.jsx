import { useEffect, useRef } from "react";

function Search() {
  // TODO: Add search functionality

  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <form>
        <input
          type="search"
          placeholder="What do you want to listen to ?"
          className="w-full max-w-md rounded-3xl border-none p-3 pl-4 text-black outline-none"
          ref={inputEl}
        />
      </form>
    </>
  );
}

export default Search;
