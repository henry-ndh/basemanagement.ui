import { BaseWrapperBasic } from '../BaseWrapper';
import { CertificateIcon } from '@/based/config/SVGIcon';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListTeacher } from '@/based/data/Data';
import { TrainingTitle } from '../student';
const Teacher = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(ListTeacher[0]);

  return (
    <BaseWrapperBasic className="box flex flex-col p-4 md:p-8 min-h-[1000px] md:min-h-[600px] md:max-h-[700px]">
      <div className="w-full  md:w-[60%] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <TrainingTitle className="text-[34px]">Đội ngũ giáo viên</TrainingTitle>
          <p className="mb-8 bg-[#fafaa4] py-6 px-10 rounded-lg my-6">
            Là những giáo viên luôn tận tâm với công việc, được đào tạo chuyên môn bài bản và đạt chuẩn theo chương trình giảng dạy
          </p>
        </div>
        <div className=" list-img-teacher grid grid-cols-2 md:flex md:justify-between mb-8 w-full ">
          {ListTeacher.map((teacher, index) => (
            <div
              key={index}
              className={`text-center cursor-pointer border-[1px] flex justify-center items-center flex-col md:w-[23%] w-[95%] my-2 md:my-0 py-3 ${
                selectedTeacher.id === teacher.id ? 'border-[#0065FF] bg-[#d3dce3]' : 'border-[#c7cdda]'
              } rounded-lg`}
              onClick={() => setSelectedTeacher(teacher)}
            >
              <img src={teacher.img} alt={teacher.name} className="w-12 h-12 rounded-full mb-2" />
              <p className="text-[13px] font-semibold">{teacher.name}</p>
            </div>
          ))}
        </div>
        <AnimatePresence key={selectedTeacher.id}>
          <div className="teacher-info md:mt-10 md:grid grid-cols-[40%,65%] ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="border-[1px] border-[#c7cdda] rounded-2xl max-h-[240px] mb-4 md:mb-0 bg-white flex justify-center"
            >
              <img src={selectedTeacher.img} alt={selectedTeacher.name} className="w-[50%] h-full  mb-4" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="ml-3">
              <h3 className="font-semibold">{selectedTeacher.name}</h3>
              <p className="mb-3 text-[13px]">{selectedTeacher.position}</p>
              <ul className="grid grid-cols-2">
                {selectedTeacher.listCertificate.map((certificate, index) => (
                  <li key={index} className="flex">
                    <span className="mr-2 p-2 bg-[#dcedfd] mb-5 rounded-md">
                      {index == 0 ? (
                        <CertificateIcon.Certificate1 width="22px" height="22px" />
                      ) : (
                        <CertificateIcon.Certificate2 width="22px" height="22px" />
                      )}
                    </span>
                    <div className="flex flex-col ">
                      <p className="text-[14px] font-semibold">{certificate}</p>
                      <span className="text-[12px] font-normal">5.6</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </BaseWrapperBasic>
  );
};

export default Teacher;
