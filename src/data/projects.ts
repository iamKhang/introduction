export interface Project {
  id: string;
  title: string;
  description: string;
  startDate: string; // format: "mm/yyyy"
  endDate: string; // format: "mm/yyyy"
  tags: string[]; // tech stack
  avatar?: string; // URL to project avatar/image
}

export const projects: Project[] = [
  {
    id: 'revita',
    title: 'Revita',
    description: 'Hệ thống Quản lý Khám bệnh Thông minh Tích hợp Gợi ý Chẩn đoán và Chatbot dành cho Phòng khám Đa khoa - Giải pháp công nghệ hiện đại nhằm tối ưu hóa và tự động hóa toàn bộ các giai đoạn trong quy trình khám bệnh.',
    startDate: '6/2025',
    endDate: '12/2025',
    tags: ['Next.js', 'NestJS', 'React Native', 'Electron', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    avatar: '/projects/revita/background.png',
  },
  {
    id: 'vodka',
    title: 'Vodka',
    description: 'Ứng dụng nhắn tin thời gian thực hiện đại được xây dựng với Next.js, tương tự như Zalo, cho phép người dùng kết nối, trò chuyện và chia sẻ khoảnh khắc với bạn bè và gia đình.',
    startDate: '02/2025',
    endDate: '05/2025',
    tags: ['Next.js', 'NestJS', 'React Native', 'PostgreSQL', 'WebSocket'],
    avatar: '/projects/vodka/background.png',
  },
  {
    id: 'eduforge',
    title: 'EduForge',
    description: 'Nền tảng học tập trực tuyến tiên tiến, được thiết kế và phát triển như một dự án môn học Kiến trúc và Thiết kế Phần mềm năm 2025. Với mục tiêu mang lại trải nghiệm học tập hiện đại, cá nhân hóa và hiệu quả.',
    startDate: '02/2025',
    endDate: '05/2025',
    tags: ['Next.js 14', 'NestJS', 'PostgreSQL', 'Redis', 'Kong Gateway'],
    avatar: '/projects/eduforge/background.png',
  },
];
