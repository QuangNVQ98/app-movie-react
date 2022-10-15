import * as React from "react";

export const Header: React.FC = () => {
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
          />
        </div>
        <div className="hidden grow pl-45 lg:flex flex-row text-primary">
          <div className="mr-20">Trang chủ</div>
          <div className="mr-20">Mới & Phổ biến</div>
          <div className="mr-20">Danh sách của tôi</div>
        </div>
        <div className="ml-auto lg:ml-0 flex-none">
          <i className="fa-solid fa-search ml-26 text-xl text-primary"></i>
          <i className="fa-solid fa-bell ml-26 text-xl text-primary"></i>
        </div>
      </div>
    </header>
  );
};
