/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
function Layout(props) {
  const { children, setContent } = props;
  const nav = {
    Home: "Pinterest",
    Watch: "Watch",
    Explore: "Explore",
    About: "About",
    Business: "Business",
    Blog: "Blog",
    Login: "Login",
    Signup: "Signup",
  };
  return (
    <div>
      <Navbar nav={nav} setContent={setContent} />
      {children}
    </div>
  );
}

export default Layout;
