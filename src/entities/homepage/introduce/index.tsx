import CountUp from 'react-countup';
import { Button } from '@/components/ui/button';
import { CountUpIcon } from '@/based/config/SVGIcon';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const countUpData = [
  {
    title: 'Học viên đã tham gia',
    number: 120,
    icon: <CountUpIcon.CountUp1 className="w-[16px] h-[16px] md:w-[22px] md:h-[22px] " />,
    type: '+',
  },
  {
    title: 'Review tốt từ phụ huynh',
    number: 787,
    icon: <CountUpIcon.CountUp2 className="w-[16px] h-[16px] md:w-[22px] md:h-[22px] " />,

    type: '+',
  },
  {
    title: 'Phụ huynh hài lòng',
    number: 98,
    icon: <CountUpIcon.CountUp3 className="w-[16px] h-[16px] md:w-[22px] md:h-[22px] " />,

    type: '%',
  },
];

const Introduce = () => {
  return (
    <IntroduceWrapper className="pb-introduce relative w-full h-auto py-8 md:h-[60dvh]">
      <div className="pb-introduce-content w-full px-4 md:w-[60%] md:m-auto text-[14px] md:text-[16px] font-medium">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="content_left w-full md:w-[40%] space-y-2"
        >
          <h1 className="text-[20px] md:text-[24px] font-bold">Happy Kids </h1>
          <h1 className="text-[20px] md:text-[24px] font-bold">Chắp cánh cho tương lai con em</h1>
          <p className="text-[14px] md:text-[16px] font-medium">
            Việc cho con em được dạy dỗ trong một môi trường bài bản ngay từ nhỏ sẽ giúp trẻ phát triển toàn diện, tạo nền tảng vững chắc cho tương
            lai.
          </p>
          <div className="space-y-2 md:space-y-0 md:space-x-6">
            <Button type="submit" className="bg-blueDark h-[35px] w-full md:w-[135px] text-[14px] mt-4">
              Đăng ký ngay
            </Button>
            <Button variant="outline" className="h-[35px] w-full md:w-auto text-[13px] mt-4">
              Tư vấn miễn phí
            </Button>
          </div>
        </motion.div>
        <div className="content_right w-full md:w-[50%]"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="pb-countup border-[1px] mt-[30px]  md:mt-0 h-[120px] border-[#c5e4ff] rounded-2xl w-[90%] md:w-[70%] mx-auto left-[5%] md:left-[15%] py-4 md:h-[90px] bg-white md:absolute flex md:flex-row justify-around md:space-y-0 md:space-x-4 items-center bottom-[-20%] md:bottom-[-2.5rem] shadow-md"
      >
        {countUpData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center space-x-3">
            <div className="bg-blue-500 p-3 rounded-full ml-1">{item.icon}</div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start ">
              <span className="text-[#0065ff] font-bold text-[14px] md:text-[20px] text-center">
                <CountUp end={item.number} duration={5} className="" /> {item.type}
              </span>
              <span className="text-neutral-500 font-normal text-[12px] md:text-[16px] text-center">{item.title}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </IntroduceWrapper>
  );
};

export default Introduce;

const IntroduceWrapper = styled.div`
  background-image: linear-gradient(180deg, #dcefff 0%, #ffffff 100%);
`;
