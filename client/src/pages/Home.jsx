import React from "react";
import MainBanner from "../components/mainBanner";
import Categories from "../components/categories";
import BestSeller from "../components/bestSeller";
import BottomBanner from "../components/bottomBanner";
import NewsLetter from "../components/newsLetter";

function Home() {
  return (
    <>
      <div className="mt-10">
        <MainBanner />
        <Categories />
        <BestSeller />
        <BottomBanner />
        <NewsLetter />
      </div>
    </>
  );
}

export default Home;
