import { useEffect, useState } from "react";
import CategoriesItem from "../components/home/CategoriesItem";
import Loader from "../components/common/Loader";
import homeCategories from "../services/apiHomeCategories";

function Home() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCategories() {
      setIsLoading(true);

      const categories = await homeCategories();
      setCategories(categories || []);

      setIsLoading(false);
    }

    fetchCategories();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <main>
        <div>
          <h1 className="max-w-fit cursor-default rounded-full bg-green-700 p-3 text-lg font-semibold uppercase duration-300 hover:opacity-75">
            Categories
          </h1>

          <div className="mt-10 flex flex-wrap justify-between gap-x-1 gap-y-5">
            {categories.map((category) => (
              <CategoriesItem category={category} key={category.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
