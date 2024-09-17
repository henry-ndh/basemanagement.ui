import styled from 'styled-components';

interface BaseWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const BaseWrapperBasic = ({ children, className, id }: BaseWrapperProps) => {
  return (
    <BaseWrapperBasicStyled id={id} className={`${className} h-[95dvh] `}>
      {children}
    </BaseWrapperBasicStyled>
  );
};

const BaseWrapperWithColor = ({ children, className, id }: BaseWrapperProps) => {
  return (
    <BaseWrapperWithColorStyled id={id} className={`${className} h-[95dvh]`}>
      {children}
    </BaseWrapperWithColorStyled>
  );
};

const BaseWrapperGrey = ({ children, className, id }: BaseWrapperProps) => {
  return (
    <BaseWrapperGreyStyled id={id} className={`${className} h-[95dvh] bg-[#e5e5e5]`}>
      {children}
    </BaseWrapperGreyStyled>
  );
};

const BaseWrapperBasicStyled = styled.div`
  width: 100%;
`;

const BaseWrapperWithColorStyled = styled.div`
  width: 100%;
  background-image: linear-gradient(103deg, #fdf1ec 0.58%, #b4e2f8 101.36%);
`;

const BaseWrapperGreyStyled = styled.div`
  width: 100%;
`;

export { BaseWrapperBasic, BaseWrapperWithColor, BaseWrapperGrey };

export const Title = styled.h2`
  font-family: 'Silka-Bold';
  color: var(--blue-dark);
`;

export const SubTitle = styled.h3`
  font-family: 'Silka';
  color: var(--blue-dark);
`;

export const IntroduceTitle = styled.p`
  padding: 1.5rem 2.5rem;
  border-radius: 0.5rem;
  background-color: #fafaa4;
`;
