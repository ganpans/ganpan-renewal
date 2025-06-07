# 간판 리뉴얼 (Ganpan Renewal)

간판 리뉴얼 프로젝트는 모던한 웹 기술을 활용한 Next.js 기반의 프론트엔드 애플리케이션입니다.

## 🛠️ 기술 스택

- **Frontend Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Package Manager**: pnpm
- **Linting & Formatting**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged
- **Commit Convention**: Conventional Commits (commitlint)

## 📋 사전 요구사항

- **Node.js**: 20.17.0 (권장)
- **pnpm**: 최신 버전

## 🚀 초기 설정 가이드

### 1. 레포지토리 클론

```bash
git clone [repository-url]
cd ganpan-renewal
```

### 2. Node.js 버전 설정

```bash
# nvm이 설치되어 있는 경우
nvm use

# 또는 직접 Node.js 20.17.0 설치
```

### 3. 의존성 설치

```bash
# pnpm이 설치되어 있지 않은 경우
npm install -g pnpm

# 프로젝트 의존성 설치
pnpm install
```

### 4. 개발 서버 실행

```bash
pnpm dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

> 💡 **더 자세한 개발 환경 설정이 필요하시다면**: [SETUP.md](./SETUP.md) 파일에서 단계별 상세 설정 가이드를 확인하세요.

## 📝 주요 스크립트

```bash
# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 린팅 검사
pnpm lint

# 린팅 자동 수정
pnpm lint:fix

# 코드 포맷팅
pnpm format

# 타입 검사
pnpm type-check

# 테스트 실행
pnpm test

# 테스트 워치 모드
pnpm test:watch
```

## 🔧 VS Code 권장 확장 프로그램

프로젝트를 효율적으로 개발하기 위해 다음 VS Code 확장 프로그램을 설치하는 것을 권장합니다:

1. **Prettier - Code formatter** (esbenp.prettier-vscode)
2. **ESLint** (dbaeumer.vscode-eslint)
3. **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)

## 📁 프로젝트 구조

```
src/
├── app/           # Next.js App Router 페이지
├── components/    # 재사용 가능한 React 컴포넌트
├── constants/     # 상수 정의
├── hooks/         # 커스텀 React 훅
├── lib/           # 외부 라이브러리 설정
├── types/         # TypeScript 타입 정의
└── utils/         # 유틸리티 함수
```

## 🎯 개발 가이드라인

- **커밋 메시지**: Conventional Commits 규칙을 따릅니다
- **코드 스타일**: Prettier와 ESLint 설정을 준수합니다
- **Git Hook**: 커밋 전 자동으로 린팅과 포맷팅이 실행됩니다

## 🤝 기여하기

1. 이슈를 확인하거나 새 이슈를 생성합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

---

문제가 발생하거나 질문이 있으시면 이슈를 생성해 주세요! 🚀
