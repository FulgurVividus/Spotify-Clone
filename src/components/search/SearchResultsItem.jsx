function SearchResultsItem({ album }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={album.images.at(1).url}
          alt={`Image of ${album.name}`}
          className="max-w-fit"
        />
        <h2 className="text-md text-center">{album.name}</h2>
      </div>
    </>
  );
}

export default SearchResultsItem;
