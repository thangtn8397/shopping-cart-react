import React, { useState } from "react";

const imageData = [
  {
    id: 1,
    image:
      "https://dl.airtable.com/.attachments/531463b9203cf77dde1a4ba01a155259/74f19d04/extra-1.jpeg",
  },
  {
    id: 2,
    image:
      "https://dl.airtable.com/.attachments/6ee299084de403c89180798387866dcb/a3e4d19c/extra-2.jpeg",
  },
  {
    id: 3,
    image:
      "https://dl.airtable.com/.attachments/90b9f8136775d56a0fc8080341f03f49/939a5566/extra-3.jpeg",
  },
  {
    id: 4,
    image:
      "https://dl.airtable.com/.attachments/3a17a255e0967079a573f65ee32cf00d/8b09449b/extra-4.jpeg",
  },
  {
    id: 5,
    image:
      "https://dl.airtable.com/.attachments/531463b9203cf77dde1a4ba01a155259/74f19d04/extra-1.jpeg",
  },
];

const SliderImage = () => {
  const [image, setImage] = useState(imageData[0].image);
  return (
    <div className="slider">
      <img src={image} alt className="slider__thumb" />
      <div className="slider__slide">
        {imageData.map((img) => (
          <img
            key={img.id}
            src={img.image}
            className="slider__slide-image"
            onClick={() => setImage(img.image)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImage;
