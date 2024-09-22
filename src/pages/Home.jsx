import React from "react";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Testimonials from "../components/Testimonials";
import Download from "../components/Download";

const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <Banner />
      <Choose />
      <Testimonials />
      <Download />
    </>
  );
};

export default Home;
