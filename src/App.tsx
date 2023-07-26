import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { useHero } from "./hooks/useHero";
import Header from "./components/header/header";
import HeroSection from "./components/hero/hero";
import Trips from "./components/trips/trips";
import "./App.css";

const App: React.FC = () => {
  const [nav, setNav] = useState<string[]>([]);
  const { data, isLoading } = useFetch();
  const { heroics, waitAMo } = useHero();

  useEffect(() => {
    setNav(["Trending", "Your orders", "Community"]);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value) {
      const stuff = e.currentTarget.value.split("/");
      const experience = stuff[0];
      const cost = parseInt(stuff[1]);
      alert(
        `Okie dokie, so you've bought the '${experience}' excursion, at a cost of ${
          cost &&
          cost.toLocaleString("en-GB", { style: "currency", currency: "GBP" })
        }\rNice one 🚀`
      );
    }
  };

  return (
    <>
      <Header nav={nav} />
      {waitAMo && <p>...getting heroics...</p>}
      {heroics && <HeroSection heroData={heroics} />}
      {isLoading && <h2>Loading...</h2>}
      {data && <Trips tripData={data} handleClick={handleClick} />}
    </>
  );
};

export default App;
