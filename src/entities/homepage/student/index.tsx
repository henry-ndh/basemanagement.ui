import styled from 'styled-components';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ImgStudent1 from '@assets/student/student1.jpg';
import ImgStudent2 from '@assets/student/student2.jpg';
import ImgStudent3 from '@assets/student/student3.jpg';
import ImgStudent4 from '@assets/student/student4.jpg';
import ImgStudent5 from '@assets/student/student5.jpg';
import ImgStudent6 from '@assets/student/student6.jpg';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useRef, useState, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const listStudent = [
  {
    id: 1,
    name: 'Student 1',
    image: ImgStudent1,
  },
  {
    id: 2,
    name: 'Student 2',
    image: ImgStudent2,
  },
  {
    id: 3,
    name: 'Student 3',
    image: ImgStudent3,
  },
  {
    id: 4,
    name: 'Student 4',
    image: ImgStudent4,
  },
  {
    id: 5,
    name: 'Student 5',
    image: ImgStudent5,
  },
  {
    id: 6,
    name: 'Student 6',
    image: ImgStudent6,
  },
];

const Student = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);
  return (
    <StudentWrapper>
      <SwiperStudent>
        <p className="text-blue-600 text-center text-[33px] font-bold max-2xl:text-[22px] w-[95%] md:w-[50%] mx-auto ">
          HAPPY KIDS MANG ĐẾN BƯỚC KHỞI ĐẦU TỐT VÀ TOÀN DIỆN NHẤT CHO TRẺ
        </p>
        <Swiper
          slidesPerView={isMobile ? 3 : 5}
          centeredSlides={true}
          loop={true}
          spaceBetween={isMobile ? 150 : 12}
          modules={[Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          watchSlidesProgress={true}
        >
          {listStudent.map((student, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="flex justify-center items-center">
                  <AvatarWrapper isActive={isActive} className="h-full">
                    <Avatar className="cursor-pointer w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] 2xl:w-[260px] 2xl:h-[260px] border-[3.5px] border-blue-400">
                      <AvatarImage src={student.image} alt={student.name} />
                      <AvatarFallback>{student.name}</AvatarFallback>
                    </Avatar>
                  </AvatarWrapper>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperStudent>
      <div>
        <h1>Student</h1>
      </div>
    </StudentWrapper>
  );
};

export default Student;

const StudentWrapper = styled.div`
  width: 100%;
  height: 80dvh;
`;

const SwiperStudent = styled.div`
  width: 100%;
  height: 60dvh;
  margin-top: 5%;
`;

const AvatarWrapper = styled.div<{ isActive: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isActive }) => (isActive ? 'scale(1.15)' : 'scale(0.9)')};
  margin-top: 10%;
`;
