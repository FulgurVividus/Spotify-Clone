import { useNavigate } from "react-router-dom";

function CategoriesItem({ category }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="group flex flex-col gap-1">
        <h2 className="text-md max-w-fit cursor-default rounded-lg bg-white p-1 text-black duration-300 group-hover:bg-green-600">
          {category.name}
        </h2>
        <img
          src={category.icons.at(0).url}
          alt={`Image of ${category.name}`}
          className="duration-300 group-hover:opacity-75"
        />
      </div>
    </>
  );
}

export default CategoriesItem;
