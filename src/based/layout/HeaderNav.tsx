import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuHeader } from '@based/data/Data';
import { motion } from 'framer-motion';

const HeaderNav = () => {
  const path = window.location.pathname;
  return (
    <nav className="hidden items-center gap-6 text-sm  font-medium md:flex">
      {MenuHeader.map((item) => (
        <Link to={item.link} className="">
          <ItemHeader
            key={item.name}
            className={`flex items-center text-[16px] max-2xl:text-[13px] gap-4 py-1.5 ${path == item.link ? `text-colorText` : ``}`}
          >
            {item.name}
          </ItemHeader>
        </Link>
      ))}
      <motion.button
        whileHover={{ scale: 1.01 }}
        className="px-4 py-2 text-[16px] max-2xl:w-[120px]  max-2xl:text-[13px] w-[150px] text-white font-medium ml-2  bg-blueDark rounded-[50px] cursor-pointer
          hover:bg-[#1b245b] transition-all duration-300 ease-in-out
        "
      >
        <a href="/">Đặt lịch hẹn</a>
      </motion.button>
    </nav>
  );
};

export default HeaderNav;

export const ItemHeader = styled.div`
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: var(--blue-dark);
    transform: translateX(-50%);
  }

  &:hover {
    color: var(--blue-dark);
  }

  &:hover::before {
    width: 100%;
    left: 0;
    transform: translateX(0);
    transition: width 0.5s ease, left 0.5s ease;
  }
`;
