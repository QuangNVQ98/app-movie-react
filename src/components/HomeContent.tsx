import { CategoryMovie, Item } from "../utils/types";
import { ListItem } from "./ListItem";
import { ListTopItem } from "./ListTopItem";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeContent = ({
  movieData,
}: {
  movieData: Record<CategoryMovie, Item[]> | null | undefined;
}) => {
  return (
    <>
      <section className="pb-10 lg:pb-40 w-full h-auto relative z-50">
        <div className="w-full -mt-300 lg:-mt-200">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Top 10 most trending movies today
          </p>
          <Swiper
            slidesPerView={6}
            spaceBetween={5}
            loop={false}
            navigation
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },
              // when window width is >= 600px
              600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 5,
              },
              // when window width is >= 900px
              900: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 5,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 5,
              },

              // when window width is >= 1500px
              1500: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 5,
              },

              // when window width is >= 1800px
              1800: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 5,
                // centeredSlides: false
              },
            }}
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
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },

            // when window width is >= 1500px
            1500: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },

            // when window width is >= 1800px
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 5,
              // centeredSlides: false
            },
          }}
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
            slidesPerView={6}
            spaceBetween={5}
            loop={false}
            navigation
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },
              // when window width is >= 600px
              600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 5,
              },
              // when window width is >= 900px
              900: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 5,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 5,
              },

              // when window width is >= 1500px
              1500: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 5,
              },

              // when window width is >= 1800px
              1800: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 5,
                // centeredSlides: false
              },
            }}
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
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },

            // when window width is >= 1500px
            1500: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },

            // when window width is >= 1800px
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 5,
              // centeredSlides: false
            },
          }}
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
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },

            // when window width is >= 1500px
            1500: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },

            // when window width is >= 1800px
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 5,
              // centeredSlides: false
            },
          }}
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
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },

            // when window width is >= 1500px
            1500: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },

            // when window width is >= 1800px
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 5,
              // centeredSlides: false
            },
          }}
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
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },

            // when window width is >= 1500px
            1500: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },

            // when window width is >= 1800px
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 5,
              // centeredSlides: false
            },
          }}
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
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },

            // when window width is >= 1500px
            1500: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },

            // when window width is >= 1800px
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 5,
              // centeredSlides: false
            },
          }}
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
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },

            // when window width is >= 1500px
            1500: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },

            // when window width is >= 1800px
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 5,
              // centeredSlides: false
            },
          }}
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
          slidesPerView={6}
          spaceBetween={5}
          loop
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5,
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 5,
            },

            // when window width is >= 1500px
            1500: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 5,
            },

            // when window width is >= 1800px
            1800: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 5,
              // centeredSlides: false
            },
          }}
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
