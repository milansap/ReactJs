/* eslint-disable react/no-unescaped-entities */
import "./home.css";
function Home() {
  return (
    <div>
      <div className="main_container">
        <h1>Get your next </h1>
        <h3>new look outfit</h3>
        <div className="manage-img">
          <div className="group1">
            <div className="img-1">
              <div className="container">
                <img src="https://picsum.photos/200/300" alt="" />
                <div className="overlay"></div>
              </div>
            </div>
            <div className="img-2">
              <div className="container">
                <img src="https://picsum.photos/200/300" alt="" />
                <div className="overlay"></div>
              </div>
            </div>
            <div className="img-3">
              <div className="container">
                <img src="https://picsum.photos/200/300" alt="" />
                <div className="overlay"></div>
              </div>
            </div>
          </div>
          <div className="group2">
            <div className="img-5">
              <div className="container">
                <img src="https://picsum.photos/200/300" alt="" />
                <div className="overlay"></div>
              </div>
            </div>
            <div className="img-6">
              <div className="container">
                <img src="https://picsum.photos/200/300" alt="" />
                <div className="overlay"></div>
              </div>
            </div>
            <div className="img-7">
              <div className="container">
                <img src="https://picsum.photos/200/300" alt="" />
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          Here's how its works
          <a href="#arrow">
            {" "}
            <img src="./arrow.png" width={"20px"} height={"20px"} />
          </a>
        </div>
        <div id="arrow" className="second-container">
          <div className="sec_img">
            <div className="i2">
              <img src="./coffee.jpg" alt="" width={"250px"} height={"300px"} />
            </div>
            <div className="i3">
              <img src="./meal.jpg" alt="" width={"250px"} height={"350px"} />
            </div>

            <div className="i1">
              <img src="./momo.jpeg" alt="" width={"300px"} height={"400px"} />
            </div>
          </div>
          <div className="sec_desc">
            <h1>Search for an idea</h1>
            <h4>
              What do you want to try next? Think <br />
              of something you’re into—like “easy <br />
              chicken dinner”—and see what you <br /> find.
            </h4>
            <div className="btn">Explore</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
