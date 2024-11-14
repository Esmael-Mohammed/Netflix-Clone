import React from "react";
import TitleCards from "../TitleCards/TitleCards";

const CardList = () => {
  return (
    <>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top pics for you"} category={"now_playing"} />
      </div>
    </>
  );
};

export default CardList;
