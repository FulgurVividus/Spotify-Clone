import { useNavigate } from "react-router-dom";

function SearchResultsItem({ album }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/search/${album.id}`, { state: { album } });
  }

  return (
    <>
      <div
        onClick={handleNavigate}
        className="h-100 flex max-w-xs cursor-pointer flex-col rounded-xl bg-neutral-600 px-3 py-4 duration-300 hover:bg-green-700 hover:opacity-75"
      >
        <div className="flex-grow overflow-hidden rounded-full">
          <img
            src={album.images.at(1).url}
            alt={`Image of ${album.name}`}
            className="h-100 w-full max-w-fit rounded-full bg-center object-cover duration-300 hover:scale-110"
          />
        </div>

        <h2 className="text-md mt-2 text-left font-semibold text-white">
          {album.name}
        </h2>
      </div>
    </>
  );
}

export default SearchResultsItem;
