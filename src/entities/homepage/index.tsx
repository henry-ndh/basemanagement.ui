import { useGetUsers } from '@/query/UserQuery';
import { useEffect } from 'react';
import styled from 'styled-components';
import Promo from './promo/Promo';
const HomePage = () => {
  return (
    <HomePageWrapper>
      <Promo />
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
