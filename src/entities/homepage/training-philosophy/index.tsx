import styled from 'styled-components';
import { BaseWrapperWithColor } from '../BaseWrapper';
import TeacherImg from '@/assets/class/class2.jpg';
import { motion } from 'framer-motion';
import EmojiImg from '@assets/emoji.png';
const ASK = [
  {
    id: 1,
    title: 'ATTITUDE',
    content:
      'Thái độ hơn trình độ” – Học viên sẽ có thái độ tốt với bản thân, gia đình, xã hội. Yêu bản thân, biết ơn gia đình, có trách nhiệm với xã hội',
    color: 'bg-[#fae7f0]',
  },
  {
    id: 2,
    title: 'SKILLS',
    content:
      'Các kỹ năng cần thiết và quan trọng cho tương lai của các Học viên như kỹ năng sống, tính độc lập, sự sáng tạo, tinh thần đồng đội, sự tự tin, thuyết trình, tranh luận,...',
    color: 'bg-[#fefae5]',
  },
  {
    id: 3,
    title: 'KNOWLEDGE',
    content:
      'Các Học viên sẽ được trang bị kiến thức về tư duy ngôn ngữ, kiến thức xã hội,... làm hành trang phát triển năng lực toàn diện cho Học viên sau này.',
    color: 'bg-[#acecfe]',
  },
];

const TrainingPhilosophy = () => {
  return (
    <BaseWrapperWithColor className="flex justify-center md:min-h-[800px] min-h-[1200px] ">
      <div className="flex flex-col items-center p-4 px-6 md:p-4 w-full md:w-[75%] mx-auto">
        <TrainingTitle className="text-[34px]">Triết lý đào tạo</TrainingTitle>
        <div className="rounded-t-lg text-[16px] md:text-[18px] bg-[#fafaa4] rounded-lg relative py-6 px-10 text-center my-8">
          Với triết lý đào tạo <strong className="text-blueDark">“KHÁM PHÁ NGÔN NGỮ ĐỂ THAY ĐỔI HÀNH VI”</strong> Happy Kids sẽ tập trung cao vào việc
          con em sẽ được học và đào tạo qua tiêu “Thái độ – Kỹ năng – Kiến thức” (Attitude – Skills – Knowledge) để phát triển năng lực toàn diện.
          <img src={EmojiImg} alt="emoji" className="w-[80px] h-auto absolute top-0 left-[-8%] hidden md:block md:left-[-4.5%]" />
        </div>
        <div className="detail-training flex flex-col md:flex-row w-full justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="detail-left w-full md:w-[45%] flex justify-center"
          >
            <img src={TeacherImg} className="w-full md:w-[80%] h-[200px] md:h-[450px] object-cover" alt="training" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="detail-right w-full md:w-[55%]"
          >
            <TrainingTitle className="text-end text-[24px] mb-6 mt-4 md:mt-0">Triết lý đào tạo A.S.K</TrainingTitle>
            {ASK.map((item) => (
              <div key={item.id} className={`mb-4 ${item.color} rounded-xl px-8 pt-4 pb-6`}>
                <h3 className="text-[18px] text-blueDark text-center font-bold mb-1">{item.title}</h3>
                <p className="text-[15px]">{item.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </BaseWrapperWithColor>
  );
};

export default TrainingPhilosophy;

const TrainingTitle = styled.h2`
  font-family: 'Silka-Bold';
  font-weight: 700;
  color: var(--blue-dark);
`;
