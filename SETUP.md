# 프로젝트 초기 환경설정 가이드

> README 개발 가이드에 맞는 단계별 초기 설정 방법입니다.

## 🚀 Step 1: 기본 프로젝트 생성

```bash
# 1. 새 레포 클론
git clone https://github.com/ganpans/ganpan-renewal.git
cd ganpan-renewal

# 2. pnpm 전역 설치 (없는 경우)
npm install -g pnpm

# 3. Next.js 프로젝트 생성 (pnpm 사용)
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

- typescript, tailwind css, eslint 자동 설정
- app router 사용
- src/ 디렉터리 사용, 절대 경로 사용

## 🔧 Step 2: 패키지 매니저 설정

### .npmrc 파일 생성

```bash
cat > .npmrc << 'EOF'
engine-strict=true
save-exact=true
auto-install-peers=true
EOF
```

- .npmrc = npm/pnpm 설정 파일, 패키지 매니저의 동작 방식을 설정

### .nvmrc 파일 생성 (Node.js 버전 고정)

```bash
echo "18.17.0" > .nvmrc
```

- node version manager 설정 파일

### package.json 엔진 설정 추가

```bash
# package.json에 engines 섹션 추가 (수동)
```

## 📝 Step 3: 코드 품질 도구 설치

```bash
# ESLint, Prettier, Husky 등 개발 도구 설치
pnpm add -D \
  prettier \
  eslint-config-prettier \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  husky \
  lint-staged \
  @commitlint/cli \
  @commitlint/config-conventional
```

## ⚙️ Step 4: 설정 파일 생성

### 1. ESLint 설정 (.eslintrc.json)

```bash
cat > .eslintrc.json << 'EOF'
{
  "extends": [
    "next/core-web-vitals",        // Next.js 최적화 규칙
    "@typescript-eslint/recommended", // TS 권장 규칙
    "prettier"                     // Prettier와 충돌 방지
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/consistent-type-imports": "error"
  },
  "ignorePatterns": ["node_modules/", ".next/", "out/"]
}
EOF
```

### 2. Prettier 설정 (.prettierrc)

```bash
cat > .prettierrc << 'EOF'
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
EOF
```

### 3. Prettier 무시 파일 (.prettierignore)

```bash
cat > .prettierignore << 'EOF'
node_modules
.next
.vercel
.env*
*.md
pnpm-lock.yaml
EOF
```

### 4. TypeScript 엄격 설정 (tsconfig.json 수정)

```bash
# 기존 tsconfig.json의 compilerOptions에 추가할 설정
cat > tsconfig.strict.json << 'EOF'
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
EOF
```

### 5. Commitlint 설정 (commitlint.config.js)

```bash
cat > commitlint.config.js << 'EOF'
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
    ],
    'subject-case': [2, 'never', ['pascal-case', 'upper-case']],
    'subject-max-length': [2, 'always', 50],
    'body-max-line-length': [2, 'always', 72]
  }
};
EOF
```

## 🎯 Step 5: Git Hooks 설정

```bash
# Husky 초기화
pnpm exec husky install

# Git hooks 디렉토리 생성
mkdir -p .husky

# Pre-commit hook 생성
cat > .husky/pre-commit << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
EOF

# Commit-msg hook 생성
cat > .husky/commit-msg << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm commitlint --edit $1
EOF

