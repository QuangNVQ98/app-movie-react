import { useEffect, useState } from "react";
import { getMovieDetails } from "../utils/api";
import { imageOriginal } from "../utils/constants";
import { Detail, Cast, Item, VideoTrailer } from "../utils/types";

interface MovieProps {
  data: Detail;
  casts: Cast[];
  similar: Item[];
  videos: VideoTrailer[];
}

export const PopupDetail = ({ selectedID, mediaType, setSelectedID, setShowPopup }: { selectedID: string | null | undefined , mediaType: 'movie' | 'tv' | null | undefined , setSelectedID: any, setShowPopup: any }) => {

  console.log('PopupDetail selectedID: ',selectedID)
  const [movies, setMovieData] = useState<MovieProps>()

  useEffect(() => {

    const getMovieData = async (selectedID: any) => {
      console.log('call API getMovieData')
      const data: MovieProps = await getMovieDetails(selectedID);
      setMovieData(data);
      console.log('getMovieDetails: ', data)
    };

    if(selectedID && mediaType === 'movie') {
      getMovieData(selectedID);
    }

  }, [selectedID]);

  const closePopupDetail = () => {
    setSelectedID(null);
    setShowPopup(false)
    document.body.classList.remove("overflow-y-hidden")
  }

  return (
    <div className="z-[101] w-full min-h-screen h-full bg-black-05 z-50 overflow-y-scroll fixed top-[50%] left-[50%] !-translate-x-1/2 !-translate-y-1/2 ">
      <div className="w-full lg:w-[60%] h-auto bg-gray-18 lg:rounded-md shadow-popup-detail lg:my-35 lg:left-[21%] relative">
        <div
          className="absolute top-10 right-15 cursor-pointer z-50 transition transform ease-in-out duration-700 hover:rotate-180"
          onClick={closePopupDetail}
        >
          <i className="fa-solid fa-circle-xmark text-3xl"></i>
        </div>
        <div className="w-full h-[40vh] lg:h-[70vh] relative">
          <img
            className="w-full h-full object-cover lg:rounded-t-md"
            src={movies?.data ? imageOriginal(movies.data?.backdrop_path) : ''}
            alt=""
          />
          <div className="flex absolute w-auto h-auto left-50 bottom-60 z-50">
            <div className="flex justify-center items-center py-8 px-30 rounded-md text-black bg-gray-e6 w-auto h-45 mr-10 cursor-pointer">
              <span className="mr-10 text-xl font-medium">Watch</span>
              <i className="fa-solid fa-play text-xl"></i>
            </div>
            <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-10 border-solid border-2 border-white cursor-pointer">
              <i className="fa-regular fa-plus text-xl"></i>
            </div>
            <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-10 border-solid border-2 border-white cursor-pointer">
              <i className="fa-regular fa-thumbs-up text-xl"></i>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[70vh] bg-linear-18"></div>
        <div className="w-full h-auto px-15 lg:px-50 py-15 flex">
          <div className="w-full lg:w-2/3 text-gray-e5">
            <div className="font-semibold text-2xl lg:text-3xl mb-20">
              { (mediaType === 'movie') ? movies?.data?.title : movies?.data?.name}
            </div>

            <div className="font-thin text-xs leading-5">
              {movies?.data?.overview}
            </div>
          </div>

          <div className="w-full lg:w-1/3 text-xs pl-15 leading-5">
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Actor: </span>
              <span className="text-gray-e5">
                Cillian Murphy, Sam Neill, Helen MCCroy
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Category: </span>
              <span className="text-gray-e5">
                Chương trình truyền hình tội phạm, Anh, Thời kỳ lịch sử
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Type: </span>
              <span className="text-gray-e5">Violent</span>
            </div>
          </div>
        </div>

        <div className="w-full h-auto px-15 lg:px-50 py-15 mt-5 lg:mt-30 text-gray-e5">
          <div className="text-gray-e5 text-xl mb-20 font-medium">
            Nội dung tương tự
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-[47%] lg:w-[31%] h-360 bg-gray-2f rounded-md mb-20 mr-10 lg:mr-15">
              <div className="w-full h-2/5">
                <img
                  className="w-full h-full object-cover rounded-t-md"
                  src="https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center py-15 px-15">
                <div className="font-medium text-lg">Sweet girl</div>
                <div className="flex justify-center items-center pl-1 rounded-full text-white bg-gray-2a w-35 h-35 border-solid border-2 border-white cursor-pointer">
                  <i className="fa-regular fa-plus text-base"></i>
                </div>
              </div>
              <div className="px-15 font-thin text-xs leading-5 text-gray-d2 hidden-long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                debitis quae rerum! Eveniet saepe porro libero, sapiente ad
                recusandae ea, earum tenetur natus, quos ab accusamus,
                recusandae ea, earum tenetur natus, quos ab accusamus,
                recusandae ea, earum tenetur natus, quos ab accusamus?
              </div>
            </div>
            <div className="w-[47%] lg:w-[31%] h-360 bg-gray-2f rounded-md mb-20 mr-10 lg:mr-15">
              <div className="w-full h-2/5">
                <img
                  className="w-full h-full object-cover rounded-t-md"
                  src="https://image.tmdb.org/t/p/w500/m76LAg0MchIcIW9i4yXsQPGQJJF.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center py-15 px-15">
                <div className="font-medium text-lg">Sweet girl</div>
                <div className="flex justify-center items-center pl-1 rounded-full text-white bg-gray-2a w-35 h-35 border-solid border-2 border-white cursor-pointer">
                  <i className="fa-regular fa-plus text-base"></i>
                </div>
              </div>
              <div className="px-15 font-thin text-xs leading-5 text-gray-d2 hidden-long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                debitis quae rerum! Eveniet saepe porro libero, sapiente ad
                recusandae ea, earum tenetur natus, quos ab accusamus,
                recusandae ea, earum tenetur natus, quos ab accusamus,
                recusandae ea, earum tenetur natus, quos ab accusamus?
              </div>
            </div>
            <div className="w-[47%] lg:w-[31%] h-360 bg-gray-2f rounded-md mb-20 mr-10 lg:mr-15">
              <div className="w-full h-2/5">
                <img
                  className="w-full h-full object-cover rounded-t-md"
                  src="https://image.tmdb.org/t/p/w500/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center py-15 px-15">
                <div className="font-medium text-lg">Sweet girl</div>
                <div className="flex justify-center items-center pl-1 rounded-full text-white bg-gray-2a w-35 h-35 border-solid border-2 border-white cursor-pointer">
                  <i className="fa-regular fa-plus text-base"></i>
                </div>
              </div>
              <div className="px-15 font-thin text-xs leading-5 text-gray-d2 hidden-long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                debitis quae rerum! Eveniet saepe porro libero, sapiente ad
                recusandae ea, earum tenetur natus, quos ab accusamus,
                recusandae ea, earum tenetur natus, quos ab accusamus,
                recusandae ea, earum tenetur natus, quos ab accusamus?
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto px-15 lg:px-50 py-15 text-gray-e5">
          <div className="text-gray-e5 text-xl mb-20 font-medium">
            Trailer & Nội dung khác
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-[47%] lg:w-[31%] h-auto bg-gray-2f rounded-md mb-20 mr-15">
              <div className="w-full h-200">
                <img
                  className="w-full h-full object-cover rounded-t-md"
                  src="https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center py-15 px-15">
                <div>
                  <span className="font-medium text-lg">Trailer: </span>
                  <span className="font-medium text-lg">Sweet girl</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto px-15 lg:px-50 py-15 text-gray-e5">
          <div className="text-gray-e5 text-xl mb-20 font-medium">
            Giới thiệu về <span className="font-semibold">Sweet Girl</span>
          </div>
          <div className="text-xs lg:text-sm leading-5">
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Actor: </span>
              <span className="text-gray-e5">
                Cillian Murphy, Sam Neill, Helen MCCroy, Cillian Murphy, Sam
                Neill, Helen MCCroy, Cillian Murphy, Sam Neill, Helen MCCroy,
                Cillian Murphy, Sam Neill, Helen MCCroy
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Category: </span>
              <span className="text-gray-e5">
                Chương trình truyền hình tội phạm, Anh, Thời kỳ lịch sử
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Type: </span>
              <span className="text-gray-e5">Violent</span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Category: </span>
              <span className="text-gray-e5">
                Chương trình truyền hình tội phạm, Anh, Thời kỳ lịch sử
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
