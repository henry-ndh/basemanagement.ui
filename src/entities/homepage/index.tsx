import styled from 'styled-components';
import Promo from './promo/Promo';
import Student from './student';
import Introduce from './introduce';
import RoadStudy from './road-study';
import Teacher from './teacher';
import TrainingPhilosophy from './training-philosophy';
import Advisory from './advisory';
import HomeInfraStructure from './home-infrastructure';
import ScrollAnimationBox from '@/components/scroll-animation-box';
import Footer from './footer';
const HomePage = () => {
  return (
    <HomePageWrapper>
      <Promo />
      <HomePageBody className="promo-body">
        <ScrollAnimationBox>
          <Introduce />
          <RoadStudy />
          <Student />
          <TrainingPhilosophy />
          <Teacher />
          <Advisory />
          <HomeInfraStructure />
          <Advisory />
          <Footer />
        </ScrollAnimationBox>
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
