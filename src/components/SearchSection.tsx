import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchSection = () => {

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams);
    console.log(currentParams); // get new values onchange
  }, [searchParams]);

  return (
    <>
      <section className="w-full min-h-[77vh] h-auto pt-100 lg:px-58 px-20">
        <div className="w-full">
          <span className="text-gray-80 text-lg mr-10">
            Khám phá các chương trình liên quan đến:{" "}
          </span>
          <span className="text-white text-xl font-medium cursor-pointer">
            Action
          </span>
        </div>
      </section>
    </>
  );
};
