# Reusable Skeleton Phase 1

## 개요
Kolmi/LADA 랜딩을 현재 UI와 문구를 유지한 상태로 재사용 가능한 white-label skeleton 구조로 정리했다.
브랜드, 연락처, 폼, 법적 문서, locale, automation 메타데이터를 config에서 읽도록 Phase 1 범위만 반영했다.

## 주요 변경사항
- 개발한 것: `BrandConfig`에 `locale`, `brand`, `assets`, `contact`, `form`, `legal`, `automation` 그룹 추가
- 수정한 것: 폼/CTA/섹션/privacy 관련 하드코딩 문자열을 Kolmi/LADA example fixture로 이동
- 개선한 것: Kolmi/LADA를 `frontend/src/content/examples/kolmi-lada.ts` example config로 분리하고 legacy alias 유지

## 결과
- ✅ `npm run lint` 성공
- ✅ `npm run build` 성공

## 다음 단계
- n8n workflow JSON을 `automation` config 기반 template로 분리
- 전화번호 포맷/커서 로직을 테스트와 함께 일반화
- legacy alias(`dealerProfile`, `logos`) 제거 가능 시점 결정
