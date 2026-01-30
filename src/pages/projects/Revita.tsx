export default function Revita() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <header className="mb-8 sm:mb-10 lg:mb-12">
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider rounded-md border border-blue-200 dark:border-blue-800">
              Đồ án tốt nghiệp
            </span>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 leading-none tracking-tighter">
              REVITA
            </h1>
            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-normal mb-6 sm:mb-8 leading-relaxed uppercase tracking-wide">
            Hệ thống Quản lý Khám bệnh Thông minh Tích hợp Gợi ý Chẩn đoán và Chatbot dành cho Phòng khám Đa khoa
          </p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">01/2024 - 06/2024</span>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span className="w-full sm:w-auto">6 tháng phát triển</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {[
              { name: 'Next.js', bg: 'bg-black', text: 'text-white', border: 'border-black' },
              { name: 'NestJS', bg: 'bg-[#E0234E]', text: 'text-white', border: 'border-[#E0234E]' },
              { name: 'React Native', bg: 'bg-[#61DAFB]', text: 'text-black', border: 'border-[#61DAFB]' },
              { name: 'Electron', bg: 'bg-[#47848F]', text: 'text-white', border: 'border-[#47848F]' },
              { name: 'FastAPI', bg: 'bg-[#009688]', text: 'text-white', border: 'border-[#009688]' },
              { name: 'PostgreSQL', bg: 'bg-[#336791]', text: 'text-white', border: 'border-[#336791]' },
              { name: 'MongoDB', bg: 'bg-[#47A248]', text: 'text-white', border: 'border-[#47A248]' },
              { name: 'Redis', bg: 'bg-[#DC382D]', text: 'text-white', border: 'border-[#DC382D]' },
              { name: 'Docker', bg: 'bg-[#2496ED]', text: 'text-white', border: 'border-[#2496ED]' },
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
          {/* Thông tin chung */}
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
                    <span>Trần Đình Kiên</span>
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
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Giao diện web quản trị và đặt lịch khám</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NextJS</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Khang, Kiên</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/revita-fe" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">2</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Backend</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">API server và logic nghiệp vụ</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">NestJS</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Khang, Kiên</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/revita-be" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">3</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Desktop</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Ứng dụng desktop cho màn hình chờ và kiosk</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Electron</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Khang</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/revita-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 bg-gray-50 dark:bg-gray-900">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">4</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Mobile</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Ứng dụng di động cho bệnh nhân và bác sĩ</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">React Native</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Kiên</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/kientrank3/revita-mobile" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150">
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">5</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Sympdiag</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">Hệ thống gợi ý chẩn đoán dựa trên triệu chứng</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">FastAPI, Skitlearn</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Khang</td>
                        <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <a href="https://github.com/iamKhang/revita-sympdiag" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-all duration-150">
                            Xem trên GitHub
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://www.youtube.com/watch?v=QWjbZYMV6Os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Xem Demo</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* I. Giới thiệu */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">I. Giới thiệu</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                Quy trình quản lý khám bệnh tại các phòng khám đa khoa ở Việt Nam bao gồm nhiều giai đoạn tuần tự: lấy số thứ tự, hoàn tất thủ tục hành chính để đăng ký và khám bệnh, chỉ định các dịch vụ chẩn đoán và thủ thuật cần thiết, thanh toán chi phí, và cuối cùng là bác sĩ chẩn đoán tình trạng bệnh, kê đơn thuốc cho bệnh nhân. Quy trình này đòi hỏi sự phối hợp chặt chẽ giữa nhiều bên liên quan, bao gồm nhân viên hành chính, bác sĩ, bệnh nhân và thu ngân. Với dân số già hóa nhanh chóng và nhu cầu y tế ngày càng gia tăng, việc duy trì hiệu quả và công bằng trong quản lý trở nên cực kỳ thách thức, đặc biệt khi các bước thủ công dẫn đến ùn tắc và sai sót.
              </p>
              <p>
                Để giải quyết các vấn đề này, chúng tôi đã phát triển và triển khai <strong>Revita: Hệ thống Quản lý Khám bệnh Thông minh Tích hợp Gợi ý Chẩn đoán và Chatbot dành cho Phòng khám Đa khoa</strong> -- một giải pháp công nghệ hiện đại nhằm tối ưu hóa và tự động hóa toàn bộ các giai đoạn trong quy trình khám bệnh. Hệ thống không chỉ giảm tải công việc hành chính mà còn nâng cao trải nghiệm tổng thể cho cả bệnh nhân và bác sĩ trong suốt hành trình chăm sóc sức khỏe.
              </p>
              <p>
                Revita được xây dựng trên các nền tảng web, di động và máy tính để bàn, sử dụng các công nghệ tiên tiến như Next.js, Nest.js, React Native và Electron. Điều này đảm bảo tính linh hoạt và khả năng truy cập, cho phép người dùng tương tác mượt mà mọi lúc, mọi nơi -- từ đặt lịch khám trực tuyến đến hiển thị số thứ tự theo thời gian thực trên màn hình kiosk. Mục tiêu chính là nâng cao hiệu quả quản lý, cung cấp công cụ hỗ trợ tự động và tạo ra môi trường hiện đại, thân thiện với bệnh nhân cũng như nhân viên y tế.
              </p>
              <p>
                Một tính năng nổi bật là hệ thống gợi ý chẩn đoán dựa trên ghi chú y khoa, công cụ thông minh được thiết kế chuyên biệt để hỗ trợ bác sĩ phân tích triệu chứng và đề xuất các tình trạng bệnh phù hợp. Hệ thống sử dụng xử lý ngôn ngữ tự nhiên (NLP) để trích xuất thông tin chính từ văn bản lâm sàng, kết hợp với thuật toán gợi ý dựa trên nội dung nhằm đưa ra các đề xuất chính xác và nhanh chóng -- từ đó nâng cao độ tin cậy trong chẩn đoán.
              </p>
            </div>
          </section>

          {/* II. Kiến trúc phần mềm */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">II. Kiến trúc phần mềm</h2>
            <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden flex justify-center">
              <img
                src={`${basePath}projects/revita/Layer.png`}
                alt="Sơ đồ kiến trúc của phần mềm"
                className="w-full sm:w-3/4 lg:w-1/2"
              />
            </div>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                Hệ thống Revita được thiết kế dựa trên kiến trúc phân tầng (layered architecture), một mô hình kiến trúc phần mềm phổ biến giúp tổ chức hệ thống thành các tầng độc lập với trách nhiệm rõ ràng. Kiến trúc này đảm bảo tính mô đun hóa, khả năng bảo trì và mở rộng, đồng thời tách biệt các mối quan tâm giữa giao diện người dùng, logic nghiệp vụ và dữ liệu.
              </p>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">Tầng giao diện người dùng (Client Layer)</h3>
                <p className="mb-2">Bao gồm ba ứng dụng độc lập về nền tảng nhưng thống nhất về trải nghiệm người dùng:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ứng dụng web được xây dựng trên Next.js với kiến trúc App Router hiện đại</li>
                  <li>Ứng dụng di động được phát triển bằng React Native nhằm tối ưu hiệu năng trên cả hai hệ điều hành chính</li>
                  <li>Ứng dụng desktop được đóng gói bằng Electron để đáp ứng nhu cầu xử lý tác vụ nặng tại các phòng khám</li>
                </ul>
                <p className="mt-2">Các ứng dụng này chỉ chịu trách nhiệm hiển thị dữ liệu và thu thập tương tác người dùng, không chứa bất kỳ logic nghiệp vụ nào.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tầng trình diễn (Presentation Layer)</h3>
                <p>
                  Được thực hiện bởi Nginx đóng vai trò cổng giao tiếp duy nhất với thế giới bên ngoài. Nginx đảm nhiệm các chức năng: chấm dứt kết nối bảo mật, định tuyến yêu cầu theo kênh người dùng, cân bằng tải, giới hạn tần suất truy cập, và chuyển tiếp giao thức WebSocket mà không làm gián đoạn luồng dữ liệu thời gian thực.
                </p>
                <p className="mt-2">
                  Trong quá trình triển khai thì Nginx của hệ thống được Coolify tích hợp và quản lý tự động.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tầng ứng dụng (Application Layer)</h3>
                <p>
                  Bao gồm các instance NestJS được tổ chức theo mô hình Backend-for-Frontend. Mỗi instance phục vụ riêng một kênh người dùng thông qua tập hợp các Controller chuyên biệt, thực hiện việc: tiếp nhận yêu cầu, xác thực phiên làm việc, xác thực dữ liệu đầu vào, điều phối luồng xử lý xuống các tầng bên dưới.
                </p>
                <p className="mt-2">
                  Việc tách biệt này cho phép tối ưu hóa cấu trúc phản hồi theo nhu cầu riêng của từng nền tảng mà không làm phức tạp hóa giao diện lập trình ứng dụng. Bên cạnh đó tầng này còn chứa hệ thống gợi ý chẩn đoán được xây dựng bằng FastAPI.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tầng dịch vụ (Service Layer)</h3>
                <p className="mb-2">
                  Tập trung toàn bộ quy tắc nghiệp vụ cốt lõi của hệ thống quản lý bệnh viện. Các Service tại tầng này được triển khai dưới dạng các đơn vị xử lý thuần túy, không phụ thuộc vào cơ sở dữ liệu hay giao thức truyền tải. Tại đây diễn ra các quyết định nghiệp vụ quan trọng như:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Kiểm tra ràng buộc lịch khám</li>
                  <li>Tính toán độ ưu tiên khi phân phối bệnh nhân vào các quầy thủ tục, các phòng khám/buồng khám phù hợp</li>
                  <li>Xử lý thanh toán đa phương thức (tiền mặt/chuyển khoản)</li>
                  <li>Mã hóa/giải mã thông tin bệnh án khi lưu trữ/đọc ra</li>
                </ul>
                <p className="mt-2">Đảm bảo tính nhất quán và khả năng kiểm thử độc lập.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tầng truy cập dữ liệu (Data Access Layer)</h3>
                <p>
                  Được xây dựng trên Prisma Client kết hợp với Repository Pattern. Tầng này đóng vai trò trung gian duy nhất giữa logic nghiệp vụ và các hệ cơ sở dữ liệu, cung cấp giao diện thống nhất và an toàn kiểu dữ liệu cho mọi thao tác đọc ghi. Nhờ cơ chế sinh mã tự động, mọi thay đổi trong mô hình dữ liệu đều được phản ánh tức thì trên toàn hệ thống mà không yêu cầu chỉnh sửa thủ công.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tầng lưu trữ (Persistence Layer)</h3>
                <p className="mb-2">Sử dụng đồng thời ba hệ quản trị cơ sở dữ liệu phù hợp với đặc thù dữ liệu:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>PostgreSQL</strong>: Đảm bảo tính toàn vẹn và nhất quán cho các thực thể có quan hệ phức tạp phù hợp cho các hệ thống lưu trữ nhiều dữ liệu phức tạp và cần mối quan hệ chặt chẽ đặt biệt trong lĩnh vực y tế</li>
                  <li><strong>MongoDB</strong>: Phục vụ lưu trữ tài liệu phi cấu trúc ở đây là dữ liệu về thuốc được lấy về từ OpenFDA, vì lượng dữ liệu về dược này rất lớn, có cấu trúc đa dạng nên được lưu trữ trong MongoDB để giảm thời gian backup trên cơ sở dữ liệu chính cũng như tận dụng MongoDB để tối ưu hóa cơ chế tìm kiếm thuốc</li>
                  <li><strong>Redis</strong>: Được sử dụng làm bộ nhớ đệm và sử dụng Redis Stream (đóng vai trò như các message queue) để xử lý các yêu cầu đồng thời với độ trễ thấp, nhận và phát các sự kiện khi người dùng bốc số vào các quầy thủ tục/phòng khám</li>
                </ul>
              </div>
            </div>
          </section>

          {/* III. Sơ đồ triển khai hệ thống */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">III. Sơ đồ triển khai hệ thống</h2>
            <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden flex justify-center">
              <img
                src={`${basePath}projects/revita/Architecture.png`}
                alt="Sơ đồ triển khai hệ thống"
                className="w-full sm:w-3/4 lg:w-1/2"
              />
            </div>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                Hệ thống được triển khai theo mô hình CI/CD tự động với sự hỗ trợ của Coolify và Docker trên nền tảng DigitalOcean, bám sát các thực hành DevOps hiện đại. Khi lập trình viên đẩy (push) mã nguồn lên GitHub, Coolify nhận webhook và tự động pull phiên bản mới nhất, build Docker image, sau đó triển khai lên các application server. Nginx được tích hợp trực tiếp trong Coolify để quản lý định tuyến HTTPS và WebSocket, đảm bảo kết nối an toàn và real-time giữa client (Web, Mobile, Desktop) và server.
              </p>
              <p>
                Cơ sở dữ liệu bao gồm PostgreSQL (dữ liệu cấu trúc), MongoDB (dữ liệu phi cấu trúc) và Redis (cache, session, stream) được triển khai trực tiếp trên server. Redis Stream đóng vai trò hàng đợi sự kiện (event queue), hỗ trợ xử lý bất đồng bộ các tác vụ như thông báo, cập nhật lịch hẹn, và đồng bộ dữ liệu real-time qua WebSocket.
              </p>
              <p>
                Hệ thống tích hợp nhiều dịch vụ bên thứ ba:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Gemini-2.5-Flash</strong> cung cấp gợi ý AI</li>
                <li><strong>Resend</strong> gửi email thông báo</li>
                <li><strong>Supabase</strong> lưu trữ ảnh, tài liệu</li>
                <li><strong>AWS SNS</strong> gửi mã xác thực OTP qua SMS</li>
                <li><strong>PayOS</strong> xử lý thanh toán trực tuyến</li>
                <li><strong>TinyMCE</strong> hỗ trợ soạn thảo văn bản phong phú</li>
              </ul>
              <p>
                Riêng hệ thống gợi ý chẩn đoán được huấn luyện bằng Python với thư viện Scikit-learn, triển khai dưới dạng microservice sử dụng FastAPI. Khi bác sĩ yêu cầu chẩn đoán, NestJS (Back-End) chuẩn hóa dữ liệu đầu vào, sau đó gọi HTTPS đến FastAPI để nhận danh sách các chẩn đoán gợi ý, đảm bảo tính chính xác và tốc độ phản hồi.
              </p>
            </div>
          </section>

          {/* IV. Công nghệ sử dụng trong hệ thống */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">IV. Công nghệ sử dụng trong hệ thống</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed text-sm sm:text-base">
              <p><strong>NextJS</strong> được sử dụng để xây dựng giao diện web quản trị và đặt lịch khám trực tuyến 24/7, tận dụng Server-Side Rendering (SSR) và Static Site Generation (SSG) nhằm tối ưu tốc độ tải trang, cải thiện SEO và đảm bảo trải nghiệm người dùng mượt mà trên mọi thiết bị.</p>
              <p><strong>NestJS</strong> xây dựng hệ thống backend trung tâm của Revita, quản lý toàn bộ logic nghiệp vụ như lịch khám, hồ sơ bệnh nhân, ưu tiên theo quy định pháp luật và thanh toán chuyển khoản.</p>
              <p><strong>React Native</strong> phát triển ứng dụng di động cho bệnh nhân và bác sĩ, cho phép đặt lịch, nhận thông báo, tra cứu hồ sơ trên cả iOS và Android từ một mã nguồn duy nhất.</p>
              <p><strong>Electron</strong> xây dựng ứng dụng desktop cho các màn hình chờ và kiosk tự phục vụ, hiển thị số thứ tự theo thời gian thực.</p>
              <p><strong>Docker</strong> chuẩn hóa môi trường triển khai dịch vụ, bảo đảm tính nhất quán giữa giai đoạn phát triển và vận hành.</p>
              <p><strong>FastAPI</strong> triển khai microservices AI, xử lý gợi ý chẩn đoán từ ghi chú y khoa và chatbot hỗ trợ bệnh nhân.</p>
              <p><strong>Gemini 2.5 Flash</strong> tích hợp làm lõi AI thông minh cho chatbot tư vấn 24/7 hỗ trợ bệnh nhân khi đến khám tại phòng khám.</p>
              <p><strong>PostgreSQL</strong> được sử dụng làm cơ sở dữ liệu chính để quản lý toàn bộ hệ thống nghiệp vụ lớn của Revita.</p>
              <p><strong>Redis</strong> được triển khai như bộ nhớ đệm (cache) hiệu năng cao và sử dụng Redis Streams để lưu trữ luồng sự kiện theo thời gian thực.</p>
              <p><strong>MongoDB</strong> được dùng để lưu trữ và quản lý dữ liệu thuốc với khối lượng lớn, cấu trúc linh hoạt.</p>
              <p><strong>Supabase</strong> cung cấp nền tảng backend-as-a-service cho lưu trữ các tập tin đa phương tiện trong hệ thống.</p>
              <p><strong>Nginx</strong> được triển khai làm reverse proxy và SSL termination, định tuyến toàn bộ request từ bên ngoài đến Next.js, NestJS và FastAPI, đồng thời tự động cấp và gia hạn chứng chỉ Let's Encrypt.</p>
              <p><strong>Swagger</strong> (OpenAPI) được tích hợp vào backend NestJS để tự động sinh tài liệu API tương tác, hỗ trợ kiểm thử endpoint trực tiếp trên trình duyệt và giúp frontend/mobile tích hợp nhanh chóng.</p>
            </div>
          </section>

          {/* V. Quy trình khám chữa bệnh tại phòng khám */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">V. Quy trình khám chữa bệnh tại phòng khám</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <p><strong>Bước 1</strong>: Bệnh nhân có thể đặt lịch khám trước sau đó đến phòng khám, nhập thông tin khám bệnh nếu đăng ký khám lần đầu, nếu đã từng đến khám tại bệnh viện thì bệnh nhân nhập mã hồ sơ khám/ số điện thoại hồ sơ/mã đặt lịch (nếu có) sau đó hệ thống sẽ phân phối bệnh nhân vào các quầy làm thủ tục khám với cơ chế xoay vòng có ưu tiên.</p>
              <p><strong>Bước 2</strong>: Nhân viên quầy thủ tục nhấn gọi bệnh nhân đến quầy làm thủ tục, bệnh nhân quan sát thông tin của mình trên màn hình chờ để biết khi nào chuẩn bị đến làm thủ tục.</p>
              <p><strong>Bước 3</strong>: Bệnh nhân sau khi làm thủ tục khám thì cầm theo phiếu chỉ định các dịch vụ đến quầy thu ngân nộp để thanh toán các phí dịch vụ theo yêu cầu. Nhân viên thu nhân nhận phiếu chỉ định và bắt đầu tạo hóa đơn thanh toán với các dịch vụ bệnh nhân muốn thực hiện. Có hai phương thức thanh toán là bằng tiền mặt (nhân viên thu ngân xác nhận thanh toán thành công khi nhận tiền) và thanh toán qua hình thức chuyển khoản nhân viên tạo mã chuyển khoản tương ứng với hóa đơn và đưa mã chuyển khoản cho bệnh nhân, bệnh nhân thực hiện chuyển khoản (thông qua tài khoản ngân hàng hoặc tài khoản ví điện tử) khi chuyển khoản thành công thì hệ thống tự động cập nhật thông tin và xuất hóa đơn tự động.</p>
              <p><strong>Bước 4</strong>: Nếu bệnh nhân đặt lịch trước đó hoặc là yêu cầu chọn bác sĩ khi ở quầy thủ tục thì khi thanh toán thành công bệnh nhân sẽ được thêm vào hàng chờ của bác sĩ đó. Nếu không thì bệnh nhân sẽ đến trước khu vực khám và checkin tại các máy kiosk hoặc nhờ nhân viên ở tại quầy thủ tục (khu vực khám bệnh) để xác nhận vào khám, khi xác nhận xong thì hệ thống đưa bệnh nhân vào hàng chờ.</p>
              <p><strong>Bước 5</strong>: Bác sĩ nhấn gọi bệnh nhân vào phòng khám theo thứ tự hàng chờ, sau khi vào khám thì bác sĩ tiến hành chẩn đoán, tạo bệnh án, đơn thuốc cho bệnh nhân. Nếu bác sĩ mong muốn bệnh nhân thực hiện thêm các dịch vụ cho mục đích khám chữa bệnh thì bác sĩ sẽ tạo phiếu chỉ định cho bệnh nhân thực hiện các dịch vụ đó, sau đó quay về bước 3.</p>
              <p><strong>Bước 6</strong>: Khi đã hoàn thành các dịch vụ theo yêu cầu của bác sĩ thì bệnh nhân tiến hành quay lại khu vực khám để checkin chờ kết quả.</p>
            </div>
          </section>

          {/* VI. Một số chức năng chính */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">VI. Một số chức năng chính</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 ml-4">
              <li>Đề xuất/Xác nhận lịch làm việc.</li>
              <li>Đặt lịch hẹn khám bệnh</li>
              <li>Lấy số thứ tự để đến quầy thủ tục</li>
              <li>Cập nhật bệnh án, kết quả sau khi khám/thực hiện các dịch vụ.</li>
              <li>Quản lý phiếu chỉ định, bệnh án, đơn thuốc</li>
              <li>Hệ thống chatbot hỗ trợ bệnh nhân (Không hỗ trợ chẩn đoán, đơn thuốc, ... các yếu tố có thể ảnh hưởng đến sức khỏe của bệnh nhân.</li>
              <li>Hệ thống gợi ý các chẩn đoán dựa trên bệnh án của bệnh nhân (chỉ cho các bác sĩ trong hệ thống sử dụng)</li>
            </ul>
          </section>

          {/* VII. Sơ đồ lớp */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">VII. Sơ đồ lớp</h2>
            <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-xl">
              <img
                src={`${basePath}projects/revita/Class.png`}
                alt="Sơ đồ lớp"
                className="w-full"
              />
            </div>
          </section>

          {/* VIII. Hiện thực */}
          <section className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-700 dark:border-blue-500">VIII. Hiện thực</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Màn hình tiếp nhận bệnh nhân
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Màn hình nhân viên quan sát thông tin bệnh nhân khi bệnh nhân lấy số đến quầy thủ tục.
                </p>
                <img
                  src={`${basePath}projects/revita/1.png`}
                  alt="Màn hình tiếp nhận bệnh nhân"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Màn hình diễn đàn bài viết của phòng khám
                </h3>
                <img
                  src={`${basePath}projects/revita/2.png`}
                  alt="Màn hình diễn đàn bài viết của phòng khám"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Màn hình quản lý thông tin về cơ sở của phòng khám
                </h3>
                <img
                  src={`${basePath}projects/revita/3.png`}
                  alt="Màn hình quản lý thông tin về cơ sở của phòng khám"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Màn hình quản lý các dịch vụ tại phòng khám
                </h3>
                <img
                  src={`${basePath}projects/revita/4.png`}
                  alt="Màn hình quản lý các dịch vụ tại phòng khám"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Quản lý lịch khám chữa bệnh của bác sĩ
                </h3>
                <img
                  src={`${basePath}projects/revita/6.png`}
                  alt="Quản lý lịch khám chữa bệnh của bác sĩ"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  Tạo phiếu chỉ định cho bệnh nhân
                </h3>
                <img
                  src={`${basePath}projects/revita/7.png`}
                  alt="Tạo phiếu chỉ định cho bệnh nhân"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Xem thông tin bệnh án
                </h3>
                <img
                  src={`${basePath}projects/revita/8.png`}
                  alt="Xem thông tin bệnh án"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Xem thông tin bệnh nhân
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Thông tin hành chính, các bệnh án, lịch sử thực hiện khám/chữa bệnh tại phòng khám.
                </p>
                <img
                  src={`${basePath}projects/revita/9.png`}
                  alt="Xem thông tin bệnh nhân"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Giao diện thanh toán dịch vụ
                </h3>
                <img
                  src={`${basePath}projects/revita/10.png`}
                  alt="Giao diện thanh toán dịch vụ"
                  className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
