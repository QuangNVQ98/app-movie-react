import * as React from "react";
import { useEffect, useState } from "react";
import "./assets/styles/styles.scss";
import "./App.scss";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeContent } from "./components/HomeContent";
import "./index.scss";
import { getHomeData } from "./utils/api";
import { randomNumber } from "./utils/helper/random-number.helper";
import { CategoryMovie, Item } from "./utils/types";

const App: React.FC = () => {

  const [movieData, setmovieData] = useState<Record<CategoryMovie, Item[]> | null | undefined>()
  const [main, setMain] = useState<Item>()

  useEffect(() => {
    const init = async () => {
      const data = await getHomeData();
      setmovieData(data)
      const trending = data["Trending_Movies"];

      setMain(trending[randomNumber(10, trending.length-1)]);
      console.log("data: ", data);
      console.log("main: ", trending[new Date().getDate() % trending.length]);
    };

    init();
  }, []);

  return (
    <>
      <Header></Header>

      <Banner movie={main}></Banner>
      
      <HomeContent movieData={movieData}></HomeContent>

      <Footer></Footer>
    </>
  );
};

export default App;
