import React from "react";
import "./Home.css";
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
      <Footer />
    </div>
  );
};

export default Home;
