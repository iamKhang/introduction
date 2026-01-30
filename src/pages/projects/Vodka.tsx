import { MessageSquare, Users, Search, Bot, Palette, Lock, Globe, Settings } from 'lucide-react';

export default function Vodka() {
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
          </div>
          
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 leading-none tracking-tighter">
              VODKA
            </h1>
            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-normal mb-6 sm:mb-8 leading-relaxed uppercase tracking-wide">
            Ứng dụng Nhắn tin Thời gian thực Hiện đại
          </p>
          
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 mb-6 sm:mb-8">
            Môn học: Công nghệ mới trong phát triển ứng dụng
          </p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">02/2025 - 05/2025</span>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span className="w-full sm:w-auto">4 tháng phát triển</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {[
              { name: 'Next.js', bg: 'bg-black', text: 'text-white', border: 'border-black' },
              { name: 'NestJS', bg: 'bg-[#E0234E]', text: 'text-white', border: 'border-[#E0234E]' },
              { name: 'React Native', bg: 'bg-[#61DAFB]', text: 'text-black', border: 'border-[#61DAFB]' },
              { name: 'PostgreSQL', bg: 'bg-[#336791]', text: 'text-white', border: 'border-[#336791]' },
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
                    <span>Lê Hoàng Khang - </span>
                    <a href="mailto:developer@iamhoangkhang.id.vn" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 ml-1 font-medium hover:underline transition-all duration-150">
                      developer@iamhoangkhang.id.vn
                    </a>
           
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
                    <span>Trần Đình Kiên</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    <span>Hồ Thị Như Tâm</span>
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
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Giao diện website nhắn tin thời gian thực</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NextJS</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Tâm, Cảnh</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/thanhcanhit/bond-hub-fe" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">2</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Backend</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">API server và logic nghiệp vụ </td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Khang, Cảnh</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/vodka-be" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>

                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">4</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Mobile</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Ứng dụng mobile nhắn tin thời gian thực</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">React Native</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Kiên, Khang</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/vodka-mobile" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
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
                Vodka là một ứng dụng nhắn tin thời gian thực hiện đại được xây dựng với Next.js, tương tự như Zalo, cho phép người dùng kết nối, trò chuyện và chia sẻ khoảnh khắc với bạn bè và gia đình.
              </p>
            </div>
          </section>

          {/* Tính năng */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">Tính năng</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Nhắn tin thời gian thực với WebSocket</strong> - Giao tiếp tức thì với công nghệ WebSocket
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Xác thực người dùng và quản lý hồ sơ</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Đăng nhập bằng mã QR</li>
                      <li>Đăng nhập bằng form truyền thống</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Tìm kiếm nâng cao</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Tìm kiếm bạn bè</li>
                      <li>Tìm kiếm tin nhắn</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Trợ lý AI</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Soạn email</li>
                      <li>Trả lời thông minh</li>
                      <li>Gợi ý nội dung</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Giao diện hiện đại</strong> - Sử dụng Shadcn UI và Tailwind CSS
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Bảo mật</strong> - Giao tiếp an toàn với xác thực JWT
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Server-side rendering</strong> - Tối ưu hiệu suất với SSR
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Quản lý cài đặt toàn diện</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Cập nhật email</li>
                      <li>Thay đổi số điện thoại</li>
                      <li>Quản lý mật khẩu</li>
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
              <p><strong>Framework:</strong> Next.js 14 (App Router)</p>
              <p><strong>Ngôn ngữ:</strong> TypeScript</p>
              <p><strong>UI Components:</strong> Shadcn UI, Radix UI</p>
              <p><strong>Styling:</strong> Tailwind CSS</p>
              <p><strong>Quản lý trạng thái:</strong> Zustand</p>
              <p><strong>Giao tiếp thời gian thực:</strong> Socket.io (WebSocket)</p>
              <p><strong>Xác thực:</strong> JWT</p>
              <p><strong>Xử lý form:</strong> React Hook Form</p>
              <p><strong>Tích hợp API:</strong> Server Actions</p>
              <p><strong>Cơ sở dữ liệu:</strong> PostgreSQL</p>
            </div>
          </section>

          {/* Screenshots */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">Giao diện ứng dụng</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Trang chủ</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Trang chào mừng giới thiệu các tính năng và lợi ích của Vodka
                </p>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}projects/vodka/landing.jpg`}
                    alt="Trang chủ"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Xác thực</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Đăng nhập bằng mã QR để truy cập nhanh
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/vodka/qr-login.jpg`}
                        alt="Đăng nhập QR"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      Form đăng nhập truyền thống với email/mật khẩu
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={`${basePath}projects/vodka/form-login.jpg`}
                        alt="Đăng nhập form"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Giao diện chat</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Giao diện nhắn tin thời gian thực với lịch sử tin nhắn và gợi ý AI
                </p>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}projects/vodka/chat.jpg`}
                    alt="Giao diện chat"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Danh sách bạn bè & Tìm kiếm</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Quản lý kết nối và tìm kiếm bạn bè mới
                </p>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}projects/vodka/friend.jpg`}
                    alt="Danh sách bạn bè"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Trợ lý AI</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Tính năng AI để soạn email và trả lời thông minh
                </p>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}projects/vodka/ai-assistant.jpg`}
                    alt="Trợ lý AI"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Cài đặt</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Bảng cài đặt toàn diện để quản lý tài khoản
                </p>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}projects/vodka/settings.jpg`}
                    alt="Cài đặt"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Hồ sơ</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Quản lý hồ sơ người dùng và cài đặt
                </p>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}projects/vodka/profile.jpg`}
                    alt="Hồ sơ"
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
