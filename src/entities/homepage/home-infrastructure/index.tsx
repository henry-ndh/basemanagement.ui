import { BaseWrapperBasic } from '../BaseWrapper';
import { Title, IntroduceTitle } from '../BaseWrapper';
import styled from 'styled-components';
import ImgClass1 from '@/assets/class/class2.jpg';
const HomeInfraStructure = () => {
  return (
    <BaseWrapperBasic className="flex flex-col p-4 md:p-8 min-h-[1000px] max-h-[1200px]">
      <div className="2xl:w-[1100px] lg:w-[900px] mx-auto">
        <Title className="text-[34px] font-bold mb-4 text-center">Cơ sở vật chất</Title>
        <IntroduceTitle className="mb-8 text-center">
          Cơ sở vật chất của Happy Kids luôn đặt lên hàng đầu, mỗi trẻ sẽ luôn có một môi trường rộng rãi, gọn gàng, sạch sẽ để phát triển tốt nhất{' '}
        </IntroduceTitle>
        <InfraStructure className="w-full flex h-[500px]  justify-between p-10">
          <div className="flex items-center w-[60%] h-full">
            <img src={ImgClass1} alt="class" className="w-full h-[100%] rounded-lg object-cover" />
          </div>
          <Title className="w-[38%]">Cở sở vật chất</Title>
        </InfraStructure>
        <div className="mt-6 flex justify-between">
          <img src={ImgClass1} alt="class" className="w-[18%]  h-[150px] rounded-2xl object-cover" />
          <img src={ImgClass1} alt="class" className="w-[18%]  h-[150px] rounded-2xl object-cover" />
          <img src={ImgClass1} alt="class" className="w-[18%]  h-[150px] rounded-2xl object-cover" />
          <img src={ImgClass1} alt="class" className="w-[18%]  h-[150px] rounded-2xl object-cover" />
          <img src={ImgClass1} alt="class" className="w-[18%]  h-[150px] rounded-2xl object-cover" />
        </div>
      </div>
    </BaseWrapperBasic>
  );
};

export default HomeInfraStructure;

const InfraStructure = styled.div`
  border-radius: 0.5rem;
  background-image: linear-gradient(103deg, #fdf1ec 0.48%, #b4e2f8 98.36%);
`;
