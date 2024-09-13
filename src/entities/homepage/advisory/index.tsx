import { BaseWrapperWithColor } from '../BaseWrapper';
import { TrainingTitle } from '../student';
import Banner1 from '@/assets/banner/banner1.jpg';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Title } from '../BaseWrapper';
import { Button } from '@/components/ui/button';

const listTime = [
  {
    id: 1,
    title: 'Sáng',
    time: ['09h - 10h', '10h - 11h', '11h - 12h'],
  },
  {
    id: 2,
    title: 'Chiều',
    time: ['14h - 15h', '15h - 16h', '16h - 17h'],
  },
  {
    id: 3,
    title: 'Tối',
    time: ['18h - 19h', '19h - 20h', '20h - 21h'],
  },
];

const Advisory = () => {
  const [selectedTime, setSelectedTime] = useState<string>('');
  return (
    <BaseWrapperWithColor className="flex flex-col p-4 md:p-8 max-h-[700px] md:max-h-[750px]">
      <div className="w-full flex items-center flex-col md:w-[70%] mx-auto">
        <TrainingTitle className="text-[34px] mb-4">Nhận tư vấn</TrainingTitle>

        <div className="box_scale advisory_wrapper h-[500px] md:h-[550px] flex bg-white  rounded-[16px]">
          <div className="advisory_left md:block hidden w-[65%]">
            <img src={Banner1} alt="banner" className="w-full h-full object-fill rounded-tl-2xl rounded-bl-2xl" />
          </div>
          <div className="advisory_right w-full  md:w-1/2 p-5 text-center">
            <Title>Cùng Happy Kids chắp cánh cho con em</Title>
            <p className="text-[13px] mt-1 mb-3">Hơn 100+ phụ huynh đã tin tưởng và cùng Happy Kids chắp cánh con em ta</p>
            <div className="space-y-2">
              <Input placeholder="Nhập tên phụ huynh *" className="border-[1px] border-gray-300" />
              <Input placeholder="Nhập số điện thoại phụ huynh *" />
            </div>
            <Title className="font-bold text-start my-4">Thời gian bạn muốn nhận tư vấn</Title>
            <div>
              {listTime.map((item) => (
                <div key={item.id} className="mb-4 flex items-center space-x-2">
                  <h3 className="font-semibold w-[15%] text-start">{item.title}: </h3>
                  {item.time.map((time, index) => (
                    <button
                      onClick={() => setSelectedTime(time)}
                      key={index}
                      className={`px-[12px] py-[6px] rounded-[16px] border-[1px] border-[#555F6D] text-[14px] ${
                        time === selectedTime ? 'bg-blueDark text-white' : 'bg-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <Button className="w-full bg-blueDark rounded-xl mt-4">Nhận tư vấn ngay</Button>
          </div>
        </div>
      </div>
    </BaseWrapperWithColor>
  );
};

export default Advisory;
