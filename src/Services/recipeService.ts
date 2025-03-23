//import CONFIG from "../config";


import axios from "axios";

export const fetchRecipes = async (query: string = "") => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    return response.data.meals || []; 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
  