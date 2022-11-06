import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./assets/styles/styles.scss";
import { Banner } from "./components/Banner";
import { HomeContent } from "./components/HomeContent";
import { SearchSection } from "./components/SearchSection";
import { WatchSection } from "./components/WatchSection";
import "./index.scss";
import { BrowseLayout } from "./layout/Browse";
import { getHomeData } from "./utils/api";
import { randomNumber } from "./utils/helper/random-number.helper";
import { CategoryMovie, Item } from "./utils/types";
import { actions } from "./store";
import { useStore } from "./store/hooks";

const App: React.FC = () => {
  const [movieData, setmovieData] = useState<
    Record<CategoryMovie, Item[]> | null | undefined
  >();
  const [main, setMain] = useState<Item>();
  const [state, dispatch] = useStore();


  useEffect(() => {
    const init = async () => {
      // dispatch(actions.setLoading({
      //   ...state,
      //   loading: true
      // }))
      const data = await getHomeData();
      setmovieData(data);
      const trending = data["Trending_Movies"];

      setMain(trending[randomNumber(10, trending.length - 1)]);
      // dispatch(actions.setLoading({
      //   ...state,
      //   loading: false
      // }))
    };

    init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browse" element={<BrowseLayout />}>
          <Route
            path=""
            element={
              <>
                <Banner movie={main}></Banner>
                <HomeContent movieData={movieData}></HomeContent>
              </>
            }
          />
          <Route
            path="search"
            element={
              <>
                <SearchSection></SearchSection>
              </>
            }
          ></Route>
        </Route>
        <Route path="/watch" element={<WatchSection></WatchSection>}></Route>
        <Route path="/" element={<Navigate to="/browse" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
