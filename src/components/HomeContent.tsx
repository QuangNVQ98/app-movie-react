import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStore } from "../store/hooks";
import { CategoryMovie, Item } from "../utils/types";
import { ListItem } from "./ListItem";
import { ListTopItem } from "./ListTopItem";

export const HomeContent = ({
  movieData,
}: {
  movieData: Record<CategoryMovie, Item[]> | null | undefined;
}) => {
  const [state, dispatch] = useStore();

  return (
    <>
      <section className="!mt-90 pb-10 lg:pb-40 w-full h-auto relative z-50">
        <div className="w-full -mt-300 lg:-mt-200">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 xl:mb-35 2xl:mb-20 mt-20">
            Top 10 most trending movies today
          </p>
          <Swiper
            modules={[Navigation]}
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={15}
            loop={false}
            navigation
          >
            {movieData?.Trending_Movies.slice(0, 10).map(
              (item: Item, index: number) => (
                <SwiperSlide key={item.id}>
                  <ListTopItem
                    key={item.id}
                    index={index + 1}
                    item={item}
                  ></ListTopItem>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Most Popular Movies and Series
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
        >
          {movieData?.Trending_Movies.map((item: Item) => (
            <SwiperSlide key={item.id}>
              <ListItem key={item.id} item={item}></ListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Top 10 most trending TV Show today
          </p>
          <Swiper
            modules={[Navigation]}
            slidesPerView={6}
            spaceBetween={15}
            loop={false}
            navigation
          >
            {movieData?.Trending_TV.slice(0, 10).map(
              (item: Item, index: number) => (
                <SwiperSlide key={item.id}>
                  <ListTopItem
                    key={item.id}
                    index={index + 1}
                    item={item}
                  ></ListTopItem>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Most Popular TV Show and Series
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
        >
          {movieData?.Popular_TV.map((item: Item) => (
            <SwiperSlide key={item.id}>
              <ListItem key={item.id} item={item}></ListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Top Rated Movies in the world
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
        >
          {movieData?.Top_Rated_Movies.map((item: Item) => (
            <SwiperSlide key={item.id}>
              <ListItem key={item.id} item={item}></ListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Top rated TV episodes of all time
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
        >
          {movieData?.Top_Rated_TV.map((item: Item) => (
            <SwiperSlide key={item.id}>
              <ListItem key={item.id} item={item}></ListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Movies are showing now
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
        >
          {movieData?.Now_Playing_Movies.map((item: Item) => (
            <SwiperSlide key={item.id}>
              <ListItem key={item.id} item={item}></ListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Upcoming movies in theaters
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
        >
          {movieData?.Upcoming_Movies.map((item: Item) => (
            <SwiperSlide key={item.id}>
              <ListItem key={item.id} item={item}></ListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            On the air TV channels
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
        >
          {movieData?.On_The_Air_TV.map((item: Item) => (
            <SwiperSlide key={item.id}>
              <ListItem key={item.id} item={item}></ListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Airing today tv shows
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
        >
          {movieData?.Airing_Today_TV.map((item: Item) => (
            <SwiperSlide key={item.id}>
              <ListItem key={item.id} item={item}></ListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
