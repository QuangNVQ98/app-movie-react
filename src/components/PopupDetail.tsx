import { Fragment, useEffect, useState } from "react";
import { getMovieDetails, getTVDetails } from "../utils/api";
import { imageOriginal } from "../utils/constants";
import { Detail, Cast, Item, VideoTrailer } from "../utils/types";
import { SimilarItem } from "./ListSimilarItem";

interface MovieProps {
  data: Detail;
  casts: Cast[];
  similar: Item[];
  videos: VideoTrailer[];
}

interface TVProps {
  data: Detail;
  casts: Cast[];
  similar: Item[];
  videos: VideoTrailer[];
}

export const PopupDetail = ({
  selectedID,
  mediaType,
  setSelectedID,
  setShowPopup,
}: {
  selectedID: string | null | undefined;
  mediaType: "movie" | "tv" | null | undefined;
  setSelectedID: any;
  setShowPopup: any;
}) => {
  console.log("PopupDetail selectedID: ", selectedID);
  const [movies, setMovieData] = useState<MovieProps>();
  const [collapsed, setCollapsed] = useState<boolean>(true);

  useEffect(() => {
    const getMovieData = async (selectedID: any) => {
      console.log("call API getMovieData");
      const data: MovieProps = await getMovieDetails(selectedID);
      setMovieData(data);
      console.log("getMovieDetails: ", data);
    };

    const getTVData = async (selectedID: any) => {
      console.log("call API getTVData");
      const data: TVProps = await getTVDetails(selectedID);
      setMovieData(data);
      console.log("getTVData: ", data);
    };

    if (selectedID && mediaType === "movie") {
      getMovieData(selectedID);
    }

    if (selectedID && mediaType === "tv") {
      getTVData(selectedID);
    }
  }, [selectedID]);

  const closePopupDetail = () => {

    window.history.pushState({}, document.title, "/" + '');

    setSelectedID(null);
    setShowPopup(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="z-[101] w-full min-h-screen h-full bg-black-05 z-50 overflow-y-scroll fixed top-[50%] left-[50%] !-translate-x-1/2 !-translate-y-1/2 ">
      <div className="w-full lg:w-[60%] h-auto bg-gray-18 lg:rounded-md shadow-popup-detail lg:my-35 lg:left-[21%] relative">
        <div
          className="absolute top-10 right-15 cursor-pointer z-50 transition transform ease-in-out duration-700 hover:rotate-180 w-35 h-35 rounded-full bg-gray-18 flex justify-center items-center"
          onClick={closePopupDetail}
        >
          <i className="fa-solid fa-xmark text-lg text-white"></i>
        </div>
        <div className="w-full h-[40vh] lg:h-[70vh] relative">
          <img
            className="w-full h-full object-cover lg:rounded-t-md"
            src={movies?.data ? imageOriginal(movies.data?.backdrop_path) : ""}
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
              {mediaType === "movie" ? movies?.data?.title : movies?.data?.name}
            </div>

            <div className="font-thin text-xs leading-5">
              {movies?.data?.overview}
            </div>
          </div>

          <div className="w-full lg:w-1/3 text-xs pl-15 leading-5">
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Actor: </span>
              <span className="text-gray-e5">
                {movies?.casts.slice(0, 7).map((item: Cast, index: number) => (
                  <span key={item.id}>
                    {item.name + (index === 6 ? "" : ", ")}
                  </span>
                ))}
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Category: </span>
              <span className="text-gray-e5">
                {movies?.data?.genres.map((item: any, index: number) => (
                  <span key={item.id}>
                    {item.name +
                      (index === movies?.data?.genres.length - 1 ? "" : ", ")}
                  </span>
                ))}
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Release date: </span>
              <span className="text-gray-e5">{movies?.data.release_date}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-auto px-15 lg:px-50 py-15 mt-5 lg:mt-15 text-gray-e5">
          <div className="text-gray-e5 text-xl lg:text-2xl mb-20 font-medium">
            Similar movies
          </div>
          <div
            className={
              collapsed
                ? "w-full flex flex-wrap shortened"
                : "w-full flex flex-wrap"
            }
          >
            {movies?.similar.map((item: Item) => (
              <SimilarItem key={item.id} item={item}></SimilarItem>
            ))}
          </div>
          <div className="section-divider collapsed">
            <div className="section-divider-icon" onClick={changeCollapsed}>
              <i
                className={
                  collapsed ? "fa fa-chevron-down" : "fa fa-chevron-up"
                }
              ></i>
            </div>
          </div>
        </div>

        <div className="w-full h-auto px-15 lg:px-50 py-15 text-gray-e5">
          <div className="text-gray-e5 text-xl mb-20 font-medium">
            Trailer & Others
          </div>
          <div className="w-full flex flex-wrap">
            {/* {movies &&
              movies?.videos.length > 0 &&
              movies?.videos.slice(0, 5).map((item) => (
                <Fragment key={item.key}>
                  <div className="w-[47%] lg:w-[31%] h-auto bg-gray-2f rounded-md mb-20 mr-15">
                    <div
                      className="relative h-0 w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${item.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Fragment>
              ))} */}
          </div>
        </div>

        <div className="w-full h-auto px-15 lg:px-50 py-15 text-gray-e5">
          <div className="text-gray-e5 text-xl lg:text-2xl mb-20 font-medium">
            Giới thiệu về{" "}
            <span className="font-semibold">
              {mediaType === "movie" ? movies?.data?.title : movies?.data?.name}
            </span>
          </div>
          <div className="text-xs lg:text-sm leading-5">
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Actor: </span>
              <span className="text-gray-e5">
                {movies?.casts.map((item: Cast, index: number) => (
                  <span key={item.id}>
                    {item.name +
                      (index === movies?.casts.length - 1 ? "" : ", ")}
                  </span>
                ))}
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Category: </span>
              <span className="text-gray-e5">
                {movies?.data?.genres.map((item: any, index: number) => (
                  <span key={item.id}>
                    {item.name +
                      (index === movies?.data?.genres.length - 1 ? "" : ", ")}
                  </span>
                ))}
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Companies: </span>
              <span className="text-gray-e5">
                {movies?.data?.production_companies &&
                  movies?.data?.production_companies.map(
                    (item: any, index: number) => (
                      <span key={item.id}>
                        {item.name +
                          (index ===
                          (movies?.data?.production_companies &&
                            movies?.data?.production_companies.length - 1)
                            ? ""
                            : ", ")}
                      </span>
                    )
                  )}
              </span>
            </div>
            <div className="mb-8 leading-5">
              <span className="text-gray-77">Countries: </span>
              <span className="text-gray-e5">
                {movies?.data?.production_countries &&
                  movies?.data?.production_countries.map(
                    (item: any, index: number) => (
                      <span key={index}>
                        {item.name +
                          (index ===
                          (movies?.data?.production_countries &&
                            movies?.data?.production_countries.length - 1)
                            ? ""
                            : ", ")}
                      </span>
                    )
                  )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