# 실행 권한 부여
chmod +x .husky/pre-commit .husky/commit-msg
```

- 허스키 설정의 의미
- 개발자가 커밋 시도 시, 1) pre-commit hook 실행 2) pnpm lint-staged 실행으로 커밋된 파일 검사/포맷팅 3) 스테이징된 파일만 검사

- commit-msg 쉘의 `. "$(dirname -- "$0")/_/husky.sh" ` 의미
  - `.` : 서브 쉘이 아닌 현재 쉘에서 실행
  - `$0` : 현재 스크립트 파일명 (.husky/pre-commit)
  - `dirname` : 파일 경로에서 디렉토리 부분만 추출
  - `--` : 명령어의 옵션이 종료되었으며, 이 뒤엔 파일명이라는 의미
  - `$()` : 명령어의 출력 결과를 문자열로 치환
  - 경로 독립성, 상대 경로 충돌 등을 해결하기 위함

## 📦 Step 6: package.json 스크립트 업데이트

```bash
# package.json의 scripts 섹션을 다음과 같이 수정
cat > scripts.json << 'EOF'
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}
EOF
```

## 🏗️ Step 7: 폴더 구조 생성

```bash
src/
├── app/                    # Next.js App Router (자동 생성됨)
├── components/
│   ├── ui/                # 재사용 가능한 기본 UI 컴포넌트 (ex. 버튼)
│   ├── layout/            # 레이아웃 관련 컴포넌트 (ex. 페이지 구조, 네비게이션 등)
│   └── feature/           # 비즈니스 로직이 포함된 기능별 컴포넌트 (ex. input, form 등의 도메인 별 컴포넌트)
├── hooks/                 # 커스텀 React 훅
├── lib/                   # 외부 라이브러리 설정 및 클라이언트
├── types/                 # TypeScript 타입 정의
├── utils/                 # 순수 함수 유틸리티
└── constants/             # 상수 정의
```

```bash
# 표준 폴더 구조 생성
mkdir -p src/components/{ui,layout,feature}
mkdir -p src/{hooks,lib,types,utils,constants}

# 각 폴더에 index.ts 파일 생성
echo "// Export all components from this directory" > src/components/ui/index.ts
echo "// Export all layout components" > src/components/layout/index.ts
echo "// Export all feature components" > src/components/feature/index.ts
echo "// Export all custom hooks" > src/hooks/index.ts
echo "// Export all utility functions" > src/utils/index.ts
echo "// Export all type definitions" > src/types/index.ts
echo "// Export all constants" > src/constants/index.ts
echo "// Export all library configurations" > src/lib/index.ts
```

## 🎨 Step 8: Tailwind CSS 고급 설정

```bash
# tailwind.config.js 업데이트
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
EOF
```

## 🌍 Step 9: 환경변수 설정

```bash
# .env.example 파일 생성
cat > .env.example << 'EOF'
# API Configuration
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_APP_URL=

# Database
DATABASE_URL=

# Authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# External Services
API_SECRET_KEY=
EOF

# .env.local 파일 생성 (gitignore됨)
cat > .env.local << 'EOF'
# Local development environment variables
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
```

## 📋 Step 10: VS Code 설정

```bash
# .vscode 폴더 생성
mkdir -p .vscode

# 확장 프로그램 권장사항
cat > .vscode/extensions.json << 'EOF'
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
EOF

# VS Code 설정
cat > .vscode/settings.json << 'EOF'
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
EOF
```

## ✅ Step 11: 초기 테스트

```bash
# 모든 설정이 올바른지 확인
echo "🔍 Testing setup..."

# 타입 체크
pnpm type-check

# 린트 체크
pnpm lint

# 포맷 체크
pnpm format:check

# 빌드 테스트
pnpm build

echo "✅ Setup complete! All checks passed."
```

## 📚 Step 12: 추가 라이브러리 설치 (선택사항)

```bash
# 상태 관리 (선택)
pnpm add zustand

# 폼 관리 (선택)
pnpm add react-hook-form @hookform/resolvers zod

# UI 라이브러리 (선택)
pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu

# 아이콘 (선택)
pnpm add lucide-react

# 유틸리티 (선택)
pnpm add clsx class-variance-authority
```

## 🚨 최종 체크리스트

- [ ] pnpm이 정상 설치되어 있는지 확인
- [ ] `pnpm dev` 명령어로 개발 서버 실행 확인
- [ ] `pnpm lint` 통과 확인
- [ ] `pnpm type-check` 통과 확인
- [ ] `pnpm build` 성공 확인
- [ ] Git commit 시 pre-commit hook 동작 확인
- [ ] 커밋 메시지 컨벤션 확인

---

**이제 팀원들과 함께 일관된 개발 환경에서 작업할 준비가 완료되었습니다! 🎉**
