import { createSearchParams, useNavigate } from "react-router-dom";
import { imageResize } from "../utils/constants"
import { Item } from "../utils/types"

export const SimilarItem = ({ item }: { item: Item }) => {
  const navigate = useNavigate();
  
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
    <div className="w-[47%] lg:w-[31%] min-h-[360px] h-auto bg-gray-2f rounded-md mb-20 mr-10 lg:mr-15">
      <div className="w-full h-[135px]">
        <img
          className="w-full h-full object-cover rounded-t-md"
          src={item.poster_path ? imageResize(item.poster_path, "w300") : ""}
          alt=""
        />
      </div>
      <div className="flex justify-between items-center py-15 px-15 h-[80px]">
        <div className="font-medium text-lg hidden-long-text-title">{item.media_type === "movie" ? item?.title : item?.name}</div>
        <div onClick={watchMovie} className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a min-w-[35px] w-35 h-35 border-solid border-2 border-white cursor-pointer">
          <i className="fa fa-play text-xs"></i>
        </div>
      </div>
      <div className="px-15 font-thin text-xs leading-5 text-gray-d2 hidden-long-text">
        {item.overview}
      </div>
    </div>
  )
}
