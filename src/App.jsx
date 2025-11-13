import React from "react";
import AppNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import PricingPlans from "./components/PricingPlans";
import FitnessToolsSection from "./components/FitnessToolsSection";
import MeetOurTrainers from "./components/MeetOurTrainers";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <AppNavbar />
      <main>
        <section id="home"><HeroSection /></section>
        <section id="programs"><StatsSection /></section>
        <section id="coaching"><ServicesSection /></section>
        <section id="pricing"><PricingPlans /></section>
        <section id="tools"><FitnessToolsSection /></section>
        <section id="gallery"><Gallery /></section>
        <section id="trainers"><MeetOurTrainers /></section>
      </main>
      <Footer />
    </>
  );
};

export default App;
