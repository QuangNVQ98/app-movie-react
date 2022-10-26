import { imageOriginal } from "../utils/constants";
import { Item } from "../utils/types";

export const Banner = ({ movie }: { movie: Item | null | undefined }) => {
  return (
    <section className="w-full h-auto">
      <div className="w-full h-screen relative">
        <img
          className="w-full h-full object-cover brightness-75"
          src={movie?.backdrop_path ? imageOriginal(movie?.backdrop_path) : ""}
          alt=""
        />

        <div className="w-full h-full absolute top-0 left-0 bg-linear-18"></div>

        <div className="z-10 w-full h-full absolute top-0 flex flex-row lg:items-center px-25 lg:px-58">
          <div className="w-full lg:basis-1/2 mt-98 lg:-mt-100">
            <div className="text-primary w-4/5 flex flex-col">
              <h1 className="text-4xl font-semibold lg:text-6xl mb-20">
                {movie?.title}
              </h1>
              <span className="text-sm font-normal lg:text-lg">
                {movie?.overview}
              </span>
              <div className="flex mt-26 text-lg">
                <div className="flex justify-center items-center rounded-md text-black bg-gray-e6 w-auto h-auto px-15 py-5 lg:px-35 lg:py-10 mr-4 lg:mr-8 cursor-pointer">
                  <i className="fa-solid fa-play text-xl"></i>
                  <span className="ml-10">Watch</span>
                </div>

                <div className="flex justify-center items-center rounded-md text-primary bg-gray-6d w-auto h-auto px-15 py-5 lg:px-35 lg:py-10 cursor-pointer ml-10">
                  <i className="fa fa-circle-info"></i>
                  <span className="ml-10">View Info</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="basis-1/2 flex items-center justify-center"> */}
          {/* <!-- <div className="w-320 h-470">
            <img className="w-full h-full object-cover rounded-3xl" src="../assets/images/sub-banner.jpg" alt=""/>
          </div> --> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
