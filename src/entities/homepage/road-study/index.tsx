import styled from 'styled-components';
import RoadMap from './roadmap';
import RoadMapMobile from './roadmap-mobile';
import { useState, useEffect } from 'react';

const RoadStudy = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <RoadStudyWrapper className="flex items-center">
      <ModalWrapper className="md:bg-white rounded-lg w-[100%] md:w-[65%] h-[75%] max-2xl:h-[85%] max-2xl:mt-[10%] my-[6%] py-[2%] px-[3%] mx-auto md:shadow-xl">
        <ModalHeader className="md:bg-white rounded-t-lg text-[20px] md:text-[32px] font-bold">Chi tiết lộ trình học</ModalHeader>
        <ModalContent>{isMobile ? <RoadMapMobile /> : <RoadMap />}</ModalContent>
      </ModalWrapper>
    </RoadStudyWrapper>
  );
};

const RoadStudyWrapper = styled.div`
  width: 100%;
  height: 90dvh;
  background-image: linear-gradient(103deg, #fdf1ec 0.58%, #b4e2f8 101.36%);
`;

const ModalWrapper = styled.div``;

const ModalHeader = styled.h2`
  text-align: center;
`;

const ModalContent = styled.div`
  padding: 1rem;
`;

export default RoadStudy;
