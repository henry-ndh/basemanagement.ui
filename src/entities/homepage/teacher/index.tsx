import { BaseWrapperWithColor } from '../BaseWrapper';
import Teacher1 from '@/assets/teacher/Le-Duy-Anh.jpg';
import { useState } from 'react';

const ListTeacher = [
  {
    id: 1,
    img: Teacher1,
    name: 'Nguyễn Thị A',
    position: 'Giáo viên',
    listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
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
    <BaseWrapperWithColor className="flex flex-col p-8">
      <div className="w-[60%] mx-auto">
        <h2 className="text-2xl font-bold mb-4">Đội ngũ giáo viên</h2>
        <p className="mb-8">
          Là những giáo viên luôn tận tâm với công việc, được đào tạo chuyên môn bài bản và đạt chuẩn theo chương trình giảng dạy
        </p>
        <div className="list-img-teacher flex justify-between mb-8 w-full">
          {ListTeacher.map((teacher, index) => (
            <div
              key={index}
              className={`text-center cursor-pointer border-[1px] flex justify-center items-center flex-col w-[23%]  py-3 ${
                selectedTeacher.id === teacher.id ? 'border-[#0065FF]' : 'border-[#c7cdda]'
              } rounded-lg`}
              onClick={() => setSelectedTeacher(teacher)}
            >
              <img src={teacher.img} alt={teacher.name} className="w-12 h-12 rounded-full mb-2" />
              <p className="text-[13px] font-semibold">{teacher.name}</p>
            </div>
          ))}
        </div>
        <div className="teacher-info grid grid-cols-[40%,65%] ">
          <div className="border-[1px] border-[#c7cdda] rounded-2xl max-h-[240px] bg-white flex justify-center">
            <img src={selectedTeacher.img} alt={selectedTeacher.name} className="w-[50%] h-full  mb-4" />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold mb-1 x">{selectedTeacher.name}</h3>
            <p className="mb-1 text-[13px]">{selectedTeacher.position}</p>
            <ul className="">
              {selectedTeacher.listCertificate.map((certificate, index) => (
                <li key={index}>{certificate}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BaseWrapperWithColor>
  );
};

export default Teacher;
