import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PopupDetail } from "../components/PopupDetail";
import { useState } from "react";
import { useStore } from "../store/hooks";


export const BrowseLayout = () => {

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState<string | null | undefined>();
  const [mediaType, setMediaType] = useState<
    "movie" | "tv" | null | undefined
  >();

  const [state, dispatch] = useStore();

  return (
    <>
      <Header></Header>

      <Outlet />

      {state.showPopup && (
        <PopupDetail></PopupDetail>
      )}

      <Footer></Footer>
    </>
  );
};
