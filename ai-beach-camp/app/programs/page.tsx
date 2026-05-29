'use client';

import { useState } from 'react';
import Link from 'next/link';

const programs = [
  {
    id: 'city-camp',
    title: 'City Camp',
    subtitle: 'AI Intensive · 2 Ngày',
    location: 'TPHCM & Hà Nội',
    description:
      'Dành cho người bận rộn muốn nắm bắt AI nhanh chóng. Học trực tiếp tại trung tâm thành phố, áp dụng ngay vào công việc.',
    features: [
      'Workshop thực hành 2 ngày cuối tuần',
      'Networking với cộng đồng AI Việt Nam',
      'Chứng nhận hoàn thành khóa học',
      'Hỗ trợ sau khóa học 30 ngày',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    iconBg: 'bg-[#FFF0E0] text-[#FF6B6B]',
    tagBg: 'bg-[#FFF5EB] text-[#E85D45] ring-[#FFD0B5]',
    btnClass: 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF5252] hover:to-[#FF7B3A] text-white',
    borderHover: 'hover:border-[#FFB89A] hover:shadow-[#FF8E53]/10',
    accentBar: 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    id: 'beach-camp',
    title: 'Beach Camp',
    subtitle: 'AI + Family Retreat · 4 Ngày',
    location: 'Resort Biển 5★',
    description:
      'Kết hợp nghỉ dưỡng gia đình với học AI. Buổi sáng học, buổi chiều tận hưởng biển xanh cát trắng cùng người thân.',
    features: [
      'Resort 5 sao ven biển',
      'Chương trình hoạt động cho gia đình',
      'Workshop AI buổi sáng, biển buổi chiều',
      'Kết nối sâu với giảng viên & học viên',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    iconBg: 'bg-[#E0F8F5] text-[#4ECDC4]',
    tagBg: 'bg-[#E8FAF7] text-[#2AB7A9] ring-[#A8E6DF]',
    btnClass: 'bg-gradient-to-r from-[#4ECDC4] to-[#44B09E] hover:from-[#3DBDB5] hover:to-[#389F8E] text-white',
    borderHover: 'hover:border-[#A8E6DF] hover:shadow-[#4ECDC4]/10',
    accentBar: 'bg-gradient-to-r from-[#4ECDC4] to-[#44B09E]',
    featured: true,
  },
  {
    id: 'webinar',
    title: 'Webinar',
    subtitle: 'AI Skillset · Online',
    location: 'Học mọi lúc, mọi nơi',
    description:
      'Chuỗi buổi học online chuyên sâu về từng skillset AI cụ thể. Linh hoạt thời gian, replay không giới hạn.',
    features: [
      'Buổi học live 90 phút mỗi tuần',
      'Replay không giới hạn',
      'Tài liệu & template sẵn dùng',
      'Cộng đồng hỗ trợ online',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    iconBg: 'bg-[#FFF5D6] text-[#F7C948]',
    tagBg: 'bg-[#FFF8E1] text-[#D4A520] ring-[#FFE082]',
    btnClass: 'bg-gradient-to-r from-[#FFD93D] to-[#F7C948] hover:from-[#FFC929] hover:to-[#E8B930] text-[#5D4E0E]',
    borderHover: 'hover:border-[#FFE082] hover:shadow-[#FFD93D]/10',
    accentBar: 'bg-gradient-to-r from-[#FFD93D] to-[#F7C948]',
  },
];

export default function ProgramsPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FFF8F0] flex flex-col antialiased">
      {/* Subtle warm grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#FF8E5308_1px,transparent_1px),linear-gradient(to_bottom,#FF8E5308_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 text-center pt-16 pb-12 px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 mb-8 text-sm text-[#B5956A] hover:text-[#FF6B6B] transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Trang chủ
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#FFE0C2] text-xs font-semibold text-[#D4763A] uppercase tracking-widest mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-pulse" />
          Đang nhận đăng ký 2026
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#2D2A26] text-balance">
          Chọn hành trình{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFD93D] bg-clip-text text-transparent">
              AI
            </span>
          </span>{' '}
          của bạn
        </h1>

        <p className="mt-5 text-lg md:text-xl text-[#8B7E6A] max-w-xl mx-auto text-balance leading-relaxed">
          Ba con đường — một đích đến. Dù bạn ở đâu, bận đến đâu, luôn có chương trình phù hợp.
        </p>
      </header>

      {/* Cards */}
      <main className="relative z-10 flex-1 flex items-start justify-center px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full">
          {programs.map((p) => {
            const isHovered = hovered === p.id;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden
                  border border-[#F0E0CC]
                  transition-all duration-300 cursor-pointer
                  shadow-sm
                  ${p.borderHover}
                  ${isHovered ? 'shadow-xl -translate-y-1' : ''}
                  ${p.featured ? 'lg:-mt-3' : ''}
                `}
              >
                {/* Top accent bar */}
                <div className={`h-1 ${p.accentBar}`} />

                <div className="p-8 md:p-9 flex flex-col min-h-[500px]">
                  {/* Featured badge */}
                  {p.featured && (
                    <div className="absolute top-5 right-6">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${p.tagBg} ring-1 px-3 py-1 rounded-full`}>
                        Phổ biến nhất
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${p.iconBg} mb-6`}>
                    {p.icon}
                  </div>

                  {/* Title & subtitle */}
                  <h2 className="text-2xl font-bold text-[#2D2A26]">{p.title}</h2>
                  <p className="text-sm font-medium text-[#B5956A] mt-1">{p.subtitle}</p>

                  {/* Location tag */}
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#8B7E6A]">
                    <svg className="w-4 h-4 text-[#C4A882]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                    </svg>
                    {p.location}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#F0E0CC] my-5" />

                  {/* Description */}
                  <p className="text-[#5C5347] leading-relaxed text-[15px]">{p.description}</p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#5C5347]">
                        <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#4ECDC4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`
                      mt-8 w-full py-3.5 rounded-xl font-semibold text-sm
                      transition-all duration-200
                      ${p.btnClass}
                      shadow-sm hover:shadow-md
                      active:scale-[0.98]
                    `}
                  >
                    Tìm hiểu thêm
                    <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-12 px-6">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/80 border border-[#F0E0CC] rounded-full px-6 py-3 shadow-sm">
          <p className="text-sm text-[#8B7E6A]">
            Không chắc chọn gì?
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-[#2D2A26] hover:text-[#FF6B6B] transition-colors"
          >
            Để chúng tôi tư vấn cho bạn &rarr;
          </a>
        </div>
      </footer>
    </div>
  );
}
