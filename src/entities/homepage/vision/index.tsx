import styled from 'styled-components';
import ImgCute from '@/assets/cute.png';
import { BaseWrapperWithColor } from '../BaseWrapper';

const Vision = () => {
  return (
    <BaseWrapperWithColor className="flex items-center">
      <ModalWrapper className="md:bg-white rounded-lg w-[100%] md:w-[65%] h-[75%] max-2xl:h-[85%] max-2xl:mt-[10%] my-[6%] py-[2%] px-[3%] mx-auto md:shadow-xl">
        <ModalHeader className="md:bg-white rounded-t-lg text-[20px] md:text-[32px] font-bold">Đội ngũ giáo viên</ModalHeader>
        <img src={ImgCute} alt="cute" className="w-[300px] h-auto absolute bottom-[-10%] right-0  object-cover" />
      </ModalWrapper>
    </BaseWrapperWithColor>
  );
};

const ModalWrapper = styled.div`
  position: relative;
`;

const ModalHeader = styled.h2`
  text-align: center;
`;

export default Vision;
