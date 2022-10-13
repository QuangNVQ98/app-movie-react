import { imageResize } from "../utils/constants";
import { Item } from "../utils/types";

export const ListTopItem = ({ index, item }: { index: number; item: Item }) => {
  return (
    <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end id_item">
      <img
        className="w-1 absolute -left-30"
        src={index ? require(`../assets/images/number-${index}.png`) : ""}
        alt=""
      />
      <img
        className="w-1/2 h-full object-cover relative"
        src={item.poster_path ? imageResize(item.poster_path, "w300") : ""}
        alt=""
      />

      <div className="id_hover w-435 h-411 -mr-80 border-ra rounded-md bg-gray-14 text-white absolute flex flex-col z-30 origin-center transform-none opacity-100 shadow-movie">
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
              <div className="flex justify-center items-center pl-4 rounded-full text-black bg-gray-e6 w-45 h-45 mr-8 cursor-pointer">
                <i className="fa-solid fa-play text-xl"></i>
              </div>
              <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                <i className="fa-regular fa-plus text-xl"></i>
              </div>
              <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                <i className="fa-regular fa-thumbs-up text-xl"></i>
              </div>
            </div>
            <div className="flex justify-center items-center pl-1 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
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
