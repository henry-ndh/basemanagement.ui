import styled from 'styled-components';
import { useState } from 'react';
import { BaseWrapperBasic } from '../BaseWrapper';
import { Title, IntroduceTitle } from '../BaseWrapper';
import ImgClass1 from '@/assets/class/class1.jpg';
import ImgClass2 from '@/assets/class/class2.jpg';
import ImgClass3 from '@/assets/class/class3.jpg';
import ImgClass4 from '@/assets/class/class4.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const HomeInfraStructureData = [
  {
    id: 1,
    img: ImgClass1,
    content: 'Phòng học',
    subContent: [
      '1. Phòng học luôn gọn gàng, sạch sẽ',
      '2. Cơ sở vật chất Happy Kids luôn ở trạng thái tốt nhất dành cho trẻ',
      '3. Không gian tại Happy Kids luôn đảm bảo rộng rãi, thoáng đãng cho trẻ',
    ],
  },
  {
    id: 2,
    img: ImgClass2,
    content: 'Phòng nấu ăn',
    subContent: [
      '1. Nhà bếp được vệ sinh và tiệt trùng sau mỗi bữa ăn',
      '2. Nguyên liệu được chọn lựa kỹ lưỡng, đảm bảo an toàn vệ sinh thực phẩm',
      '3. Trẻ em được khuyến khích tham gia các hoạt động nấu ăn và học kỹ năng sống',
    ],
  },
  {
    id: 3,
    img: ImgClass3,
    content: 'Nơi ngủ trưa',
    subContent: [
      '1. Không gian yên tĩnh, thoáng mát, tạo cảm giác thoải mái cho trẻ',
      '2. Giường ngủ riêng biệt, sạch sẽ cho từng bé',
      '3. Giáo viên luôn túc trực để đảm bảo an toàn và giấc ngủ của trẻ',
    ],
  },
  {
    id: 4,
    img: ImgClass4,
    content: 'Sân chơi',
    subContent: [
      '1. Sân chơi rộng rãi với đầy đủ các trò chơi an toàn cho trẻ',
      '2. Được thiết kế để khuyến khích sự vận động và sáng tạo của trẻ',
      '3. Giáo viên giám sát và hướng dẫn trẻ tham gia các hoạt động ngoài trời',
    ],
  },
  {
    id: 5,
    img: ImgClass4,
    content: 'Nhà vệ sinh',
    subContent: [
      '1. Nhà vệ sinh luôn được giữ sạch sẽ và khử khuẩn thường xuyên',
      '2. Được trang bị đầy đủ thiết bị vệ sinh an toàn và tiện lợi cho trẻ em',
      '3. Trẻ em được hướng dẫn các quy tắc vệ sinh cá nhân và giữ gìn sạch sẽ',
    ],
  },
];

const HomeInfraStructure = () => {
  const [selectedImage, setSelectedImage] = useState(HomeInfraStructureData[0]);

  return (
    <BaseWrapperBasic id="cosovatchat" className="flex flex-col p-4 md:p-8 min-h-[1400px] max-h-[1500px]  md:min-h-[1000px] md:max-h-[1200px]">
      <div className="2xl:w-[1100px] lg:w-[900px] mx-auto">
        <Title className="text-[34px] font-bold mb-4 text-center">Cơ sở vật chất</Title>
        <IntroduceTitle className="mb-8 text-center">
          Cơ sở vật chất của Happy Kids luôn đặt lên hàng đầu, mỗi trẻ sẽ luôn có một môi trường rộng rãi, gọn gàng, sạch sẽ để phát triển tốt nhất{' '}
        </IntroduceTitle>
        <InfraStructure className="w-full overflow-hidden flex flex-col md:grid grid-cols-[55%,40%] h-[650px] md:h-[500px]  md:justify-between p-10">
          <AnimatePresence key={selectedImage.id}>
            <div className="flex items-center  w-full min-h-[300px] max-h-[300px] md:min-h-[400px]">
              <img src={selectedImage.img} alt="class" className="w-full h-[100%] rounded-2xl object-cover" />
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <Title className="text-[24px] mb-4 mt-8 md:mt-0 ">{selectedImage.content}</Title>
              <div className="bg-pink px-6 py-4 rounded-lg space-y-4">
                {selectedImage.subContent.map((item, index) => (
                  <p key={index} className="text-[14px] font-normal">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </InfraStructure>
        <div className="hidden mt-6 md:flex justify-between">
          {HomeInfraStructureData.map((item, index) => (
            <ImageDetail
              key={index}
              onClick={() => setSelectedImage(item)}
              src={item.img}
              alt="class"
              isActive={selectedImage.id === item.id}
              className={` w-[18%] cursor-pointer  h-[150px] rounded-2xl object-cover shadow-lg`}
            />
          ))}
        </div>
        <div className="md:hidden mt-6 grid grid-cols-3 justify-between ">
          {HomeInfraStructureData.slice(0, 3).map((item, index) => (
            <ImageDetail
              key={index}
              onClick={() => setSelectedImage(item)}
              src={item.img}
              alt="class"
              isActive={selectedImage.id === item.id}
              className={` w-full cursor-pointer  h-[150px] rounded-2xl object-cover shadow-lg`}
            />
          ))}
        </div>
        <div className="md:hidden mt-6 grid grid-cols-2 justify-between">
          {HomeInfraStructureData.slice(3, 5).map((item, index) => (
            <ImageDetail
              key={index}
              onClick={() => setSelectedImage(item)}
              src={item.img}
              alt="class"
              isActive={selectedImage.id === item.id}
              className={` w-full cursor-pointer  h-[150px] rounded-2xl object-cover shadow-lg`}
            />
          ))}
        </div>
      </div>
    </BaseWrapperBasic>
  );
};

export default HomeInfraStructure;

const InfraStructure = styled.div`
  border-radius: 0.5rem;
  background-image: linear-gradient(103deg, #fdf1ec 0.48%, #b4e2f8 98.36%);
`;

const ImageDetail = styled.img<{ isActive: boolean }>`
  background: ${({ isActive }) =>
    isActive
      ? `radial-gradient(circle at 100% 100%, #9f8989 0, #ffffff 3px, transparent 3px) 0% 0%/8px 8px no-repeat,
            radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px) 100% 0%/8px 8px no-repeat,
            radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px) 0% 100%/8px 8px no-repeat,
            radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100% 100%/8px 8px no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 10px) calc(100% - 16px) no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 16px) calc(100% - 10px) no-repeat,
            linear-gradient(90deg, #e1e278 0%, #99cce5 100%)`
      : ''};
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`;
