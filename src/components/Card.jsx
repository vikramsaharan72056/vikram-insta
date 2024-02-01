import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import MovieIcon from "@mui/icons-material/Movie";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "./card.css"

const cards = [
  {
    img: "https://res.cloudinary.com/dp6gqhir8/image/upload/v1706628190/WhatsApp_Image_2024-01-29_at_3.31.50_AM_2_eldopq.jpg",
    views:12,
    likes:23,
    comments:45
  },
  {
    img: "https://res.cloudinary.com/dp6gqhir8/image/upload/v1706628190/WhatsApp_Image_2024-01-29_at_3.31.50_AM_2_eldopq.jpg",
    views:23,
    likes:56,
    comments:39
  },
  {
    img: "https://res.cloudinary.com/dp6gqhir8/image/upload/v1706628190/WhatsApp_Image_2024-01-29_at_3.31.50_AM_2_eldopq.jpg",
    views:29,
    likes:56,
    comments:29
  },
  {
    img: "https://res.cloudinary.com/dp6gqhir8/image/upload/v1706628190/WhatsApp_Image_2024-01-29_at_3.31.50_AM_2_eldopq.jpg",
    views:11,
    likes:98,
    comments:67
  },
  {
    img: "https://res.cloudinary.com/dp6gqhir8/image/upload/v1706628190/WhatsApp_Image_2024-01-29_at_3.31.50_AM_2_eldopq.jpg",
    views:56,
    likes:38,
    comments:34
  },
  {
    img: "https://res.cloudinary.com/dp6gqhir8/image/upload/v1706628190/WhatsApp_Image_2024-01-29_at_3.31.50_AM_2_eldopq.jpg",
    views:32,
    likes:39,
    comments:39
  },
];

function Card() {
  const classPost = "border border-solid flex flex-row w-16 ml-4";
  const classReels = "border border-solid flex flex-row w-16 ml-28";
  const classTagged = "border border-solid flex flex-row w-16 ml-52";
  const [activeClass, setActiveClass] = useState(classPost);

  const handleReelsClick = () => {
    setActiveClass(classReels);
  };

  const handlePostClick = () => {
    setActiveClass(classPost);
  };

  const handleTaggedClick = () => {
    setActiveClass(classTagged);
  };

  return (
    <>
      <hr className="w-3/4 m-auto mt-10" />
      <div className={`bg-white-800 w-72 m-auto `}>
        <span className={activeClass}></span>
      </div>
      <div className="text-white font-semibold text-lg flex flex-row gap-10 justify-center mt-5">
        <p className="cursor-pointer" onClick={handlePostClick}>
          <AppsIcon fontSize="small" className="mb-1" />
          POSTS
        </p>
        <p className="cursor-pointer" onClick={handleReelsClick}>
          <MovieIcon fontSize="small" className="mb-1" />
          REELS
        </p>
        <p className="cursor-pointer" onClick={handleTaggedClick}>
          <AccountBoxIcon fontSize="small" className="mb-1" />
          TAGGED
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 w-3/4 m-auto mb-5 mt-5">
  {cards.map((card, index) => (
    <div className="post relative cursor-pointer" key={card.img + index}>
      <img src={card.img} alt={`Card ${index}`} className="w-full block" />
      <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 flex justify-center items-center transition-opacity duration-300">
        <div className="info text-center text-white flex flex-row gap-10">
          <span className="likes ">❤️{card.likes}</span> 
          <span className="comments">💬{card.comments}</span>
        </div>
      </div>
      <div className="views absolute bottom-0 left-0  text-white p-1">
        <span>👁️{card.views}</span>
      </div>
    </div>
  ))}
</div>




    </>
  );
}

export default Card;
