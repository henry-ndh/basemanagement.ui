import styled from 'styled-components';
const Promo = () => {
  return (
    <PromoWrapper className="promo-wrapper bg-[#FFC400]">
      <div className="promo-content">
        <ul>
          <li></li>
        </ul>
      </div>
    </PromoWrapper>
  );
};

export default Promo;

const PromoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 48px;
  min-height: 48px;
  max-height: 48px;
`;
