import React from "react";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Qualities from "../Components/Qualities";
import Menu from "../Components/Menu";
import WhoAreWE from "../Components/WhoAreWE";
import Team from "../Components/Team";
import Reservation from "../Components/Reservation";
import Footer from "../Components/Footer";

const Home = function(){
    return (
        <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWE/>
        <Team/>
        <Reservation/>
        <Footer/>
        </>
    );
}

export default Home;