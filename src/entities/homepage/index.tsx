import styled from 'styled-components';
import Promo from './promo/Promo';

import Introduce from './introduce';
import RoadStudy from './road-study';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Promo />
      <HomePageBody className="promo-body ">
        <Introduce />
        <RoadStudy />
        <Introduce />
      </HomePageBody>
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

const HomePageBody = styled.div`
  width: 100%;
`;
