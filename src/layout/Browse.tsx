import { Outlet, useSearchParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PopupDetail } from "../components/PopupDetail";
import { useEffect, useState } from "react";
import { useStore } from "../store/hooks";
import { actions } from "../store";

export const BrowseLayout = () => {

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState<string | null | undefined>();
  const [mediaType, setMediaType] = useState<
    "movie" | "tv" | null | undefined
  >();

  const [state, dispatch] = useStore();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams);

    if(params?.id) {
      const storeItem = {
        selectedID: params?.id,
        mediaType: params?.media_type,
        showPopup: true
      }
      dispatch(actions.setSelectedMovies(storeItem))
    }

  }, [searchParams]);


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
