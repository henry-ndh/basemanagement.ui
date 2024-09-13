import ImgStudent1 from '@assets/student/student1.jpg';
import ImgStudent2 from '@assets/student/student2.jpg';
import ImgStudent3 from '@assets/student/student3.jpg';
import ImgStudent4 from '@assets/student/student4.jpg';
import ImgStudent5 from '@assets/student/student5.jpg';
import ImgStudent6 from '@assets/student/student6.jpg';

import Teacher1 from '@/assets/teacher/Le-Duy-Anh.jpg';

export const MenuHeader = [
  {
    id: 1,
    name: 'Trang chủ',
    link: '/',
  },
  {
    id: 2,
    name: 'Khóa học',
    link: '/services',
  },
  {
    id: 3,
    name: 'Lịch khai giảng',
    link: '/resume',
  },
  {
    id: 4,
    name: 'Hệ thống đào tạo',
    link: '/resume',
  },
];
export const RoadMapData = [
  {
    id: 1,
    title: 'Chặng 1',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Chặng 2',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Chặng 3',
    level: 'Advanced',
  },
  {
    id: 4,
    title: 'Chặng 4',
    level: 'Expert',
  },
  {
    id: 5,
    title: 'Chặng 5',
    level: 'Master',
  },
];

export const RoadMapDetailData = [
  {
    id: 1,
    target_user: ['Người mới bắt đầu', 'Các em nhỏ'],
    time: '2 tháng',
    target_study: ['Học lý thuyết cơ bản', 'Học cách sử dụng công cụ', 'Học cách tạo ra sản phẩm đầu tiên'],
  },
  {
    id: 2,
    target_user: ['Người đã có chút kinh nghiệm'],
    time: '3 tháng',
    target_study: ['Nâng cao kỹ năng cơ bản', 'Học các kỹ thuật nâng cao', 'Thực hành dự án thực tế'],
  },
  {
    id: 3,
    target_user: ['Người đã có kinh nghiệm', 'Chuyên gia trong lĩnh vực liên quan'],
    time: '4 tháng',
    target_study: ['Tăng cường kỹ năng chuyên sâu', 'Làm việc với các dự án phức tạp', 'Tìm hiểu công nghệ mới'],
  },
  {
    id: 4,
    target_user: ['Chuyên gia muốn phát triển thêm', 'Người dẫn dắt dự án'],
    time: '5 tháng',
    target_study: ['Làm việc trên các dự án lớn', 'Tham gia vào các nhóm nghiên cứu', 'Dẫn dắt các dự án và đội nhóm'],
  },
  {
    id: 5,
    target_user: ['Nhà lãnh đạo', 'Người muốn chia sẻ kiến thức'],
    time: '6 tháng',
    target_study: ['Chia sẻ kiến thức với cộng đồng', 'Xây dựng danh tiếng trong ngành', 'Tham gia vào các hội thảo và sự kiện chuyên ngành'],
  },
];

export const listStudent = [
  {
    id: 1,
    name: 'Bé Nguyễn Thị Hải Yến',
    image: ImgStudent1,
    comment:
      'Con thích vũ trụ và phi hành gia, học ở Happy Kid con vừa được giao tiếp bằng tiếng Anh với mọi người vừa được chơi nhiều trò chơi rất vui.',
  },
  {
    id: 2,
    name: 'Bé Trần Đăng Khoa',
    image: ImgStudent2,
    comment:
      'Con rất yêu thích những câu chuyện phiêu lưu và khám phá. Ở Happy Kid, con học được nhiều điều mới mẻ và sáng tạo trong các trò chơi nhóm.',
  },
  {
    id: 3,
    name: 'Bé Phạm Gia Huy',
    image: ImgStudent3,
    comment: 'Con rất đam mê khoa học và công nghệ. Happy Kid giúp con mở rộng kiến thức và con thích thú với các bài học thực hành và thí nghiệm.',
  },
  {
    id: 4,
    name: 'Bé Lê Quỳnh Anh',
    image: ImgStudent4,
    comment:
      'Con yêu thích nghệ thuật và sáng tạo. Ở Happy Kid, con được tham gia nhiều hoạt động nghệ thuật thú vị và học cách thể hiện bản thân qua các dự án nhóm.',
  },
  {
    id: 5,
    name: 'Bé Vũ Hoàng Minh',
    image: ImgStudent5,
    comment:
      'Con rất thích thể thao và hoạt động ngoài trời. Happy Kid đã giúp con rèn luyện kỹ năng thể thao và làm việc nhóm trong các trò chơi thể thao hấp dẫn.',
  },
  {
    id: 6,
    name: 'Bé Đỗ Ngọc Lan',
    image: ImgStudent6,
    comment:
      'Con đam mê đọc sách và tìm hiểu văn học. Ở Happy Kid, con được khuyến khích đọc nhiều sách và tham gia các hoạt động liên quan đến văn học.',
  },
];

// export const ListTeacher = [
//   {
//     id: 1,
//     img: Teacher1,
//     name: 'Nguyễn Thị A',
//     position: 'Giáo viên',
//     listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ Mosteri', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
//   },
//   {
//     id: 2,
//     img: Teacher1,
//     name: 'Nguyễn Thị B',
//     position: 'Giáo viên',
//     listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
//   },
//   {
//     id: 3,
//     img: Teacher1,
//     name: 'Nguyễn Thị C',
//     position: 'Giáo viên',
//     listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
//   },
//   {
//     id: 4,
//     img: Teacher1,
//     name: 'Nguyễn Thị D',
//     position: 'Giáo viên',
//     listCertificate: ['Chứng chỉ giáo viên', 'Chứng chỉ giáo viên', 'Chứng chỉ giáo viên'],
//   },
// ];

export const ASK = [
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
export const ListTeacher = [
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
