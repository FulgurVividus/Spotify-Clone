import { useEffect, useState } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../services/config";
import CategoriesItem from "../components/home/CategoriesItem";
import Loader from "../components/common/Loader";

function Home() {
  const [accessToken, setAccessToken] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //# Access Token
  useEffect(function () {
    const authParams = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    fetch(`https://accounts.spotify.com/api/token`, authParams)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((error) => console.log(error));
  }, []);

  //# Categories Fetch
  useEffect(
    function () {
      setIsLoading(true);

      async function fetchCategories() {
        const searchParams = {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const categories = await fetch(
          `https://api.spotify.com/v1/browse/categories?en_US&limit=50`,
          searchParams,
        )
          .then((result) => result.json())
          .then((data) => setCategories(data.categories.items.slice(1, 50)))
          .catch((error) => console.log(error))
          .finally(() => setIsLoading(false));
      }

      fetchCategories();
    },
    [accessToken],
  );

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
