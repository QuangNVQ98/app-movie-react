import { useEffect, useState } from "react";
import { useStore } from "../store/hooks";
import { getMovieDetails, getTVDetails, getTVSeasons } from "../utils/api";
import { imageOriginal, imageResize } from "../utils/constants";
import { Cast, Detail, Episode, Item, MovieProps, Season, VideoTrailer } from "../utils/types";
import { SimilarItem } from "./ListSimilarItem";
import { actions } from "../store";
import { createSearchParams, useNavigate } from "react-router-dom";

export const PopupDetail = () => {
  const [movies, setMovieData] = useState<MovieProps>();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [showSeasons, setShowSeasons] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [runAway, setRunAway] = useState<boolean>(false);
  const [showAllSeason, setShowAllSeason] = useState<boolean>(false);
  const [state, dispatch] = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieData = async (_selectedID: any) => {
      const data: MovieProps = await getMovieDetails(_selectedID);
      setMovieData(data);
    };

    const getTVData = async (_selectedID: any) => {
      const data: MovieProps = await getTVDetails(_selectedID);
      const seasonsData = await getTVSeasons(_selectedID);
      if(seasonsData && seasonsData[0]?.season_number === 0) {
        seasonsData.forEach((item: any) => {
          item['season_number'] = item['season_number'] + 1

          const episodes = item['episodes']

          if(episodes && episodes.length > 0) {
            const length = episodes.length
            episodes.forEach((sub: any) => {
              sub['season_number'] = sub['season_number'] + 1
            })
          }
        })
      }
      data.seasons = seasonsData;
      console.log("dataTV: ", data);

      setMovieData(data);
    };

    if (state.selectedID && state.mediaType === "movie") {
      getMovieData(state.selectedID);
    }

    if (state.selectedID && state.mediaType === "tv") {
      getTVData(state.selectedID);
    }
  }, [state]);

  const closePopupDetail = () => {
    window.history.pushState({}, document.title, "/" + "browse");

    const storeItem = {
      selectedID: null,
      mediaType: null,
      showPopup: false
    }

    dispatch(actions.setSelectedMovies(storeItem))

    document.body.classList.remove("overflow-y-hidden");
  };

  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleSeasonsDropdown = () => {
    setShowSeasons(!showSeasons);
  };

  const chooseSeason = (season: number) => {
    console.log('season: ', season)
    setSelectedSeason(season);
    setShowSeasons(false);
  }

  const animateButton = (e: any) => {
    e.preventDefault();
    setRunAway(!runAway);
  };

  const watchMovie = () => {
    navigate({
      pathname: "/watch",
      search: createSearchParams({
          id: String(state?.selectedID),
          mediaType: state?.mediaType
      }).toString()
    });
  }

  const goToWatchEpisode = (item: Episode) => {
    console.log('item: ', item)
    navigate({
      pathname: "/watch",
      search: createSearchParams({
          id: String(state?.selectedID),
          mediaType: state?.mediaType,
          season: String(item.season_number),
          episode: String(item.episode_number)
      }).toString()
    });
  }

  const doShowAllSeason = () => {
    setShowAllSeason(true);
  }

  return (
    <div className="z-[101] w-full min-h-screen h-full bg-black-05 z-50 overflow-y-scroll fixed top-[50%] left-[50%] !-translate-x-1/2 !-translate-y-1/2 ">
      <div className="w-full xl:w-[60%] h-auto bg-gray-18 lg:rounded-md shadow-popup-detail xl:my-35 xl:left-[21%] relative">
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
            <div onClick={watchMovie} className="flex justify-center items-center py-8 px-30 rounded-md text-black bg-gray-e6 w-auto h-45 mr-10 cursor-pointer">
              <span className="mr-10 text-xl font-medium">Watch</span>
              <i className="fa-solid fa-play text-xl"></i>
            </div>
            {/* <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-10 border-solid border-2 border-white cursor-pointer">
              <i className="fa-regular fa-plus text-xl"></i>
            </div> */}
            <div id="runaway-btn" className={`flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-10 border-solid border-2 border-white cursor-pointer absolute ${runAway ? 'run-right-away' : 'run-left-away'}`} onMouseEnter={animateButton}>
              <i className="fa-regular fa-thumbs-up text-xl"></i>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[70vh] bg-linear-18"></div>
        <div className="w-full h-auto px-15 lg:px-50 py-15 flex">
          <div className="w-full lg:w-2/3 text-gray-e5">
            <div className="font-semibold text-2xl lg:text-3xl mb-20">
              {state.mediaType === "movie" ? movies?.data?.title : movies?.data?.name}
            </div>

            <div className="font-thin text-sm leading-5 text-gray-d2">
              {movies?.data?.overview}
            </div>
          </div>

          <div className="w-full lg:w-1/3 text-sm pl-15 leading-5">
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

        {movies?.seasons && movies.seasons.length > 0 && (
          <div className="w-full h-auto px-15 lg:px-50 py-15 mt-5 lg:mt-15 text-gray-e5">
            <div className="w-full flex justify-between items-center">
              <div className="text-gray-e5 text-xl lg:text-2xl mb-20 font-medium">
                Episodes
              </div>

              <div className="relative inline-block">
                <div
                  className="flex justify-center items-center bg-gray-24 border border-gray-4d py-10 px-15 text-white cursor-pointer"
                  onClick={toggleSeasonsDropdown}
                >
                  <span className="mr-26">
                    Season {movies.seasons[selectedSeason-1].season_number}
                  </span>
                  <span>
                    <i
                      className={`fa ${
                        showSeasons ? "fa fa-caret-up" : "fa fa-caret-down"
                      }`}
                    ></i>
                  </span>
                </div>
                <div
                  id="seasonsDropdown"
                  className={`hidden absolute overflow-auto right-0 z-10 mt-[0.1em] min-w-[4em] w-[240px] cursor-pointer text-white border border-gray-4d bg-gray-24 py-20 ${
                    showSeasons ? "!block" : ""
                  }`}
                >
                  {movies?.seasons.map((item: Season, index: number) => (
                    <div key={index} className="mb-8 flex items-center px-15 py-10 hover:bg-gray-42" onClick={() => chooseSeason(item.season_number)}>
                      <span className="text-base font-medium mr-10">
                        Season {item.season_number}
                      </span>
                      <span className="text-xs">
                        ({item.episodes.length} episodes)
                      </span>
                    </div>
                  ))}

                  {/* <div className="mb-8 border border-gray-4d mx-10"></div>
                  <div onClick={doShowAllSeason} className="text-base font-semibold text-center px-15 py-10 hover:bg-gray-42">
                    Show all episodes
                  </div> */}
                </div>
              </div>
            </div>

            <div className="w-full mt-10">
              { movies?.seasons[selectedSeason-1].episodes.map((item: Episode, index: number) => (
                <div onClick={() => goToWatchEpisode(item)} key={item.id} className="w-full h-170 px-30 py-15 border-t border-gray-40 flex items-center cursor-pointer">
                  <div className="text-gray-d2 text-2xl w-[5%]">{item.episode_number}</div>

                  <img
                    className="w-[20%] h-[60%] object-contain mr-15"
                    src={imageResize(item.still_path, "w154")}
                    alt=""
                  />

                  <div className="w-[70%]">
                    <div className="text-white text-xl font-medium mb-5 hover:underline hover:underline-offset-4">
                      {item.name}
                    </div>
                    <div className="text-gray-d2 text-sm font-thin hidden-long-text-3">
                      {item.overview}
                    </div>
                  </div>
                </div>
              ))}


              {/* { showAllSeason && movies?.seasons.map((season: Season, index: number) => {
                
                <div key={season.id}>
                  <div className="text-gray-e5 text-lg lg:text-xl mb-15 font-medium">
                    Episodes
                  </div>

                  {
                    season.episodes.map((item: Episode) => {
                      <div onClick={() => goToWatchEpisode(item)} key={item.id} className="w-full h-170 px-30 py-15 border-t border-gray-40 flex items-center cursor-pointer">
                        <div className="text-gray-d2 text-2xl w-[5%]">{item.episode_number}</div>

                        <img
                          className="w-[20%] h-[60%] object-contain mr-15"
                          src={imageResize(item.still_path, "w154")}
                          alt=""
                        />

                        <div className="w-[70%]">
                          <div className="text-white text-xl font-medium mb-5 hover:underline hover:underline-offset-4">
                            {item.name}
                          </div>
                          <div className="text-gray-d2 text-sm font-thin hidden-long-text-3">
                            {item.overview}
                          </div>
                        </div>
                      </div>

                    })
                  }


                </div>
            })} */}


            </div>
          </div>
        )}

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

        {/* {movies && (
          <div className="w-full h-auto px-15 lg:px-50 py-15 text-gray-e5">
            <div className="text-gray-e5 text-xl mb-20 font-medium">
              Trailer & Others
            </div>
            <div className="w-full flex flex-wrap">
              {movies?.videos.length > 0 &&
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
                ))}
            </div>
          </div>
        )} */}

        <div className="w-full h-auto px-15 lg:px-50 py-15 text-gray-e5">
          <div className="text-gray-e5 text-xl lg:text-2xl mb-20 font-medium">
            Giới thiệu về{" "}
            <span className="font-semibold">
              {state.mediaType === "movie" ? movies?.data?.title : movies?.data?.name}
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
