import styled from 'styled-components';
const Footer = () => {
  return (
    <div className="bg-[#000328] px-4 md:px-0 h-[500px] md:h-[380px] pt-8 md:py-10">
      <div className="md:w-[80%] mx-auto text-white text-[18px] md:text-[22px] grid grid-cols-2 w-full md:grid-cols-[26%,33%,21%,20%]">
        <div>
          <Title>Về Happy Kids</Title>
          <div>
            <SubItem>Giới thiệu</SubItem>
            <SubItem>Đội ngũ giáo viên</SubItem>
            <SubItem>Phương pháp giáo dục</SubItem>
            <SubItem>Chính sách bảo mật</SubItem>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <Title>Chương trình học</Title>
          <div>
            {/* <p>Chương trình Montessori</p>
            <p>Chương trình ngoại khóa</p>
            <p>Chương trình học mầm non</p> */}
            <SubItem>Chương trình Montessori</SubItem>
            <SubItem>Chương trình ngoại khóa</SubItem>
            <SubItem>Chương trình học mầm non</SubItem>
          </div>
        </div>
        <div>
          <Title>Liên hệ</Title>
          <div>
            {/* <p>Địa chỉ</p>
            <p>Hotline</p>
            <p>Email</p> */}
            <SubItem>Địa chỉ</SubItem>
            <SubItem>Hotline</SubItem>
            <SubItem>Email</SubItem>
          </div>
        </div>
        <div>
          <Title>Theo dõi</Title>
          <div>
            {/* <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p> */}
            <SubItem>Facebook</SubItem>
            <SubItem>Instagram</SubItem>
            <SubItem>Youtube</SubItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubItem = styled.p`
  margin-bottom: 0.2rem;
`;
