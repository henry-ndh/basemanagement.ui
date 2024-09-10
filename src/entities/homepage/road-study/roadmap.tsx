import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
const roadMapData = [
  {
    id: 1,
    title: 'Chặng 1',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Chặng 2',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Chặng 3',
    level: 'Advanced',
  },
  {
    id: 4,
    title: 'Chặng 4',
    level: 'Expert',
  },
  {
    id: 5,
    title: 'Chặng 5',
    level: 'Master',
  },
];

const roadMapDetailData = [
  {
    id: 1,
    target_user: ['Người mới bắt đầu', 'Các em nhỏ'],
    time: '2 tháng',
    target_study: ['Học lý thuyết cơ bản', 'Học cách sử dụng công cụ', 'Học cách tạo ra sản phẩm đầu tiên'],
  },
  {
    id: 2,
    target_user: ['Người đã có chút kinh nghiệm'],
    time: '3 tháng',
    target_study: ['Nâng cao kỹ năng cơ bản', 'Học các kỹ thuật nâng cao', 'Thực hành dự án thực tế'],
  },
  {
    id: 3,
    target_user: ['Người đã có kinh nghiệm', 'Chuyên gia trong lĩnh vực liên quan'],
    time: '4 tháng',
    target_study: ['Tăng cường kỹ năng chuyên sâu', 'Làm việc với các dự án phức tạp', 'Tìm hiểu công nghệ mới'],
  },
  {
    id: 4,
    target_user: ['Chuyên gia muốn phát triển thêm', 'Người dẫn dắt dự án'],
    time: '5 tháng',
    target_study: ['Làm việc trên các dự án lớn', 'Tham gia vào các nhóm nghiên cứu', 'Dẫn dắt các dự án và đội nhóm'],
  },
  {
    id: 5,
    target_user: ['Nhà lãnh đạo', 'Người muốn chia sẻ kiến thức'],
    time: '6 tháng',
    target_study: ['Chia sẻ kiến thức với cộng đồng', 'Xây dựng danh tiếng trong ngành', 'Tham gia vào các hội thảo và sự kiện chuyên ngành'],
  },
];

const RoadMap = () => {
  const [active, setActive] = useState(1);
  const activeDetail = roadMapDetailData.find((item) => item.id === active);

  return (
    <>
      <RoadMapWrapper className="space-x-3">
        {roadMapData.map((item, index) => (
          <RoadMapContent
            key={index}
            onClick={() => {
              setActive(item.id);
            }}
            isActive={active === item.id}
          >
            <RoadContent className="road-content">
              <p>{item.title}</p>
              <p className="font-bold">{item.level}</p>
            </RoadContent>
            <div className="dot_check"></div>
          </RoadMapContent>
        ))}
      </RoadMapWrapper>
      <AnimatePresence key={active} mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex mt-[3%] gap-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            className="detail-left w-[40%] max-h-[250px] border border-[#c5e4ff] rounded-2xl px-4 flex flex-col py-5"
          >
            <p className="text-[18px] font-bold">Đối tượng học:</p>
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className=" text-lg mb-2">
              {activeDetail?.target_user.map((user, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  - {user}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-[18px] font-bold">Thời gian học:</p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }} className="text-gray-600">
              - {activeDetail?.time}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            className="detail-right w-[60%] max-h-[250px] border border-[#c5e4ff] rounded-2xl px-4 flex flex-col pt-5"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="text-[18px] font-bold mb-2"
            >
              Mục tiêu khóa học
            </motion.p>
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
              {activeDetail?.target_study.map((study, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  - {study}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
          className="action-button mt-6"
        >
          <Button className="bg-blueDark text-[18px] px-8 py-7 rounded-xl">Đăng ký ngay</Button>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default RoadMap;

const RoadMapWrapper = styled.div`
  position: relative;
  height: 130px;
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  border-bottom: 2px solid #dfe1e6;
`;

const RoadMapContent = styled.div<{ isActive: boolean }>`
  --background-color: ${(props) => (props.isActive ? 'var(--blue-dark)' : 'transparent')};
  --text-color: ${(props) => (props.isActive ? 'white' : 'black')};
  --dot-background-color: ${(props) => (props.isActive ? 'var(--blue-dark)' : '#dfe1e6')};

  position: relative;
  width: 20%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  .dot_check {
    position: absolute;
    bottom: -42.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--dot-background-color);
    display: inline-block;
    z-index: 1;
  }
  .road-content {
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    border-radius: 10px;
    background-color: var(--background-color);
    color: var(--text-color);
    p {
      font-size: 18px;
      margin: 0;
    }
  }
  &:hover {
    .road-content {
      background-color: var(--blue-dark);
      color: white;
    }
    .dot_check {
      background-color: var(--blue-dark);
    }
  }
`;

const RoadContent = styled.div``;
