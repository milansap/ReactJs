/* eslint-disable react/prop-types */
import { useState } from "react";
import "./navbar.css";
function Navbar(props) {
  const { setContent } = props;
  const [isWatch, setIsWatch] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <div className="logo1">
            <img
              src="./Pinterest-logo.png"
              alt="logo"
              height={"50px"}
              width={"50px"}
            />
            <span
              onClick={() => {
                setContent("Home");
                setIsWatch(false);
              }}
            >
              {props.nav.Home}
            </span>
          </div>
          <a
            onClick={() => {
              setContent("Watch");
              setIsWatch(true);
            }}
          >
            {props.nav.Watch}
          </a>

          {!isWatch && (
            <a
              onClick={() => {
                setContent("Explore");
              }}
            >
              {props.nav.Explore}
            </a>
          )}
        </div>
        <div className="bar">
          <ul>
            {isWatch && (
              <input
                type="text"
                placeholder="Search for easy dinners,fashion,etc."
                name="search"
              ></input>
            )}
            {!isWatch && (
              <>
                <li>
                  <a
                    onClick={() => {
                      setContent("About");
                    }}
                  >
                    {props.nav.About}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setContent("Business");
                    }}
                  >
                    {props.nav.Business}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setContent("Blog");
                    }}
                  >
                    {props.nav.Blog}
                  </a>
                </li>
              </>
            )}
            <li>
              <a
                className="s1"
                onClick={() => {
                  setContent("Login");
                }}
              >
                {props.nav.Login}
              </a>
            </li>
            <li>
              <a
                className="s2"
                onClick={() => {
                  setContent("Signup");
                }}
              >
                {props.nav.Signup}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
