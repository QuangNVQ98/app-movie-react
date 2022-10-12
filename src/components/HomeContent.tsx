import * as React from "react";

export const HomeContent: React.FC = () => {
  return (
    <>
      <section className="pb-10 lg:pb-40 w-full h-auto relative z-50">
        <div className="w-full -mt-300 lg:-mt-200">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Top 10 chương trình truyền hình tại Việt Nam hôm nay
          </p>
          <div className="swiper-container-1">
            <div className="swiper-wrapper">
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-1.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-2.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/c3XBgBLzB9Sh7k7ewXY2QpfH47L.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-3.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/b5rOkbQ0jKYvBqBf3bwJ6nXBOtx.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-4.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/aNsrgElf0fiKBSR8cWWEL6XUTte.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-5.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/dueiWzWc81UAgnbDAyH4Gjqnh4n.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-6.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/hwNRc9ZWrakGdql22srY7DqtmRQ.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-7.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/trAOGwksvgHYNpbK4GewbjYQ1pi.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-8.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/zAIippNnm6o0gYEtjapbjQSxP8G.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-9.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/tNyJxHK3m7NAAKNYITLJ5oxS0YR.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-10.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/hMh1mR2kNl8kHjpIuPh4TICTwjo.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* <!-- Add Arrows --> */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Danh sách tiếp tục xem của Quang
          </p>
        </div>
        <div className="swiper-container px-58">
          <div className="swiper-wrapper">
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/c4EkF5JAZ83bUqNErhuSd9xw6uJ.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/79DgItjsyH5tpA3mC2xv5gU2zlZ.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/6WR7wLCX0PGLhj51qyvK8MIxtT5.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
                alt=""
              />
            </div>
          </div>

          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Top 10 phim tại Việt Nam hôm nay
          </p>
          <div className="swiper-container-1">
            <div className="swiper-wrapper">
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-1.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-2.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/m76LAg0MchIcIW9i4yXsQPGQJJF.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end id_item">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-3.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg"
                  alt=""
                />

                <div className="id_hover w-435 h-411 -mr-80 border-ra rounded-md bg-gray-14 text-white absolute flex flex-col z-30 origin-center transform-none opacity-100 shadow-movie">
                  <div className="w-full h-245">
                    <img
                      className="w-full h-full object-cover !max-w-full !max-h-full"
                      src="https://image.tmdb.org/t/p/w500/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-full p-15">
                    <div className="w-full h-auto flex flex-row justify-between mb-20">
                      <div className="flex">
                        <div className="flex justify-center items-center pl-4 rounded-full text-black bg-gray-e6 w-45 h-45 mr-8 cursor-pointer">
                          <i className="fa-solid fa-play text-xl"></i>
                        </div>
                        <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                          <i className="fa-regular fa-plus text-xl"></i>
                        </div>
                        <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                          <i className="fa-regular fa-thumbs-up text-xl"></i>
                        </div>
                      </div>
                      <div className="flex justify-center items-center pl-1 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                        <i className="fa fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="mb-15">Thor: Love and Thunder</div>

                    <div className="flex items-center text-gray-6d text-sm">
                      <span className="mr-10">Fantasy</span>
                      <span className="mr-10">
                        <i className="fa fa-circle text-[5px] text-white"></i>
                      </span>
                      <span className="mr-10">Action</span>
                      <span className="mr-10">
                        <i className="fa fa-circle text-[5px] text-white"></i>
                      </span>
                      <span className="mr-10">Comedy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-4.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-5.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/30ULVKdjBcQTsj2aOSThXXZNSxF.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-6.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-7.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/1vuix8r1CJ2M6IldR27Z95hWm7e.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-8.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-9.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide flex max-w-[300px] h-210 relative justify-end">
                <img
                  className="w-1 absolute -left-30"
                  src={require("../assets/images/number-10.png")}
                  alt=""
                />
                <img
                  className="w-1/2 h-full object-cover relative"
                  src="https://image.tmdb.org/t/p/w500/tUkY0WxffPZ9PoyC62PIyyUMGnt.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* <!-- Add Arrows --> */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Hiện đang thịnh hành
          </p>
        </div>
        <div className="swiper-container px-58">
          <div className="swiper-wrapper">
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/zNXNRLH5wJprUG6B1olaBTNZOjy.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/etMxKseW67499tUJonLNHXTF538.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg"
                alt=""
              />
            </div>
          </div>

          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Xem vào dịp cuối tuần
          </p>
        </div>
        <div className="swiper-container px-58">
          <div className="swiper-wrapper">
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/kDcb6ZzWQNDBCkRPdoRdKqCQRxw.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/oHj6guMrLfQcBzo3uxwBJc8Y736.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/ntLiiyI2AVIVAtVKwUYqi36e3bM.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/velWPhVMQeQKcxggNEU8YmIo52R.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/velWPhVMQeQKcxggNEU8YmIo52R.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/q719jXXEzOoYaps6babgKnONONX.jpg"
                alt=""
              />
            </div>
          </div>

          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>

      <section className="mb-25 lg:mb-60 w-full h-auto">
        <div className="w-full">
          <p className="text-gray-e5 px-15 lg:px-58 text-lg lg:text-2xl font-medium lg:font-semibold mb-20 mt-20">
            Mới phát hành
          </p>
        </div>
        <div className="swiper-container px-58">
          <div className="swiper-wrapper">
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/ppd84D2i9W8jXmsyInGyihiSyqz.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center id_item">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w500/79DgItjsyH5tpA3mC2xv5gU2zlZ.jpg"
                alt=""
              />
              <div className="id_hover w-435 h-411 border-ra rounded-md bg-gray-14 text-white absolute flex flex-col z-30 origin-center transform-none opacity-100 shadow-movie">
                <div className="w-full h-245">
                  <img
                    className="w-full h-full object-cover !max-w-full !max-h-full"
                    src="https://image.tmdb.org/t/p/w500/79DgItjsyH5tpA3mC2xv5gU2zlZ.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full h-full p-15">
                  <div className="w-full h-auto flex flex-row justify-between mb-20">
                    <div className="flex">
                      <div className="flex justify-center items-center pl-4 rounded-full text-black bg-gray-e6 w-45 h-45 mr-8 cursor-pointer">
                        <i className="fa-solid fa-play text-xl"></i>
                      </div>
                      <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                        <i className="fa-regular fa-plus text-xl"></i>
                      </div>
                      <div className="flex justify-center items-center pl-2 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                        <i className="fa-regular fa-thumbs-up text-xl"></i>
                      </div>
                    </div>
                    <div className="flex justify-center items-center pl-1 rounded-full text-white bg-gray-2a w-45 h-45 mr-8 border-solid border-2 border-white cursor-pointer">
                      <i className="fa fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="mb-15">Thor: Love and Thunder</div>

                  <div className="flex items-center text-gray-6d text-sm">
                    <span className="mr-10">Fantasy</span>
                    <span className="mr-10">
                      <i className="fa fa-circle text-[5px] text-white"></i>
                    </span>
                    <span className="mr-10">Action</span>
                    <span className="mr-10">
                      <i className="fa fa-circle text-[5px] text-white"></i>
                    </span>
                    <span className="mr-10">Comedy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/ixgnqO8xhFMb1zr8RRFsyeZ9CdD.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/d4vPg3QsTJJh6C5MHARTb5CyqOu.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide flex max-w-[300px] h-170 relative justify-center items-center">
              <img
                className="w-full h-full object-cover relative"
                src="https://image.tmdb.org/t/p/w200/c2gon6zbqzL73DOl8mPQMMUJXvE.jpg"
                alt=""
              />
            </div>
          </div>

          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};
