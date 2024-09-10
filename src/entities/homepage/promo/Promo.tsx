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
    <PromoWrapper className="flex promo-wrapper bg-[#FFC400]">
      <div className="promo-content">
        <ul className="promo-list space-x-10 flex">
          {listPromo.map((item, index) => (
            <li key={index} className="promo-item items-center text-[16px] max-2xl:text-[12px] hidden md:flex">
              <span className="mr-2">{item.icon}</span>
              <span className="font-bold">{item.title}</span>
            </li>
          ))}
          <li className="promo-item flex items-center text-[16px] max-2xl:text-[12px] md:hidden">
            <span className="mr-2">
              <PromoIcon.Promo1 width="24px" height="24px" />
            </span>
            <span className="font-bold">Giảm 10% học phí khi đăng ký khóa học mới</span>
          </li>
        </ul>
      </div>
    </PromoWrapper>
  );
};

export default Promo;

const PromoWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 48px;
  min-height: 48px;
  max-height: 48px;
`;
