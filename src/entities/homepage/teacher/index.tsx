import { BaseWrapperBasic } from '../BaseWrapper';
import Teacher1 from '@/assets/teacher/Le-Duy-Anh.jpg';
import { CertificateIcon } from '@/based/config/SVGIcon';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const ListTeacher = [
  {
    id: 1,
    img: Teacher1,
    name: 'Nguyễn Thị A',
    position: 'Giáo viên',
    listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ Mosteri', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
  },
  {
    id: 2,
    img: Teacher1,
    name: 'Nguyễn Thị B',
    position: 'Giáo viên',
    listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
  },
  {
    id: 3,
    img: Teacher1,
    name: 'Nguyễn Thị C',
    position: 'Giáo viên',
    listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
  },
  {
    id: 4,
    img: Teacher1,
    name: 'Nguyễn Thị D',
    position: 'Giáo viên',
    listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
  },
];

const Teacher = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(ListTeacher[0]);

  return (
    <BaseWrapperBasic className="flex flex-col p-4 md:p-8">
      <div className="w-full md:w-[60%] mx-auto">
        <h2 className="text-2xl font-bold mb-4">Đội ngũ giáo viên</h2>
        <p className="mb-8">
          Là những giáo viên luôn tận tâm với công việc, được đào tạo chuyên môn bài bản và đạt chuẩn theo chương trình giảng dạy
        </p>
        <div className="list-img-teacher grid grid-cols-2 md:flex md:justify-between mb-8 w-full ">
          {ListTeacher.map((teacher, index) => (
            <div
              key={index}
              className={`text-center cursor-pointer border-[1px] flex justify-center items-center flex-col md:w-[23%] w-[95%] my-2 md:my-0 py-3 ${
                selectedTeacher.id === teacher.id ? 'border-[#0065FF] bg-[#dcedfd]' : 'border-[#c7cdda]'
              } rounded-lg`}
              onClick={() => setSelectedTeacher(teacher)}
            >
              <img src={teacher.img} alt={teacher.name} className="w-12 h-12 rounded-full mb-2" />
              <p className="text-[13px] font-semibold">{teacher.name}</p>
            </div>
          ))}
        </div>
        <AnimatePresence key={selectedTeacher.id}>
          <div className="teacher-info  md:grid grid-cols-[40%,65%] ">
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
