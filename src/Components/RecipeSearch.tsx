import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "../css/Recipes.module.css";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strSource?: string;
}

const RecipeSearch: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async (query: string = "") => {
    try {
      setError("");
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipes(response.data.meals || []);
    } catch (err) {
      setError("Error fetching recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const query = searchRef.current?.value || "";
    if (!query.trim()) return;
    setLoading(true);
    fetchRecipes(query);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Recipe Finder</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          ref={searchRef}
          placeholder="Search for a recipe..."
          className={styles.searchInput}
        />
        <button
          onClick={handleSearch}
          className={styles.searchButton}
        >
          Search
        </button>
      </div>

      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <ul className={styles.recipeList}>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal} className={styles.recipeItem}>
            <h2 className={styles.recipeTitle}>{recipe.strMeal}</h2>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className={styles.recipeImage}
            />
            <p className={styles.recipeDescription}>
              {recipe.strInstructions.slice(0, 250)}...
            </p>
            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.recipeLink}
              >
                View Full Recipe
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;