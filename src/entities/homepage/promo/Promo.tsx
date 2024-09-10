import styled from 'styled-components';
import { PromoIcon } from '@/based/config/SVGIcon';

const listPromo = [
  {
    title: 'Giảm 10% học phí khi đăng ký khóa học mới',
    icon: <PromoIcon.Promo1 width="24px" height="24px" />,
  },
  {
    title: 'Lộ trình đào tạo bài bản, chất lượng',
    icon: <PromoIcon.Promo2 width="24px" height="24px" />,
  },
  {
    title: 'Giáo viên nhiệt tình, giàu kinh nghiệm',
    icon: <PromoIcon.Promo3 width="24px" height="24px" />,
  },
];

const Promo = () => {
  return (
    <PromoWrapper className="promo-wrapper bg-[#FFC400]">
      <div className="promo-content">
        <ul className="promo-list flex space-x-10">
          {listPromo.map((item, index) => (
            <li key={index} className="promo-item flex items-center text-[16px] max-2xl:text-[12px]">
              <span className="mr-2">{item.icon}</span>
              <span className="font-bold">{item.title}</span>
            </li>
          ))}
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
