import React from "react";
import "./Home.css";
import Navbar from "../../Component/Header/Header";
import TitleCards from "../../Component/TitleCards/TitleCards";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import CardList from "../../Component/CardList/CardList";
import Header from "../../Component/Header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <Banner />
      <CardList/>
      {/* <TitleCards/> */}
      <Footer />
    </div>
  );
};

export default Home;
