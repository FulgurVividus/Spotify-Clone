import { CLIENT_ID, CLIENT_SECRET } from "./config";

async function homeCategories() {
  try {
    const authParams = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    const tokeResponse = await fetch(
      `https://accounts.spotify.com/api/token`,
      authParams,
    );
    const tokenData = await tokeResponse.json();
    const token = tokenData.access_token;

    //

    const searchParams = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const categoriesResponse = await fetch(
      `https://api.spotify.com/v1/browse/categories?en_US&limit=50`,
      searchParams,
    );
    const categoriesData = await categoriesResponse.json();
    const categories = categoriesData.categories.items.slice(1, 50);

    if (!categories) throw new Error("No categories found");

    //

    return categories;
  } catch (error) {
    console.error(`Error in homeCategories: ${error}`);
    return { data: [] };
  }
}

export default homeCategories;
