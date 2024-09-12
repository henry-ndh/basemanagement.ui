import styled from 'styled-components';

interface BaseWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const BaseWrapperBasic = ({ children, className }: BaseWrapperProps) => {
  return <BaseWrapperBasicStyled className={className}>{children}</BaseWrapperBasicStyled>;
};

const BaseWrapperWithColor = ({ children, className }: BaseWrapperProps) => {
  return <BaseWrapperWithColorStyled className={className}>{children}</BaseWrapperWithColorStyled>;
};

const BaseWrapperBasicStyled = styled.div`
  width: 100%;
  height: 95dvh;
`;

const BaseWrapperWithColorStyled = styled.div`
  width: 100%;
  background-image: linear-gradient(103deg, #fdf1ec 0.58%, #b4e2f8 101.36%);
  height: 95dvh;
`;

export { BaseWrapperBasic, BaseWrapperWithColor };
