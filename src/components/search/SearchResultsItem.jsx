function SearchResultsItem({ artistTrack }) {
  return (
    <>
      <div className="flex max-w-full cursor-pointer items-center rounded-xl bg-neutral-600 px-3 py-2 duration-300 hover:bg-green-700 hover:opacity-75">
        <div className="flex-grow overflow-hidden rounded-full">
          <img
            src={artistTrack.album.images.at(2).url}
            alt={`Image of ${artistTrack.name}`}
            className="h-100 w-full max-w-fit rounded-full bg-center object-cover duration-300 hover:scale-110"
          />
        </div>

        <h2 className="text-md mt-2 text-left font-semibold text-white">
          {artistTrack.name}
        </h2>
      </div>
    </>
  );
}

export default SearchResultsItem;
