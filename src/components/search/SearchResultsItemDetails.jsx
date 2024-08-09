import { useLocation } from "react-router-dom";

function SearchResultsItemDetails() {
  const location = useLocation();
  const { album } = location.state;

  return (
    <>
      <div className="flex gap-5">
        <img
          src={album.images.at(0).url}
          alt={`Image of ${album.name}`}
          className="rounded-3xl border-2 border-white"
        />

        <div>
          <h1>Name: {album.name}</h1>
        </div>
      </div>
    </>
  );
}

export default SearchResultsItemDetails;
