/* eslint-disable react/prop-types */

import "./card.css";
function Card(props) {
  const { children, title, img } = props;
  return (
    <div className="card">
      {title && <div className="title">{title}</div>}
      {img && <img src={img} />}
      {children && <h5 className="desc">{children}</h5>}
    </div>
  );
}

export default Card;
