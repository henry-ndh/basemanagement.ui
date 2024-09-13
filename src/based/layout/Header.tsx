import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import MobileNav from './MobileNav';
import logo from '@assets/logo.jpg';
import textLogo from '@assets/text-logo.png';

export default function Header() {
  return (
    <HeaderWrapper style={{ zIndex: '999' }} className="sticky flex items-center justify-between">
      <Link to="/" className="flex items-center font-bold">
        <img alt="logo" src={logo} className="w-12 h-12 rounded-full mr-2" />
        <img alt="text-logo" src={textLogo} className="w-24 h-12 rounded-full mr-2" />
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
