import * as React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mb-5 lg:mb-10 w-full h-auto py-20 flex justify-center items-center">
      <div className="w-3/5 h-auto">
        <div className="flex flex-row justify-center lg:justify-start mb-20">
          <i className="fa-brands fa-facebook-f mr-26 text-xl text-primary text-2xl"></i>
          <i className="fa-brands fa-instagram mr-26 text-xl text-primary text-2xl"></i>
          <i className="fa-brands fa-twitter mr-26 text-xl text-primary text-2xl"></i>
          <i className="fa-brands fa-youtube mr-26 text-xl text-primary text-2xl"></i>
        </div>

        <div className="hidden lg:flex flex-row text-gray-80 text-sm mb-20">
          <div className="basis-1/4 flex flex-col leading-7">
            <span>Mô tả âm thanh</span>
            <span>Quan hệ với nhà đầu tư</span>
            <span>Thông báo pháp lý</span>
          </div>
          <div className="basis-1/4 flex flex-col leading-7">
            <span>Trung tâm trợ giúp</span>
            <span>Việc làm</span>
            <span>Tùy chọn cookie</span>
          </div>
          <div className="basis-1/4 flex flex-col leading-7">
            <span>Thẻ quà tặng</span>
            <span>Điều khoàn sử dụng</span>
            <span>Thông tin doanh nghiệp</span>
          </div>
          <div className="basis-1/4 flex flex-col leading-7">
            <span>Trung tâm đa phương tiện</span>
            <span>Quyền riêng tư</span>
            <span>Liên hệ với chúng tôi</span>
          </div>
        </div>

        <div className="text-gray-80 text-sm">© 2022 Netflix clone</div>
      </div>
    </footer>
  );
};
