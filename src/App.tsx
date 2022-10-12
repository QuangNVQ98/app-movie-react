import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeContent } from "./components/HomeContent";
import "./index.scss";
import { getHomeData } from "./utils/api";
import { Item } from "./utils/types";

const App: React.FC = () => {

  const [main, setMain] = useState<Item>(
    {
      poster_path: '',
      title: '',
      name: '',
      overview: '',
      backdrop_path: '',
      id: 8,
      media_type: "movie",
      vote_average: 0
    }
  )

  useEffect(() => {
    const init = async () => {
      const data = await getHomeData();
      const trending = data["Trending Movies"];

      setMain(trending[new Date().getDate() % trending.length]);
      console.log("data: ", data);
      console.log("main: ", trending[new Date().getDate() % trending.length]);
    };

    init();
  }, []);

  return (
    <main>
      <Header></Header>

      <Banner movie={main}></Banner>

      <HomeContent></HomeContent>

      <Footer></Footer>
    </main>
  );
};

export default App;
