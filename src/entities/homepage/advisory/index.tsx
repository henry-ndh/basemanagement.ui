import { BaseWrapperWithColor } from '../BaseWrapper';
import { TrainingTitle } from '../student';
import Banner1 from '@/assets/banner/banner1.jpg';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Title } from '../BaseWrapper';
import { Button } from '@/components/ui/button';
import { useCreateAdvisory } from '@/query/AdvisoryQuery';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
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
  const [model, setModel] = useState({
    name: '',
    phone: '',
    timeAdvisory: '',
  });
  const { mutateAsync } = useCreateAdvisory();
  const { toast } = useToast();
  const handleCreateAdvisory = async () => {
    try {
      await mutateAsync(model);
      toast({
        title: 'Đăng ký tư vấn thành công',
        description: 'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất',
        action: <ToastAction altText="Goto schedule to undo">Ok</ToastAction>,
        className: 'bg-green-700 text-white bg-gradient-to-r from-cyan-500 to-blue-500 top-0',
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BaseWrapperWithColor id="advisory" className="flex flex-col p-4 md:p-8 max-h-[700px] md:max-h-[750px]">
      <div className="w-full flex items-center flex-col md:w-[70%] mx-auto">
        <TrainingTitle className="text-[34px] mb-4">Nhận tư vấn</TrainingTitle>

        <div className=" advisory_wrapper h-[500px] md:h-[550px] flex bg-white  rounded-[16px]">
          <div className="advisory_left md:block hidden w-[65%]">
            <img src={Banner1} alt="banner" className="w-full h-full object-fill rounded-tl-2xl rounded-bl-2xl" />
          </div>
          <div className="advisory_right w-full  md:w-1/2 p-5 text-center">
            <Title className="text-[20px]">Cùng Happy Kids chắp cánh cho con em</Title>
            <p className="text-[13px] mt-1 mb-3">Hơn 100+ phụ huynh đã tin tưởng và cùng Happy Kids chắp cánh con em ta</p>
            <div className="space-y-2">
              <Input
                placeholder="Nhập tên phụ huynh *"
                className="border-[1px] border-gray-300"
                onChange={(e) => setModel({ ...model, name: e.target.value })}
              />
              <Input
                placeholder="Nhập số điện thoại phụ huynh *"
                className="border-[1px] border-gray-300"
                onChange={(e) => setModel({ ...model, phone: e.target.value })}
              />
            </div>
            <Title className="font-bold text-start my-4">Thời gian bạn muốn nhận tư vấn</Title>
            <div>
              {listTime.map((item) => (
                <div key={item.id} className="mb-4 flex items-center space-x-2">
                  <h3 className="font-semibold w-[15%] text-start">{item.title}: </h3>
                  {item.time.map((time, index) => (
                    <button
                      onClick={() => setModel({ ...model, timeAdvisory: time })}
                      key={index}
                      className={`px-[12px] py-[6px] rounded-[16px] border-[1px] border-[#555F6D] text-[14px] ${
                        time === model.timeAdvisory ? 'bg-blueDark text-white' : 'bg-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <Button className="w-full bg-blueDark rounded-xl mt-4" onClick={handleCreateAdvisory}>
              Nhận tư vấn ngay
            </Button>
          </div>
        </div>
      </div>
    </BaseWrapperWithColor>
  );
};

export default Advisory;
