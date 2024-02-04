import "./gallery.css";
function Gallery() {
  return (
    <div className="gallery">
      <h1>Collections of photos</h1>
      <div className="photos">
        <div className="g-img">
          <img src="./R.jpg" alt="" height={"200px"} width={"400px"} />

          <img src="./hh.jpg" alt="" height={"200px"} width={"400px"} />
        </div>
        <div className="g-img">
          <img src="./fern.jpg" alt="" height={"200px"} width={"400px"} />

          <img src="./download.jpg" alt="" height={"200px"} width={"400px"} />
        </div>
        <div className="g-img">
          <img src="./background.jpg" alt="" height={"200px"} width={"400px"} />
          <img src="./wallpaper.jpg" alt="" height={"200px"} width={"400px"} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
