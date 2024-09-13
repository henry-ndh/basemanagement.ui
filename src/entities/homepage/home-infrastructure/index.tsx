import { BaseWrapperBasic } from '../BaseWrapper';
import { Title, IntroduceTitle } from '../BaseWrapper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './styles.css';

const HomeInfraStructure = () => {
  return (
    <BaseWrapperBasic className="flex flex-col p-4 md:p-8">
      <div className="w-full md:w-[60%] mx-auto">
        <Title className="text-2xl font-bold mb-4 text-center">Cơ sở vật chất</Title>
        <IntroduceTitle className="mb-8 text-center">
          <div className="left_infra"></div>
          <div className="right_infra"></div>
        </IntroduceTitle>
      </div>
    </BaseWrapperBasic>
  );
};

export default HomeInfraStructure;
