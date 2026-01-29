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
    startDate: '01/2024',
    endDate: '06/2024',
    tags: ['Next.js', 'NestJS', 'React Native', 'Electron', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    avatar: '/projects/revita/Layer.png',
  },
];
