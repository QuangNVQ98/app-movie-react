import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { search } from "../utils/api";
import { Item } from "../utils/types";
import { ListItem } from "./ListItem";

export const SearchSection = () => {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>();
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams);
    setKeyword(currentParams["q"]);

    const getSearchMovies = async (_keyword: any) => {
      console.log("_keyword: ", _keyword);
      const res: any = await search(_keyword);
      console.log("resSearch: ", res);
      setDatas(res["results"]);
    };

    getSearchMovies(currentParams["q"]);
  }, [searchParams]);

  return (
    <>
      <section className="w-full min-h-[77vh] h-auto pt-100 lg:px-58 px-20">
        <div className="w-full">
          <span className="text-gray-80 text-lg mr-10">
            Khám phá các chương trình liên quan đến:{" "}
          </span>
          <span className="text-white text-xl font-medium cursor-pointer">
            {keyword}
          </span>
        </div>

        <div className="mt-35 w-full h-auto flex flex-wrap">
          {datas.map((item: Item) => (
            <div className="mr-5 mb-35 w-[30%] lg:w-[16%]">
              <ListItem key={item.id} item={item}></ListItem>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
