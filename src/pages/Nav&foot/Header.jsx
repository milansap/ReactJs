/* eslint-disable react/prop-types */

import "./Header.css";

function Header(props) {
  const { setWeb } = props;
  return (
    <div>
      <div className="naav">
        <div className="logo">
          <div>
            <img
              src={props.bar.logo_img}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <a
            href="#"
            onClick={() => {
              setWeb("About");
            }}
          >
            <h2>{props.bar.logo_name} </h2>
          </a>
        </div>
        <div className="bar">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  setWeb("Home");
                }}
              >
                {props.bar.nav_home}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setWeb("About");
                }}
              >
                {" "}
                {props.bar.nav_about}{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setWeb("Gallery");
                }}
              >
                {" "}
                {props.bar.nav_gallery}{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setWeb("Contact");
                }}
              >
                {" "}
                {props.bar.nav_contact}{" "}
              </a>
            </li>
            <li>
              <a href="#">{props.bar.nav_boyz}</a>
            </li>
            s
          </ul>
        </div>
        <div className="search">
          <form>
            <input type="text" placeholder="Search...." name="search" />
            {/* <div className="button">
              <i className="fa fa-search" style="font-size: 18px;"></i>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
