import { Message, Social } from '@/based/config/SVGIcon';
import React, { useState, useEffect } from 'react';
import Logo from '@/assets/logo.jpg';
const Messenger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const toggleMessenger = () => {
    setIsOpen(!isOpen);

    // Thêm hiệu ứng rung
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Nút mở Messenger */}
      <button
        onClick={toggleMessenger}
        className="bg-blueDark flex justify-center items-center text-white w-[60px] h-[60px] rounded-full shadow-lg hover:bg-blueDark transition hover:scale-105"
      >
        <Message />
      </button>

      {/* Cửa sổ Messenger */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} mt-4 w-72 h-96 bg-white rounded-lg shadow-lg flex flex-col border-2 ${
          isShaking ? 'bg-blueDark animate-shake' : 'border-transparent'
        }`}
      >
        <div className="bg-blueDark flex text-white justify-center items-center gap-3 p-3 rounded-t-lg">
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
          <span className="font-bold text-[13px]">Anh chị cần Happy Kids hỗ trợ gì không ạ?</span>
        </div>
        <div className="grid grid-rows-4 h-full gap-y-2  py-4 px-2 overflow-y-auto">
          <div className="bg-gray-200 gap-2 flex pl-3 items-center">
            <Social.Facebook width="24px" height="24px" />
            <p className="text-black p-2 rounded-lg max-w-[80%]">Nhắn tin qua Facebook</p>
          </div>
          <div className="bg-gray-200 gap-2 flex pl-3 items-center">
            <Social.Facebook width="24px" height="24px" />
            <p className="text-black p-2 rounded-lg max-w-[80%]">Nhắn tin qua Zalo</p>
          </div>
          <div className="bg-gray-200 gap-2 flex pl-3 items-center">
            <Social.Facebook width="24px" height="24px" />
            <p className="text-black p-2 rounded-lg max-w-[80%]">Nhắn tin qua Zalo</p>
          </div>
          <div className="bg-gray-200  gap-2 flex pl-3 items-center">
            <Social.Facebook width="24px" height="24px" />
            <p className="text-black p-2 rounded-lg max-w-[80%]">Nhắn tin qua Zalo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
