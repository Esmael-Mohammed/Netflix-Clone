import React from "react";
import "./Home.css";
import Navbar from "../../Component/Navbar/Navbar";
import TitleCards from "../../Component/TitleCards/TitleCards";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
     <Banner/>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top pics for you"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
