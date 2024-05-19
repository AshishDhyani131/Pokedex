import React from "react";
import HomePageLayout from "../layouts/HomePageLayout";
import Header from "../components/Header";
import PokeList from "../components/PokeList";
const HomePage = () => {
  return (
    <HomePageLayout>
      <Header></Header>
      <PokeList></PokeList>
    </HomePageLayout>
  );
};

export default HomePage;
