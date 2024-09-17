import { BaseWrapperGrey } from '../BaseWrapper';
import { Title } from '../BaseWrapper';
import styled from 'styled-components';
import ImgClass from '@/assets/class/class1.jpg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FrequentlyQuestion = () => {
  return (
    <BaseWrapperGrey id="cauhoithuonggap" className="flex flex-col  p-4 md:p-8 min-h-[1200px] md:min-h-[650px] md:max-h-[700px]">
      <div className=" 2xl:w-[1200px] lg:w-[1000px] w-full mx-auto ">
        <Title className="text-[34px] font-bold mb-4 text-center">Câu hỏi thường gặp</Title>
        <div className="w-full md:grid md:grid-cols-[55%,38%] justify-between">
          <div className="w-full md:mb-0 mb-10">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white px-3 py-1 rounded-xl">
                <AccordionTrigger>Phương pháp Montessori là gì?</AccordionTrigger>
                <AccordionContent className="bg-white mt-2">
                  Phương pháp Montessori là một phương pháp giáo dục do Maria Montessori phát triển, tập trung vào việc khuyến khích trẻ tự học và
                  phát triển toàn diện qua môi trường học tập tự do và có tổ chức. Trẻ được khuyến khích khám phá và học qua trải nghiệm thực tế, với
                  giáo viên đóng vai trò hướng dẫn thay vì giảng dạy trực tiếp. Phương pháp này giúp phát triển sự tự lập, sáng tạo và khả năng giải
                  quyết vấn đề của trẻ.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white px-3 py-1 rounded-xl">
                <AccordionTrigger>Học phí tôi sẽ phải trả là bao nhiêu?</AccordionTrigger>
                <AccordionContent>
                  Happy Kids cung cấp chương trình giáo dục Montessori với mức học phí chỉ từ <strong>1.000.000 đồng</strong>, rẻ hơn thị trường lên
                  <strong>đến hơn 4 lần</strong>. Trong khi mức giá trung bình cho phương pháp này trên thị trường dao động từ{' '}
                  <strong>4.000.000 - 18.000.000 đồng</strong>, Happy Kids cam kết mang đến cơ hội học tập chất lượng với chi phí hợp lý. Chúng tôi
                  mong muốn mọi trẻ em đều có thể tiếp cận môi trường giáo dục hiện đại và nhận được nền tảng phát triển tốt nhất cho tương lai.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white px-3 py-1 rounded-xl">
                <AccordionTrigger>Các trẻ sẽ được đào tạo ra sao tại trường?</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-2">
                  <p>
                    - Trẻ em theo phương pháp Montessori sẽ được đào tạo thông qua một môi trường học tập linh hoạt và tương tác. Thay vì học qua
                    giảng dạy truyền thống, các bé sẽ tự do khám phá các hoạt động học tập phù hợp với lứa tuổi và sự phát triển của mình. Mỗi trẻ
                    được khuyến khích phát triển theo tốc độ riêng, thông qua việc sử dụng các học cụ đặc biệt giúp bé học về toán học, ngôn ngữ, khoa
                    học và kỹ năng xã hội.
                  </p>
                  <p>
                    - Giáo viên đóng vai trò là người hướng dẫn, giúp trẻ phát triển tính tự lập, khả năng tư duy sáng tạo và kỹ năng giải quyết vấn
                    đề. Phương pháp này không chỉ nhấn mạnh đến kiến thức học thuật mà còn tập trung vào việc xây dựng nhân cách, giúp trẻ tự tin và
                    tôn trọng bản thân cũng như người khác.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white px-3 py-1 rounded-xl">
                <AccordionTrigger>Trường có bao nhiêu cở sở?</AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>Hiện tại trường có 2 cơ sở.</p>
                  <p>
                    - <strong>Cơ sở 1</strong>: 123 Nguyễn Văn Linh, Quỳnh Tân 1. Thị trấn Buôn Trấp, Huyện Krông Ana, Tỉnh Đắk Lăk
                  </p>
                  <p>
                    - <strong>Cơ sở 2</strong>: 12 Ea Bông, Huyện Krông Ana, tỉnh Đắk Lắk
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <SupportWrapper bg={ImgClass}>
            <div className="support-content flex flex-col space-y-4 text-white text-[34px]">
              <span>Liên hệ đội ngũ hỗ trợ</span>
              <Button className="bg-white text-black hover:bg-white">Bắt đầu chat</Button>
            </div>
            <div className="hide"></div>
          </SupportWrapper>
        </div>
      </div>
    </BaseWrapperGrey>
  );
};

export default FrequentlyQuestion;

const SupportWrapper = styled.div<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;

  .support-content {
    position: relative;
    color: white;
    z-index: 2;
    font-size: 20px;
    font-weight: 700;
  }
  .hide::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;
