import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import styled from 'styled-components';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/based/hook/CheckDevice';

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
    comment:
      'Con thích vũ trụ và phi hành gia, học ở Happy Kid con vừa được giao tiếp bằng tiếng Anh với mọi người vừa được chơi nhiều trò chơi rất vui.',
  },
  {
    id: 2,
    name: 'Bé Trần Đăng Khoa',
    image: ImgStudent2,
    comment:
      'Con rất yêu thích những câu chuyện phiêu lưu và khám phá. Ở Happy Kid, con học được nhiều điều mới mẻ và sáng tạo trong các trò chơi nhóm.',
  },
  {
    id: 3,
    name: 'Bé Phạm Gia Huy',
    image: ImgStudent3,
    comment: 'Con rất đam mê khoa học và công nghệ. Happy Kid giúp con mở rộng kiến thức và con thích thú với các bài học thực hành và thí nghiệm.',
  },
  {
    id: 4,
    name: 'Bé Lê Quỳnh Anh',
    image: ImgStudent4,
    comment:
      'Con yêu thích nghệ thuật và sáng tạo. Ở Happy Kid, con được tham gia nhiều hoạt động nghệ thuật thú vị và học cách thể hiện bản thân qua các dự án nhóm.',
  },
  {
    id: 5,
    name: 'Bé Vũ Hoàng Minh',
    image: ImgStudent5,
    comment:
      'Con rất thích thể thao và hoạt động ngoài trời. Happy Kid đã giúp con rèn luyện kỹ năng thể thao và làm việc nhóm trong các trò chơi thể thao hấp dẫn.',
  },
  {
    id: 6,
    name: 'Bé Đỗ Ngọc Lan',
    image: ImgStudent6,
    comment:
      'Con đam mê đọc sách và tìm hiểu văn học. Ở Happy Kid, con được khuyến khích đọc nhiều sách và tham gia các hoạt động liên quan đến văn học.',
  },
];

const Student = () => {
  const swiperRef = useRef() as any;
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const activeIndex = swiper.activeIndex;
      document.querySelectorAll('.swiper-slide').forEach((slide) => {
        slide.classList.remove('swiper-slide-nth-prev-2', 'swiper-slide-nth-next-2');
      });
      const prev2Slide = swiper.slides[activeIndex - 2];
      const next2Slide = swiper.slides[activeIndex + 2];
      if (prev2Slide) {
        prev2Slide.classList.add('swiper-slide-nth-prev-2');
      }
      if (next2Slide) {
        next2Slide.classList.add('swiper-slide-nth-next-2');
      }
    }
  };

  return (
    <StudentWrapper>
      <div className="w-[100%] flex flex-col items-center mx-auto touch-pan-y">
        <TrainingTitle className="text-[18px] md:text-[33px] md:w-[60%] w-[85%] text-center mt-4">
          HAPPY KIDS MANG ĐẾN BƯỚC KHỞI ĐẦU TỐT VÀ TOÀN DIỆN NHẤT CHO TRẺ
        </TrainingTitle>
        <div className="md:max-w-[1100px] md:min-w-[900px] w-full md:h-[200px] h-[150px] mt-10">
          <Swiper
            spaceBetween={isMobile ? 0 : 20}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={isMobile ? 3 : 5}
            loop={true}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
          >
            {listStudent.map((student) => {
              return (
                <SwiperSlide key={student.id}>
                  {({ isActive }) => {
                    isActive && setActiveIndex(student.id - 1);
                    return (
                      <div className="student-wrapper flex justify-center items-center ">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="student-image rounded-full border-[4px] border-blueNormal w-[120px] h-[120px] md:w-[170px] md:h-[170px] object-cover"
                        />
                      </div>
                    );
                  }}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <TrainingTitle className="text-[24px]">{listStudent[activeIndex].name}</TrainingTitle>
        <TrainingSubTitle>Happy Kids</TrainingSubTitle>
        <div className=" text-[16px] w-[90%] md:w-[60%] md:text-[16px] bg-[#fafaa4] rounded-[30px] relative py-6 px-10 text-center my-8">
          <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            {listStudent[activeIndex].comment}
          </motion.div>
        </div>
      </div>
    </StudentWrapper>
  );
};

export default Student;

const StudentWrapper = styled.div`
  width: 100%;
  height: 80dvh;
  height: 700px;
  max-height: 1200px;
  min-height: 600px;
  @media screen and (max-width: 768px) {
    height: 60dvh;
    min-height: 600px;
  }
  display: flex;
  .student-wrapper {
    filter: drop-shadow(1px 1px 20px #fafaa4);
  }
`;
const TrainingTitle = styled.h2`
  font-family: 'Silka-Bold';
  color: var(--blue-dark);
`;
const TrainingSubTitle = styled.h3`
  font-family: 'Silka';
  color: var(--blue-dark);
`;
