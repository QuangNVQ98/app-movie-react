import { createSearchParams, useNavigate } from "react-router-dom";
import { actions } from "../store";
import { useStore } from "../store/hooks";
import { imageResize } from "../utils/constants";
import { Item } from "../utils/types";

export const ListItem = ({
  item
}: {
  item: Item
}) => {
  const navigate = useNavigate();
  const [state, dispatch] = useStore();

  const openPopupDetail = () => {
    let refresh =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `?id=${item.id}&media_type=${item.media_type}`;
    window.history.pushState({ path: refresh }, "", refresh);

    document.body.classList.add("overflow-y-hidden");

    const storeItem = {
      selectedID: item.id,
      mediaType: item.media_type,
      showPopup: true,
    };
    dispatch(actions.setSelectedMovies(storeItem));
  };

  const watchMovie = () => {
    navigate({
      pathname: "/watch",
      search: createSearchParams({
          id: String(item.id),
          mediaType: item.media_type
      }).toString()
    });
  }

  return (
    <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center id_item hover:cursor-pointer" onClick={openPopupDetail}>
      <img
        className="w-full h-full object-cover relative"
        src={item.poster_path ? imageResize(item.poster_path, "w300") : ""}
        alt=""
      />
      <div className="id_hover mb-100 w-435 h-411 border-ra rounded-md bg-gray-14 text-white absolute flex flex-col z-30 origin-center transform-none opacity-100 shadow-movie">
        <div className="w-full h-245">
          <img
            className="w-full h-full object-cover !max-w-full !max-h-full"
            src={item.poster_path ? imageResize(item.poster_path, "w400") : ""}
            alt=""
          />
        </div>
        <div className="w-full h-full p-15">
          <div className="w-full h-auto flex flex-row justify-between mb-20">
            <div className="flex">
              <button className="learn-more" onClick={watchMovie}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Watch</span>
              </button>
              {/* <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                <i className="fa-regular fa-plus text-xl"></i>
              </div>
              <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                <i className="fa-regular fa-thumbs-up text-xl"></i>
              </div> */}
            </div>
            <div
              className="flex justify-center items-center pl-1 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer"
              onClick={openPopupDetail}
            >
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
          <div className="mb-15">
            {item.media_type === "movie" ? item?.title : item?.name}
          </div>

          <div className="flex items-center text-gray-6d text-sm">
            <span className="mr-10">
              {item.media_type === "movie" ? "Movie" : "TV show"}
            </span>
            <span className="mr-10">
              <i className="fa fa-circle text-[5px] text-white"></i>
            </span>
            <span className="mr-10">
              {item.media_type === "movie"
                ? item?.release_date
                : item?.first_air_date}
            </span>
            <span className="mr-10">
              <i className="fa fa-circle text-[5px] text-white"></i>
            </span>
            <span className="mr-10">{item.adult ? "Adult" : "All ages"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
