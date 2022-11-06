import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getTVSeasons } from "../utils/api";
import { embedEpisode, embedMovie } from "../utils/constants";

interface SearchParamsProp {
  id?: any;
  media_type?: any;
  season?: any;
  episode?: any;
}

export const WatchSection = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<SearchParamsProp | null | undefined>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const params = Object.fromEntries(searchParams);
   
    let _season = null;
    let _episode = null;

    if (params?.mediaType === "tv") {
      if (!params?.season || !params?.episode) {
        const getTVData = async (_selectedID: any) => {
          const seasonsData = await getTVSeasons(_selectedID);

          if (seasonsData && seasonsData[0]["episodes"]) {
            _season = Number(seasonsData[0]["episodes"][0]["season_number"]) === 0 ?  Number(seasonsData[0]["episodes"][0]["season_number"]) + 1 : Number(seasonsData[0]["episodes"][0]["season_number"]);
            _episode = seasonsData[0]["episodes"][0]["episode_number"];
          }
        };
        getTVData(params?.id);
      } else {
        _season = params?.season;
        _episode = params?.episode;
      }
    }

    const storeData: SearchParamsProp = {
      id: params?.id,
      media_type: params?.mediaType,
      season: _season,
      episode: _episode,
    };

    setData(storeData);
  }, [searchParams]);

  return (
    <div className="w-full h-full">
      <span onClick={() => navigate(-1)} className="absolute top-15 right-25 z-10 text-3xl text-white cursor-pointer">
        <i className="fa fa-left-long"></i>
      </span>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={
          (data?.media_type === "movie")
            ? embedMovie(Number(data?.id))
            : (data?.media_type === "tv")
            ? embedEpisode(
                Number(data?.id),
                Number(data?.season),
                Number(data?.episode)
              )
            : ""
        }
        title=""
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
