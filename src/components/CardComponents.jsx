import Card from "./Card";

import "./cardComponents.css";
function CardComponents() {
  const title = [
    {
      name: "card1",
      description: "description",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "card2",
      description: "descriptionzddfv",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "card2",
      description: "descriptionzddfv",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "card2",
      description: "descriptionzddfv",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "card2",
      description: "descriptionzddfv",
      img: "https://picsum.photos/200/300",
    },
  ];
  return (
    <>
      <div className="parent">
        {title.map((title, index) => (
          <Card key={index} title={title.name} img={title.img}>
            {title.description}
          </Card>
        ))}
      </div>
    </>
  );
}

export default CardComponents;
