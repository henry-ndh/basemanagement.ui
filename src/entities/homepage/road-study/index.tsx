import styled from 'styled-components';
import RoadMap from './roadmap';
import RoadMapMobile from './roadmap-mobile';
import { useState, useEffect } from 'react';
import ImgCute from '@/assets/cute.png';
import { BaseWrapperWithColor } from '../BaseWrapper';

const RoadStudy = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <BaseWrapperWithColor className="flex items-center md:py-10 md:min-h-[950px]">
      <ModalWrapper className="md:bg-white rounded-lg w-[100%] md:w-[80%]  h-[95%] max-2xl:h-[95%] max-2xl:mt-[10%] my-[6%] md:pt-10 pb-[20px] px-[3%] mx-auto md:shadow-xl">
        <ModalHeader className="md:bg-white rounded-t-lg text-[24px] md:text-[32px] font-bold">
          Đào tạo trẻ theo phương pháp giáo dục Montessori
        </ModalHeader>
        <div className="rounded-t-lg text-[16px] md:text-[18px] bg-[#fafaa4] rounded-lg py-6 px-10 text-center my-8">
          Phương pháp <strong className="text-blueDark">Montessori</strong> có nguồn gốc từ Ý, phương pháp này khuyến khích trẻ tự khám phá và học qua
          thực hành. Điều này giúp trẻ phát triển tính độc lập, sáng tạo và khả năng tự học <strong className="text-blueDark">ngay từ nhỏ</strong>.
        </div>
        <ModalContent>{isMobile ? <RoadMapMobile /> : <RoadMap />}</ModalContent>
        <img src={ImgCute} alt="cute" className="w-[150px] md:w-[300px] h-auto absolute bottom-[0%] right-[-20px]  object-cover" />
      </ModalWrapper>
    </BaseWrapperWithColor>
  );
};

const ModalWrapper = styled.div`
  position: relative;
`;

const ModalHeader = styled.h2`
  text-align: center;
  font-family: 'Silka-Bold';
  font-weight: 700;
  color: var(--blue-dark);
`;

const ModalContent = styled.div`
  padding: 1rem;
  position: relative;
`;

export default RoadStudy;
