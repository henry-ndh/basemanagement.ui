import styled from 'styled-components';
import { BaseWrapperWithColor } from '../BaseWrapper';
import TeacherImg from '@/assets/class/class2.jpg';
import EmojiImg from '@assets/emoji.png';
import { useIsMobile } from '@/based/hook/CheckDevice';
import { ASK } from '@/based/data/Data';

const TrainingPhilosophy = () => {
  const isMobile = useIsMobile();

  return (
    <BaseWrapperWithColor className=" flex justify-center md:min-h-[800px] min-h-[1200px] ">
      <div className=" flex flex-col items-center p-4 px-6 md:p-4 w-full md:w-[75%] mx-auto">
        <TrainingTitle className="text-[34px]">Triết lý đào tạo</TrainingTitle>
        <div className="rounded-t-lg text-[16px] md:text-[18px] bg-[#fafaa4] rounded-lg relative py-6 px-10 text-center my-8">
          Với triết lý đào tạo <strong className="text-blueDark">“KHÁM PHÁ NGÔN NGỮ ĐỂ THAY ĐỔI HÀNH VI”</strong> Happy Kids sẽ tập trung cao vào việc
          con em sẽ được học và đào tạo qua tiêu “Thái độ – Kỹ năng – Kiến thức” (Attitude – Skills – Knowledge) để phát triển năng lực toàn diện.
          <img src={EmojiImg} alt="emoji" className="box_scale w-[80px] h-auto absolute top-0 left-[-8%] hidden md:block md:left-[-4.5%]" />
        </div>
        <div className="detail-training flex flex-col md:flex-row w-full justify-between">
          <div className="box_scale detail-left w-full md:w-[45%] flex justify-center">
            <img src={TeacherImg} className="w-full md:w-[80%] h-[200px] md:h-[450px] object-cover" alt="training" />
          </div>
          <div className="detail-right w-full md:w-[55%]">
            <TrainingTitle className="text-end text-[24px] mb-6 mt-4 md:mt-0">Triết lý đào tạo A.S.K</TrainingTitle>
            {ASK.map((item) => (
              <div
                key={item.id}
                className={`${isMobile ? ` box_translateX_ByIndex` : `box_translateX_RightToLeft`} mb-4 ${item.color} rounded-xl px-8 pt-4 pb-6`}
              >
                <h3 className="text-[18px] text-blueDark text-center font-bold mb-1">{item.title}</h3>
                <p className="text-[15px]">{item.content}</p>
              </div>
            ))}
          </div>
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
