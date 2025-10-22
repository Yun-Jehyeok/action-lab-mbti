# MBTI 매칭 서비스

Next.js 15를 사용한 한국어 MBTI 매칭 랜딩 페이지입니다.

## 기능

-   🧠 **MBTI 선택**: 이미 알고 있는 MBTI 유형을 선택
-   ❓ **MBTI 테스트**: 간단한 8문항 테스트로 MBTI 유형 확인
-   📝 **연락처 입력**: 이름, 연락처, 지역 정보 입력
-   💾 **데이터 저장**: Supabase를 통한 안전한 데이터 저장
-   📱 **반응형 디자인**: 모바일과 데스크톱 모두 지원

## 페이지 구조

1. **홈 페이지 (/)** - 서비스 소개 및 선택지 제공
2. **MBTI 선택 (/select)** - 16가지 MBTI 유형 중 선택
3. **MBTI 테스트 (/test)** - 8문항 간단 테스트
4. **테스트 결과 (/test/result)** - 테스트 결과 및 특성 표시
5. **연락처 입력 (/contact)** - 개인정보 입력 폼
6. **완료 페이지 (/success)** - 신청 완료 메시지

## 기술 스택

-   **프레임워크**: Next.js 15 (App Router)
-   **언어**: TypeScript
-   **스타일링**: Tailwind CSS 4
-   **아이콘**: Lucide React
-   **데이터베이스**: Supabase (PostgreSQL)
-   **폰트**: Inter

## 설치 및 실행

1. 의존성 설치:

```bash
npm install
```

2. 환경 변수 설정:

```bash
cp .env.example .env.local
```

3. Supabase 설정:
    - [Supabase](https://supabase.com)에서 새 프로젝트 생성
    - 프로젝트 URL과 anon key를 `.env.local`에 추가
    - 다음 SQL로 테이블 생성:

```sql
CREATE TABLE mbti_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  contact text NOT NULL,
  location text NOT NULL,
  gender text NOT NULL,
  age text NOT NULL,
  mbti_type text NOT NULL,
  created_at timestamp DEFAULT now()
);

-- Row Level Security 활성화 (보안)
ALTER TABLE mbti_submissions ENABLE ROW LEVEL SECURITY;

-- 삽입 정책 (누구나 데이터 추가 가능)
CREATE POLICY "Anyone can insert submissions" ON mbti_submissions
  FOR INSERT WITH CHECK (true);
```

4. 개발 서버 실행:

```bash
npm run dev
```

5. http://localhost:3000에서 확인

## 프로젝트 구조

```
app/
├── api/submit/route.ts          # 폼 제출 API
├── contact/page.tsx             # 연락처 입력 페이지
├── select/page.tsx              # MBTI 선택 페이지
├── success/page.tsx             # 완료 페이지
├── test/
│   ├── page.tsx                 # MBTI 테스트 페이지
│   └── result/page.tsx          # 테스트 결과 페이지
├── globals.css                  # 전역 스타일
├── layout.tsx                   # 루트 레이아웃
└── page.tsx                     # 홈 페이지

lib/
└── supabaseClient.ts            # Supabase 클라이언트 설정
```

## 배포

1. Vercel에 배포:

```bash
vercel --prod
```

2. 환경 변수를 Vercel 대시보드에서 설정

## 디자인 특징

-   🎨 **모던한 디자인**: 부드러운 파스텔 색상과 둥근 모서리
-   📱 **반응형**: 모바일 우선 디자인
-   🚫 **애니메이션 없음**: 깔끔하고 빠른 사용자 경험
-   🇰🇷 **한국어**: 모든 텍스트와 UI가 한국어로 제공
-   🎯 **직관적**: 명확한 사용자 플로우

## 라이선스

MIT License
