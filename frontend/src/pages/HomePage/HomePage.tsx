import AboutOwner from "../../components/AboutOwner";
import AboutUs from "../../components/AboutUs";
import AboutWine from "../../components/AboutWine";
import Branch from "../../components/Branch";
import Categories from "../../components/Categories";
import Contacts from "../../components/Contacts";
import Events from "../../components/Events";
import Hero from "../../components/Hero";

import styles from "./HomePage.module.scss";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <div className={styles.home}>
      <Hero />
      <AboutUs />
      <Branch />
      <AboutWine />
      <AboutOwner />
      <Events />
      <Categories />
      <Branch />
      <Contacts />
    </div>
  );
};

export default HomePage;
