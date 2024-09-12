import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import ImgStudent1 from '@assets/student/student1.jpg';
import ImgStudent2 from '@assets/student/student2.jpg';
import ImgStudent3 from '@assets/student/student3.jpg';
import ImgStudent4 from '@assets/student/student4.jpg';
import ImgStudent5 from '@assets/student/student5.jpg';
import ImgStudent6 from '@assets/student/student6.jpg';

const listStudent = [
  {
    id: 1,
    name: 'Bé Nguyễn Thị Hải Yến',
    image: ImgStudent1,
  },
  {
    id: 2,
    name: 'Bé Trần Đăng Khoa',
    image: ImgStudent2,
  },
  {
    id: 3,
    name: 'Bé Phạm Gia Huy',
    image: ImgStudent3,
  },
  {
    id: 4,
    name: 'Bé Lê Quỳnh Anh',
    image: ImgStudent4,
  },
  {
    id: 5,
    name: 'Bé Vũ Hoàng Minh',
    image: ImgStudent5,
  },
  {
    id: 6,
    name: 'Bé Đỗ Ngọc Lan',
    image: ImgStudent6,
  },
];

const Student = () => {
  return (
    <StudentWrapper>
      <div className="w-[100%] flex flex-col items-center mx-auto">
        <TrainingTitle className="text-[33px] w-[60%] text-center mt-4">
          HAPPY KIDS MANG ĐẾN BƯỚC KHỞI ĐẦU TỐT VÀ TOÀN DIỆN NHẤT CHO TRẺ
        </TrainingTitle>
        <div className="max-w-[1100px] min-w-[900px] w-auto h-[300px]">
          <Swiper spaceBetween={20} modules={[Pagination]} className="mySwiper" slidesPerView={5} loop={true} centeredSlides={true}>
            {listStudent.map((student) => (
              <SwiperSlide key={student.id} className="slide">
                <div className="flex justify-center items-center">
                  <img src={student.image} alt={student.name} className="student-image rounded-full w-[170px] h-[170px] object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
const TrainingTitle = styled.h2`
  font-family: 'Silka-Bold';
  font-weight: 700;
  color: var(--blue-dark);
`;
