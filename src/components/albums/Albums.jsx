import { useEffect, useState } from "react";
import getAlbums from "../../services/apiAlbums";

function Albums() {
  const [topCharts, setTopCharts] = useState([]);

  useEffect(
    function () {
      async function fetchAlbums() {
        try {
          const charts = await getAlbums();
          setTopCharts(charts);
        } catch (error) {
          console.error(error);
        }
      }

      fetchAlbums();
    },
    [topCharts],
  );

  return (
    <>
      <div>
        <h1>Albums</h1>
      </div>
    </>
  );
}

export default Albums;
