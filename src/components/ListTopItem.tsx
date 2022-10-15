import { imageResize } from "../utils/constants";
import { Item } from "../utils/types";

export const ListTopItem = ({ index, item, setSelectedID, setShowPopup, setMediaType }: { index: number, item: Item, setSelectedID: any, setShowPopup: any, setMediaType: any }) => {
  
  const openPopupDetail = () => {
    setSelectedID(item.id);
    setMediaType(item.media_type);
    setShowPopup(true);
    document.body.classList.add('overflow-y-hidden');
  }
  
  return (
    <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
      <img
        className="w-1 absolute -left-30 list-top-item-number"
        src={index ? require(`../assets/images/number-${index}.png`) : ""}
        alt=""
      />
      <img
        className="w-1/2 h-full object-cover relative list-top-item-poster"
        src={item.poster_path ? imageResize(item.poster_path, "w300") : ""}
        alt=""
      />

      <div className="id_hover mb-100 w-435 h-411 -mr-80 border-ra rounded-md bg-gray-14 text-white absolute flex flex-col z-30 origin-center transform-none opacity-100 shadow-movie">
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
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Watch</span>
              </button>
              {/* <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                <i className="fa-regular fa-plus text-xl"></i>
              </div> */}
            </div>
            <div className="flex justify-center items-center pl-1 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer"
              onClick={openPopupDetail}
            >
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
          <div className="mb-15">
            {item.media_type == "movie" ? item?.title : item?.name}
          </div>

          <div className="flex items-center text-gray-6d text-sm">
            <span className="mr-10">
              {item.media_type == "movie" ? "Movie" : "TV show"}
            </span>
            <span className="mr-10">
              <i className="fa fa-circle text-[5px] text-white"></i>
            </span>
            <span className="mr-10">
              {item.media_type == "movie"
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
