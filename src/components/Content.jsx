/* eslint-disable react/prop-types */
import Home from "../pages/Home";
import Watch from "../pages/Watch";
import Explore from "../pages/Explore";
import About from "../pages/About";
import Business from "../pages/Business";
import Blog from "../pages/Blog";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function Content({ content }) {
  if (content === "Home") return <Home />;
  else if (content === "Watch") return <Watch />;
  else if (content === "Explore") return <Explore />;
  else if (content === "About") return <About />;
  else if (content === "Blog") return <Blog />;
  else if (content === "Business") return <Business />;
  else if (content === "Signup") return <Signup />;
  else if (content === "Login") return <Login />;
  else null;
}

export default Content;
