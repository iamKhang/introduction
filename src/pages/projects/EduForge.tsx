import { BookOpen, Award, Users, Bot, CreditCard, Route, FileText } from 'lucide-react';

export default function EduForge() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <header className="mb-8 sm:mb-10 lg:mb-12">
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider rounded-md border border-blue-200 dark:border-blue-800">
              Đồ án môn học
            </span>
            <span className="ml-2 inline-flex items-center px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider rounded-md border border-blue-200 dark:border-blue-800">
              Microservices
            </span>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 leading-none tracking-tighter">
              EDU FORGE
            </h1>
            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-normal mb-6 sm:mb-8 leading-relaxed uppercase tracking-wide">
            Nền Tảng Học Tập Trực Tuyến Thông Minh
          </p>
          
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 mb-6 sm:mb-8">
            Môn học: Kiến trúc và Thiết kế Phần mềm
          </p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2025</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {[
              { name: 'Microservices', bg: 'bg-[#3572A5]', text: 'text-white', border: 'border-[#3572A5]' },
              { name: 'Next.js 14', bg: 'bg-black', text: 'text-white', border: 'border-black' },
              // 
              { name: 'NestJS', bg: 'bg-[#E0234E]', text: 'text-white', border: 'border-[#E0234E]' },
              { name: 'Spring Boot', bg: 'bg-[#6DB33F]', text: 'text-white', border: 'border-[#6DB33F]' },
              { name: 'Django', bg: 'bg-[#092E20]', text: 'text-white', border: 'border-[#092E20]' },
              { name: 'PostgreSQL', bg: 'bg-[#336791]', text: 'text-white', border: 'border-[#336791]' },
              { name: 'MongoDB', bg: 'bg-[#47A248]', text: 'text-white', border: 'border-[#47A248]' },
              { name: 'Redis', bg: 'bg-[#DC382D]', text: 'text-white', border: 'border-[#DC382D]' },
              { name: 'Docker', bg: 'bg-[#2496ED]', text: 'text-white', border: 'border-[#2496ED]' },
              { name: 'AI', bg: 'bg-[#FF6B6B]', text: 'text-white', border: 'border-[#FF6B6B]' },
              { name: 'Kong Gateway', bg: 'bg-[#003459]', text: 'text-white', border: 'border-[#003459]' },
              { name: 'WebSocket', bg: 'bg-[#010101]', text: 'text-white', border: 'border-[#010101]' },
            ].map((tag) => (
              <span
                key={tag.name}
                className={`px-3 py-1.5 ${tag.bg} ${tag.text} text-xs font-semibold rounded-md border ${tag.border} hover:opacity-90 transition-opacity duration-150`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        </header>

        {/* Content */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">

        <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">Thông tin chung</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 sm:space-y-6 leading-relaxed text-sm sm:text-base">
              <div>
                <p className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Thành viên thực hiện:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    <span>Trần Đình Kiên</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    <span>Nguyễn Thanh Cảnh</span>
                    <a href="mailto:thanhcanh.dev@gmail.com" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 ml-1 font-medium hover:underline transition-all duration-150">
                      - thanhcanh.dev@gmail.com
                    </a>
                    <span className="ml-2 text-red-600 dark:text-red-400 text-xs font-medium">(Nhóm trưởng)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    <span>Lê Hoàng Khang</span>
                    <a href="mailto:developer@iamhoangkhang.id.vn" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 ml-1 font-medium hover:underline transition-all duration-150">
                      - developer@iamhoangkhang.id.vn
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    <span>Vũ Hải Nam</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    <span>Nguyễn Đức Thịnh</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Mã nguồn dự án:</p>
                <div className="overflow-x-auto -mx-4 sm:mx-0 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gradient-to-r from-blue-700 to-blue-800">
                      <tr>
                        <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">STT</th>
                        <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Tên</th>
                        <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Chức năng</th>
                        <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Công nghệ</th>
                        <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Người thực hiện</th>
                        <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Link</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">1</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Frontend</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Giao diện nền tảng học tập trực tuyến</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NextJS</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Tất cả thành viên</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/edu-forge-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">2</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Assessment Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Quản lý bài kiểm tra, bài tập</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS, PostgreSQL</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Khang</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/edu-forge-assessment" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">3</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Course Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Quản lý khóa học</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS, PostgreSQL</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Kiên, Cảnh</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/kientrank3/edu-forge-course" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">4</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Discussion Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Quản lý bình luận, tương tác trong nội dung khóa học</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS, PostgreSQL</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Cảnh</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/thanhcanhit/edu-forge-discussion" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">5</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Enrollment Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Quản lý đăng ký khóa học</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS, PostgreSQL</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Nam</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/vuhainam1506/edu-forge-enrollment" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">6</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Notification Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Quản lý thông báo, thông báo cho người dùng</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS, PostgreSQL</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Cảnh</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/thanhcanhit/edu-forge-notification" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">7</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Payment Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Quản lý thanh toán</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS, PostgreSQL</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Nam</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/vuhainam1506/edu-forge-payment" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>

                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">8</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Post Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Quản lý bài viết, bình luận</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Spring Boot, MongoDB</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Khang</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/edu-forge-post" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">2</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Recommendation Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Mô hình AI gợi ý bài viết dựa trên lịch sử xem và thích</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Django</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Khang</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/edu-forge-recommender" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">9</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">User Service</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Quản lý người dùng, phân quyền</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS, PostgreSQL</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Thịnh</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/thinhdeeptry/User_Service-EduForge" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>


                    </tbody>
                  </table>
                </div>
              </div>
              
            </div>
          </section>

          {/* Giới thiệu */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">Giới thiệu</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                EduForge là một nền tảng học tập trực tuyến tiên tiến, được thiết kế và phát triển như một dự án môn học Kiến trúc và Thiết kế Phần mềm năm 2025. Với mục tiêu mang lại trải nghiệm học tập hiện đại, cá nhân hóa và hiệu quả, EduForge tích hợp các công nghệ tiên tiến và kiến trúc microservices để cung cấp một hệ sinh thái học tập trực tuyến toàn diện, thân thiện với người dùng và thông minh.
              </p>
              <p>
                Dự án không chỉ tập trung vào việc cung cấp nội dung học tập chất lượng cao mà còn chú trọng đến trải nghiệm người dùng, tương tác cộng đồng, và tích hợp trí tuệ nhân tạo (AI) để hỗ trợ học viên đạt được kết quả học tập tối ưu. EduForge hướng tới việc trở thành một nền tảng học tập trực tuyến toàn diện, phù hợp cho cả học viên, giảng viên và quản trị viên.
              </p>
            </div>
          </section>

          {/* Kiến trúc hệ thống */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">Kiến trúc hệ thống</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                EduForge được xây dựng dựa trên kiến trúc microservices, sử dụng <strong>Next.js 14</strong> làm nền tảng chính cho frontend và tích hợp nhiều dịch vụ backend độc lập để đảm bảo tính mô-đun và khả năng mở rộng.
              </p>
              <div className="mt-6 rounded-xl overflow-hidden shadow-xl">
                <img
                  src={`${basePath}projects/eduforge/kientruc.jpg`}
                  alt="Sơ đồ kiến trúc hệ thống"
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* Tính năng */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">Tính năng</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Quản lý khóa học</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Tạo và quản lý khóa học</li>
                      <li>Phân loại khóa học theo danh mục</li>
                      <li>Chi tiết khóa học với nội dung đa phương tiện</li>
                      <li>Quản lý bài học</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Hệ thống đánh giá</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Bài kiểm tra và đánh giá đa dạng</li>
                      <li>Báo cáo kết quả học tập</li>
                      <li>Chứng chỉ hoàn thành khóa học</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Tương tác và cộng đồng</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Hệ thống bình luận và thảo luận</li>
                      <li>Chia sẻ tài liệu và kinh nghiệm</li>
                      <li>Tương tác giữa học viên và giảng viên</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Tích hợp AI</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Hỗ trợ học tập thông minh</li>
                      <li>Phân tích và đề xuất cá nhân hóa</li>
                      <li>Báo cáo AI chi tiết</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Quản lý người dùng</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Đăng ký và đăng nhập an toàn</li>
                      <li>Quản lý hồ sơ người dùng</li>
                      <li>Phân quyền và bảo mật</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Thanh toán và báo cáo</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Hệ thống thanh toán tích hợp</li>
                      <li>Báo cáo doanh thu và thống kê</li>
                      <li>Quản lý đăng ký khóa học</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Route className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Lộ trình học tập</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Hệ thống đề xuất lộ trình học tập</li>
                      <li>Tổng quan và chi tiết lộ trình</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Công nghệ sử dụng */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">Công nghệ sử dụng</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed text-sm sm:text-base">
              <p><strong>Frontend:</strong> Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn UI, Zustand</p>
              <p><strong>Backend:</strong> NestJS, Kong API Gateway, JWT Authentication</p>
              <p><strong>Cơ sở dữ liệu:</strong> PostgreSQL, Redis, Supabase</p>
              <p><strong>Kiến trúc:</strong> Microservices, Docker</p>
            </div>
          </section>

          {/* Screenshots */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">Giao diện ứng dụng</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Trang chủ</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Giao diện trang chủ EduForge với các khóa học nổi bật
                </p>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}projects/eduforge/home.jpg`}
                    alt="Trang chủ"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Quản lý khóa học</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Chi tiết khóa học với thông tin đầy đủ
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/coursedetail.jpg`}
                        alt="Chi tiết khóa học"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Phân loại khóa học theo danh mục
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/category.jpg`}
                        alt="Phân loại khóa học"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Thêm khóa học mới
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/addcourse.jpg`}
                        alt="Thêm khóa học"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Chỉnh sửa thông tin khóa học
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/editcourse.jpg`}
                        alt="Chỉnh sửa khóa học"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Giao diện học tập</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Giao diện học tập bài học
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/lessondetail.jpg`}
                        alt="Giao diện học tập"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Giao diện học tập nâng cao
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/lessondetail2.jpg`}
                        alt="Giao diện học tập nâng cao"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Hệ thống đánh giá</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Giao diện đánh giá
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/assessment.jpg`}
                        alt="Giao diện đánh giá"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Chi tiết bài đánh giá
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/assessment1.jpg`}
                        alt="Chi tiết bài đánh giá"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    Chứng chỉ hoàn thành khóa học
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={`${basePath}projects/eduforge/certui.jpg`}
                      alt="Chứng chỉ"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Tương tác và cộng đồng</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Hệ thống bình luận
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/comment.jpg`}
                        alt="Hệ thống bình luận"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Bài viết cộng đồng
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/post.jpg`}
                        alt="Bài viết cộng đồng"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Quản lý bài viết
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/post2.jpg`}
                        alt="Quản lý bài viết"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Tạo bài viết mới
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/post4.jpg`}
                        alt="Tạo bài viết"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Tích hợp AI</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Giao diện AI hỗ trợ học tập
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/ai.jpg`}
                        alt="AI hỗ trợ học tập"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Báo cáo phân tích AI
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/aireport.jpg`}
                        alt="Báo cáo AI"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Quản lý người dùng</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Đăng nhập hệ thống
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/login.jpg`}
                        alt="Đăng nhập"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Đăng ký tài khoản
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/signup.jpg`}
                        alt="Đăng ký"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Khôi phục mật khẩu
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/forgotpw.jpg`}
                        alt="Khôi phục mật khẩu"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Quản lý thông tin người dùng
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/user.jpg`}
                        alt="Quản lý người dùng"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Thanh toán và báo cáo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Giao diện thanh toán
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/paymentui.jpg`}
                        alt="Thanh toán"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Báo cáo doanh thu
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/report2.jpg`}
                        alt="Báo cáo doanh thu"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Lộ trình học tập</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Tổng quan lộ trình học tập
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/roadmapui.jpg`}
                        alt="Lộ trình học tập"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Chi tiết lộ trình học tập
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/eduforge/roadmapdetailui1.jpg`}
                        alt="Chi tiết lộ trình"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Nhóm phát triển</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Nhóm phát triển EduForge
                </p>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}projects/eduforge/group.jpg`}
                    alt="Nhóm phát triển"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
