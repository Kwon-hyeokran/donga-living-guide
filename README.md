# 동아제약 생활백서 - Netlify 배포 가이드

## 📁 폴더 구조
```
netlify-deploy/
├── index.html                    ← 메인 페이지
├── netlify.toml                  ← Netlify 설정
├── package.json                  ← Anthropic SDK 의존성
└── netlify/
    └── functions/
        └── chat.js               ← AI Gateway 연동 (API 키 불필요!)
```

## 🚀 배포 방법 (Netlify AI Gateway — API 키 불필요!)

### 1단계: GitHub에 올리기
1. github.com 로그인 → 저장소(donga-living-guide) 클릭
2. "uploading an existing file" 클릭
3. 아래 파일들을 드래그 앤 드롭:
   - index.html
   - netlify.toml
   - package.json
   - netlify/ 폴더 (functions/chat.js 포함)
4. "Commit changes" 클릭

### 2단계: Netlify 배포
1. https://netlify.com → 로그인
2. "Add new site" → "Import an existing project"
3. GitHub → donga-living-guide 선택
4. 설정 그대로 → "Deploy site" 클릭
5. 배포 완료! 자동으로 URL 생성됨

## ✅ 끝! API 키 설정 없이 바로 챗봇 동작!
- Netlify AI Gateway가 자동으로 API 키를 관리
- 무료 플랜 300 크레딧 기본 제공
- 사용량은 Netlify 대시보드에서 확인 가능
