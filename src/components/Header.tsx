import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {

  const navigate = useNavigate();
  // const [searchValue, setSearchValue] = useState<string>();

  const searchMovie = (data: any) => {
    console.log('data: ', data)
    if(data.trim() === '') {
      navigate('/browse')
    }else {
      navigate(`/browse/search?q=${encodeURI(data.trim())}`)
    }
  };

  const debounce = (fn: any, delay: number) => {
    return (args: any) => {
      clearTimeout(fn.id);

      fn.id = setTimeout(() => {
        fn.call(this, args);
      }, delay);
    };
  };

  const debounceAjax = debounce(searchMovie, 1000);

  const handleKeyupSearchMovie = (e: any) => {
    debounceAjax(e.target.value);
    // setSearchValue(e.target.value)
  };

  const handleKeyDownSearchMovie = (e:any) => {
    if (e.key === 'Enter') {
      const data = e.target.value;
      if(data.trim() === '') {
        navigate('/browse')
      }else {
        navigate(`/browse/search?q=${encodeURI(data.trim())}`)
      }
    }
  }

  const getCheckBoxSearchValue = (e: any) => {
    if(!e.target.checked) {
      // setSearchValue('');
      navigate('/browse')
    }
  }

  const goToHomePage = () => {
    navigate('/browse')
  }

  return (
    <header className="fixed w-full w-screen z-[100]">
      <div
        className="
          flex flex-row
          items-center
          lg:py-26
          lg:px-58
          py-20
          px-20
          bg-gradient-to-b
          from-black-07
          to-transparent
          w-full     
        "
      >
        <div className="flex-none">
          <img
            className="w-98 h-25 object-cover cursor-pointer"
            src={require("../assets/images/logo.png")}
            alt=""
            onClick={goToHomePage}
          />
        </div>
        <div className="hidden grow pl-45 lg:flex flex-row text-primary">
          <div className="mr-20">Trang chủ</div>
          <div className="mr-20">Mới & Phổ biến</div>
          <div className="mr-20">Danh sách của tôi</div>
        </div>
        <div className="ml-auto lg:ml-0 flex-none relative w-355">
          {/* <i className="fa-solid fa-search ml-26 text-xl text-primary"></i>
          <i className="fa-solid fa-bell ml-26 text-xl text-primary"></i> */}
          <div className="search">
            <div className="search_bar">
              <input id="searchOne" type="checkbox" onClick={getCheckBoxSearchValue} />
              <label htmlFor="searchOne">
                <i className="icon ion-android-search fa-solid fa-search text-2xl"></i>
                <i className="last icon ion-android-close fa-solid fa-xmark text-xl !mt-2"></i>
                <p>|</p>
              </label>
              <input
                placeholder="Search..."
                type="text"
                className="h-50"
                // value={searchValue}
                onKeyDown={handleKeyDownSearchMovie}
                onChange={handleKeyupSearchMovie}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
