import "./Header.css";
function Footer() {
  return (
    <div className="footer">
      <div className="f-text">
        <p>
          Copyright @2024,Designed by <a href="">Milan Sapkota</a>
        </p>
      </div>
      <div className="social-media">
        <a href="#">
          <img
            src="./icons8-facebook-50.png"
            alt=""
            height={"50px"}
            width={"40px"}
          />
        </a>
        <a href="#">
          <img
            src="./icons8-insta-50.png"
            alt=""
            height={"50px"}
            width={"40px"}
          />
        </a>
        <a href="#">
          <img
            src="./icons8-youtube-50.png"
            alt=""
            height={"50px"}
            width={"40px"}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
