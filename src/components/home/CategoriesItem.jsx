function CategoriesItem({ category }) {
  return (
    <>
      <div className="group flex flex-col items-center gap-1">
        <h2 className="text-md max-w-fit cursor-default rounded-lg bg-white p-1 text-black duration-300 group-hover:bg-green-600">
          {category.name}
        </h2>
        <img
          src={category.icons.at(0).url}
          alt={`Image of ${category.name}`}
          className="select-none rounded-full bg-center duration-300 group-hover:opacity-75"
        />
      </div>
    </>
  );
}

export default CategoriesItem;
