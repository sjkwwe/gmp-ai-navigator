# 🤖 AI Navigator

AI와 함께하는 똑똑한 네비게이션 서비스

## 🌟 주요 기능

- 🗺️ **Google Maps 통합**: 실시간 지도 및 경로 표시
- 💬 **AI 채팅**: 자연어로 길찾기 및 장소 문의
- 📱 **반응형 디자인**: 데스크톱과 모바일 최적화
- ⚡ **빠른 액션**: 지하철, 버스, 자차, 맛집 바로가기

## 🛠 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Maps**: Google Maps API
- **State Management**: React Hooks + Context

## 📁 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/         # 재사용 컴포넌트
│   ├── layout/         # 레이아웃 관련
│   │   ├── MapContainer.tsx
│   │   └── MobileHeader.tsx
│   ├── chat/          # 채팅 관련
│   │   ├── AISidebar.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ChatInput.tsx
│   │   ├── QuickActionButtons.tsx
│   │   └── MobileChatPanel.tsx
│   └── index.ts       # 컴포넌트 export
├── types/             # TypeScript 타입 정의
│   └── chat.ts
├── lib/               # 유틸리티 함수
│   └── utils.ts
└── hooks/             # 커스텀 훅 (예정)
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 환경 변수 설정

```bash
cp .env.example .env.local
```

다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
OPENAI_API_KEY=your_openai_api_key
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 🎨 UI 컴포넌트

### 메인 레이아웃
- **MapContainer**: Google Maps 표시 영역
- **MobileHeader**: 모바일 상단 헤더
- **AISidebar**: 데스크톱 AI 채팅 사이드바
- **MobileChatPanel**: 모바일 하단 채팅 패널

### 채팅 시스템
- **ChatMessage**: 개별 메시지 컴포넌트
- **ChatInput**: 메시지 입력창
- **QuickActionButtons**: 빠른 액션 버튼들

## 📦 다음 단계

- [ ] Google Maps API 통합
- [ ] AI 채팅 API 연동 (OpenAI/Gemini)
- [ ] 실시간 위치 추적
- [ ] 경로 최적화 알고리즘
- [ ] 푸시 알림
- [ ] PWA 지원

## 🤝 기여하기

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
