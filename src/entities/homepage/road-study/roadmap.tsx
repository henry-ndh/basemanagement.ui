import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RoadMapDetailData, RoadMapData } from '@/based/data/Data';
const RoadMap = () => {
  const [active, setActive] = useState(1);
  const activeDetail = RoadMapDetailData.find((item) => item.id === active);

  return (
    <div className="relative">
      <RoadMapWrapper className="space-x-3">
        {RoadMapData.map((item, index) => (
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
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="list-disc mb-2">
              {activeDetail?.target_user.map((user, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="ml-4"
                >
                  {user}
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-[18px] font-bold">Thời gian học:</p>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }} className="text-gray-600">
              {activeDetail?.time}
            </motion.li>
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
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }} className="list-disc">
              {activeDetail?.target_study.map((study, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="ml-4"
                >
                  {study}
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
          <Button className="bg-blueDark text-[18px] px-8 py-7 mb-10 rounded-xl ">Đăng ký ngay</Button>
        </motion.div>
      </AnimatePresence>
    </div>
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
