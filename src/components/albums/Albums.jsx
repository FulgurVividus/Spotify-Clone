import { useEffect, useState } from "react";
import { getAlbums } from "../../services/apiAlbums";
import Loader from "../home/Loader";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchAlbums() {
      setIsLoading(true);

      try {
        const data = await getAlbums();
        setAlbums(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAlbums();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <div>
        <h1>Albums</h1>
      </div>
    </>
  );
}

export default Albums;
