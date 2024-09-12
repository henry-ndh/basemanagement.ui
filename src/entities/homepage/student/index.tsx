import styled from 'styled-components';

// import ImgStudent1 from '@assets/student/student1.jpg';
// import ImgStudent2 from '@assets/student/student2.jpg';
// import ImgStudent3 from '@assets/student/student3.jpg';
// import ImgStudent4 from '@assets/student/student4.jpg';
// import ImgStudent5 from '@assets/student/student5.jpg';
// import ImgStudent6 from '@assets/student/student6.jpg';

// const listStudent = [
//   {
//     id: 1,
//     name: 'Bé Nguyễn Thị Hải Yến',
//     image: ImgStudent1,
//   },
//   {
//     id: 2,
//     name: 'Bé Trần Đăng Khoa',
//     image: ImgStudent2,
//   },
//   {
//     id: 3,
//     name: 'Bé Phạm Gia Huy',
//     image: ImgStudent3,
//   },
//   {
//     id: 4,
//     name: 'Bé Lê Quỳnh Anh',
//     image: ImgStudent4,
//   },
//   {
//     id: 5,
//     name: 'Bé Vũ Hoàng Minh',
//     image: ImgStudent5,
//   },
//   {
//     id: 6,
//     name: 'Bé Đỗ Ngọc Lan',
//     image: ImgStudent6,
//   },
// ];

const Student = () => {
  return (
    <StudentWrapper>
      <div className="w-[100%] flex flex-col items-center mx-auto">
        <p className="text-blue-600 text-center text-[33px] font-bold max-2xl:text-[22px] w-[95%] md:w-[50%] mx-auto">
          HAPPY KIDS MANG ĐẾN BƯỚC KHỞI ĐẦU TỐT VÀ TOÀN DIỆN NHẤT CHO TRẺ
        </p>
        <div className="w-[100%] h-[300px]"></div>
      </div>
    </StudentWrapper>
  );
};

export default Student;

const StudentWrapper = styled.div`
  width: 100%;
  height: 80dvh;
  display: flex;
`;
