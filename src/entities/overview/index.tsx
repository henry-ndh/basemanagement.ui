import Banner from '@/assets/banner/Banner_main.png';
import { Button } from '@/components/ui/button';
import styled, { keyframes } from 'styled-components';

export default function OverView() {
  return (
    <>
      <OverViewWrapper bg={Banner} className="w-full h-full relative">
        <ButtonContainer>
          <ShakingButton className="w-[170px] 2xl:w-[200px] bg-blueDark hover:bg-blueDark">Đăng ký tư vấn ngay</ShakingButton>
        </ButtonContainer>
      </OverViewWrapper>
      <div>
        <div>
          <h1>Đăng ký tư vấn</h1>
        </div>
      </div>
    </>
  );
}

const OverViewWrapper = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  margin: 0 auto;
  position: relative;
`;

const diagonalShake = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  12.5% {
    transform: translate(-2px, -2px);
  }
  25% {
    transform: translate(2px, 2px);
  }
  37.5% {
    transform: translate(-2px, 2px);
  }
  50% {
    transform: translate(2px, -2px);
  }
  62.5% {
    transform: translate(-2px, -2px);
  }
  75% {
    transform: translate(2px, 2px);
  }
  87.5% {
    transform: translate(-2px, 2px);
  }
`;

const ButtonContainer = styled.div`
  margin-top: 29%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  position: absolute;
  bottom: 28%;
  left: 50%;
  transform: translateX(-50%);
`;

const ShakingButton = styled(Button)`
  position: relative;
  animation: ${diagonalShake} 1s ease-in-out infinite;
`;
