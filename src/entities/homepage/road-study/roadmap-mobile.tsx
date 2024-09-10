import styled from 'styled-components';
import { RoadMapDetailData, RoadMapData } from '@/based/data/Data';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const RoadMapMobile = () => {
  const [active, setActive] = useState(1);
  const activeDetail = RoadMapDetailData.find((item) => item.id === active);
  return (
    <>
      <RoadMapMobileWrapper>
        <div className="button-action w-full ">
          <div className="button-action-top space-x-2 grid grid-cols-3 grid-[33%,33%,33%]">
            {RoadMapData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={`flex flex-col mb-3 items-center justify-center p-2 rounded-lg ${
                  active === item.id ? 'bg-blueDark text-white' : 'bg-white'
                }`}
                onClick={() => {
                  setActive(item.id);
                }}
              >
                <span className={`text-[12px] font-normal ${active === item.id ? 'text-white' : ''}`}>{item.title}</span>
                <span className={`text-[13px] font-bold ${active === item.id ? 'text-white' : ''}`}>{item.level}</span>
              </div>
            ))}
          </div>
          <div className="button-action-bottom space-x-2 grid grid-cols-2">
            {RoadMapData.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className={`flex flex-col mb-3 items-center justify-center p-2 rounded-lg ${
                  active === item.id ? 'bg-blueDark text-white' : 'bg-white'
                }`}
                onClick={() => {
                  setActive(item.id);
                }}
              >
                <span className={`text-[12px] font-normal ${active === item.id ? 'text-white' : 'text-gray-500'}`}>{item.title}</span>
                <span className="text-[12px] font-bold ">{item.level}</span>
              </div>
            ))}
          </div>
        </div>
      </RoadMapMobileWrapper>
      <AnimatePresence key={active} mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <RoadMapDetailMobile className="flex flex-col p-4 bg-white rounded-lg w-[100%] max-h-[450px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex flex-col space-y-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                className="text-[14px] font-bold"
              >
                Đối tượng học:
              </motion.p>
              <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.15 }} className="list-disc">
                {activeDetail?.target_user.map((user, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1, delay: 0.05 * index }}
                    className="text-[14px] font-normal ml-4"
                  >
                    {user}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
                className="text-[14px] font-bold"
              >
                Thời gian học:
              </motion.p>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.25 }}
                className="text-[14px] font-normal"
              >
                {activeDetail?.time}
              </motion.li>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
                className="text-[14px] font-bold"
              >
                Mục tiêu khóa học:
              </motion.p>
              <motion.ul className="list-disc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.35 }}>
                {activeDetail?.target_study.map((study, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1, delay: 0.05 * index }}
                    className="text-[14px] font-normal ml-4"
                  >
                    {study}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="flex justify-center">
              <Button className="w-[120px] mt-4 text-sm bg-blueDark text-white">Xem chi tiết</Button>
            </motion.div>
          </RoadMapDetailMobile>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RoadMapMobile;
const RoadMapMobileWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const RoadMapDetailMobile = styled.div``;
