import { BaseWrapperWithColor } from '../BaseWrapper';
import { Title, IntroduceTitle } from '../BaseWrapper';
import styled from 'styled-components';
import ImgClass1 from '@/assets/class/class1.jpg';
import ImgClass2 from '@/assets/class/class2.jpg';

const Vision = () => {
  return (
    <BaseWrapperWithColor className="flex flex-col p-4 md:p-8 min-h-[1400px] md:min-h-[1000px] md:max-h-[1200px]">
      <div className=" 2xl:w-[1200px] lg:w-[1000px] mx-auto ">
        <Title className="text-[34px] font-bold mb-4 text-center">Tầm nhìn</Title>
        <IntroduceTitle className="mb-8 text-center">
          Cơ sở vật chất của Happy Kids luôn đặt lên hàng đầu, mỗi trẻ sẽ luôn có một môi trường rộng rãi, gọn gàng, sạch sẽ để phát triển tốt nhất{' '}
        </IntroduceTitle>
        <div className="vision_wrapper w-full grid md:grid-cols-[45%,45%] justify-between">
          <div className="vision_left relative md:mb-0 mb-4">
            <img src={ImgClass1} alt="class" className="box_scale w-full h-[250px] rounded-lg object-cover" />
            <DetailVision className="h-[250px]">
              <p>Happy Kids với tầm nhìn trở thành Học viện đào tạo các kỹ năng cho Học sinh – Sinh viên Việt Nam thông qua ngôn ngữ.</p>
              <Mark className="flex justify-center items-center rounded-[20px] text-white font-bold p-4 w-[150px] h-[40px] absolute top-[-15px] left-[35%]">
                <span>TẦM NHÌN</span>
              </Mark>
            </DetailVision>
          </div>
          <div className="vision_right">
            <img src={ImgClass2} alt="class" className="box_scale w-full h-[250px] rounded-lg object-cover" />
            <DetailVision className="h-[300px] md:h-[250px]">
              <p>
                Sứ mệnh của Happy Kids là tập trung đào tạo các lĩnh vực: Tiếng Anh, toán tư duy, lập trình, những kỹ năng cần thiết,... Với mong muốn
                góp phần vào nền Giáo dục Việt Nam, dựa trên triết lý đào tạo A.S.K và phương pháp đào tạo SMILE độc quyền, Happy Kids mang đến cho
                Học sinh Việt Nam những kỹ năng hội nhập Quốc tế, giúp các bạn tự tin bước vào sân chơi đầy thách thức với nhiều cơ hội lớn.
              </p>
              <Mark className="flex justify-center items-center rounded-[20px] text-white font-bold p-4 w-[150px] h-[40px] absolute top-[-15px] left-[35%]">
                <span>SỨ MỆNH</span>
              </Mark>
            </DetailVision>
          </div>
        </div>
      </div>
    </BaseWrapperWithColor>
  );
};

export default Vision;

const Mark = styled.div`
  background-color: #00aef2;
`;

const DetailVision = styled.div`
  background-color: #b6eeff;
  border-radius: 0.5rem;
  position: relative;
  padding: 2.5rem 1.75rem;
  margin-top: 2rem;
  p {
    text-align: center;
  }
`;
