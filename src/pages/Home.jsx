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
      </div>
    </div>
  );
}

export default Home;
