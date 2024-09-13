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
import { listStudent } from '@/based/data/Data';

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

        <div className="box_scale md:max-w-[1100px] md:min-w-[900px] w-full md:h-[200px] h-[150px] mt-10">
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
                      <div className="student-wrapper pt-[5px] flex justify-center items-center ">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="student-image rounded-full border-[4px] border-blueNormal w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-cover"
                        />
                      </div>
                    );
                  }}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="box_scale text-center">
          <TrainingTitle className=" text-[24px]">{listStudent[activeIndex].name}</TrainingTitle>
          <TrainingSubTitle className="">Happy Kids</TrainingSubTitle>
        </div>
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
    border-radius: 50%;
    filter: drop-shadow(1px 1px 8px #3b82f6);
  }
`;
export const TrainingTitle = styled.h2`
  font-family: 'Silka-Bold';
  color: var(--blue-dark);
`;
const TrainingSubTitle = styled.h3`
  font-family: 'Silka';
  color: var(--blue-dark);
`;
