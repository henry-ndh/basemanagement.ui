import CountUp from 'react-countup';
import { Button } from '@/components/ui/button';
import { CountUpIcon } from '@/based/config/SVGIcon';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const countUpData = [
  {
    title: 'Học viên đã tham gia',
    number: 120,
    icon: <CountUpIcon.CountUp1 width="22px" height="22px" />,
    type: '+',
  },
  {
    title: 'Review từ phụ huynh',
    number: 787,
    icon: <CountUpIcon.CountUp1 width="22px" height="22px" />,

    type: '+',
  },
  {
    title: 'Phụ huynh hài lòng',
    number: 98,
    icon: <CountUpIcon.CountUp1 width="22px" height="22px" />,

    type: '%',
  },
];

const Introduce = () => {
  return (
    <IntroduceWrapper className="pb-introduce relative w-full  h-[60dvh] py-8">
      <div className="pb-introduce-content w-[60%]  m-auto text-[16px] max-2xl:text-[12px] font-medium">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="content_left w-[40%] space-y-2"
        >
          <h1 className="text-[24px] max-2xl:text-[20px] font-bold">VIETELS </h1>
          <h1 className="text-[24px] max-2xl:text-[20px] font-bold">Chắp cánh cho tương lai con em</h1>
          <p className="text-[16px] max-2xl:text-[12px] font-medium">
            Việc cho con em được dạy dỗ trong một môi trường bài bản ngay từ nhỏ sẽ giúp trẻ phát triển toàn diện, tạo nền tảng vững chắc cho tương
            lai.
          </p>
          <div className="space-x-6">
            <Button type="submit" className="bg-blueDark h-[35px] w-[135px] text-[14px] mt-4">
              Đăng ký ngay
            </Button>
            <Button variant="outline" className=" h-[35px] text-[13px] mt-4">
              Tư vấn miễn phí
            </Button>
          </div>
        </motion.div>
        <div className="content_right w-[50%]"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="pb-countup border-[1px] border-[#c5e4ff] rounded-2xl w-[70%] mx-auto left-[15%] h-[90px] bg-white absolute flex justify-around space-x-4  items-center bottom-[-2.5rem]"
      >
        {countUpData.map((item, index) => (
          <div key={index} className="flex items-center justify-center space-x-3">
            <div className="bg-blue-500 p-3 rounded-full">{item.icon}</div>
            <div className="flex flex-col">
              <span className="text-[#0065ff] font-bold  text-[20px]">
                <CountUp end={item.number} duration={5} className="" /> {item.type}
              </span>
              <span className="text-neutral-500 font-normal text-[16px]">{item.title}</span>
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
