

const CONFIG = {
  SERVER_URL: import.meta.env.VITE_SERVER_URL || "http://localhost:3000",
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
  OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY || "",
  RECIPES_API_URL: "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",

};

export default CONFIG;