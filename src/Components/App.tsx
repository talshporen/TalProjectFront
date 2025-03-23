import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import CreatePost from "./CreatePost"; 
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout"; 
import AllPosts from "./AllPosts";
import PostDetails from "./PostDetails"; 
import OAuthCallback from "./OAuthCallback"; 
import ChatGPTPage from "./ChatGPTPage";
import UserProfile from "./UserProfile";
import RecipeSearch from "./RecipeSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/oauth/callback" element={<OAuthCallback />} /> 
        <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
        <Route path="/profile" element={<UserProfile />} />
          <Route path="all-posts" element={<AllPosts />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="post/:postId" element={<PostDetails />} /> 
          <Route path="chatgpt" element={<ChatGPTPage />} /> 
          <Route path="recipes" element={<RecipeSearch />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
