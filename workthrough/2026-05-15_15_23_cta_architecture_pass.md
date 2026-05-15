# CTA 아키텍처 패스

## 개요
기존 UI와 버튼 배치는 유지하면서 CTA 데이터를 별도 canonical config로 분리했다.
auto-family 클라이언트 fixture에서 CTA 의도, 라벨, helper copy, action metadata를 더 명확하게 작성할 수 있게 했다.

## 주요 변경사항
- 개발한 것: `cta` config 그룹과 `book-consultation`, `leave-request`, `call-now`, `get-price` variant 타입 추가
- 수정한 것: header call, quick contact call, mobile sticky, form submit CTA가 `ctaContent`를 읽도록 연결
- 개선한 것: AURUM DETAIL과 Kolmi/LADA fixture에 CTA intent/action metadata 추가
- 개선한 것: fixture 작성 문서에 CTA 위치, variant 선택, compatibility alias 기준 반영

## 결과
- ✅ `npm run lint` 성공
- ✅ `npm run build` 성공

## 다음 단계
- CTA compatibility alias 제거는 별도 cleanup pass에서 진행
- route CTA 렌더링은 실제 요구가 생길 때 별도 UI 변경으로 검토
- analytics metadata를 실제 추적 시스템에 연결할지 다음 단계에서 결정
