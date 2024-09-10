import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <HeaderWrapper style={{ zIndex: '999' }} className="flex  items-center justify-between">
      <Link to="/" className="flex items-center font-bold">
        <span className="text-lg sm:text-xl">
          Henry Nguyen
          <span className="text-colorText text-[30px]">.</span>
        </span>
      </Link>
      <HeaderNav />
      <MobileNav />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 10%;
  width: 80%;
  margin: 0 auto;
`;
