import styled from 'styled-components';
import RoadMap from './roadmap';

const RoadStudy = () => {
  return (
    <RoadStudyWrapper className="flex items-center">
      <ModalWrapper className="bg-white rounded-lg w-[65%] h-[75%] max-2xl:h-[85%] max-2xl:mt-[10%] my-[6%] py-[2%] px-[3%] mx-auto shadow-xl">
        <ModalHeader className="bg-white rounded-t-lg text-[32px] font-bold">Chi tiết lộ trình học</ModalHeader>
        <ModalContent>
          <RoadMap />
        </ModalContent>
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
