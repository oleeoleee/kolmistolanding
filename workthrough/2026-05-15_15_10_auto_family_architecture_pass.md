# Auto-family 아키텍처 패스

## 개요
현재 UI와 폼 구조는 유지하면서 auto-family fixture 작성 구조를 개선했다.
서비스 데이터와 hero 패턴을 별도 config metadata로 정리해 다음 자동차 계열 fixture를 더 쉽게 만들 수 있게 했다.

## 주요 변경사항
- 개발한 것: `services.items` 기반 서비스 모델과 `toServiceOptions` 호환 매핑 추가
- 개발한 것: `premium-detailing`, `coating-protection`, `restoration-care`, `service-trust` hero template metadata 추가
- 개선한 것: AURUM DETAIL과 Kolmi/LADA fixture가 richer services와 hero template를 사용하도록 정리
- 개선한 것: README와 fixture 작성 문서에 현재 active demo와 auto-family authoring 규칙 반영

## 결과
- ✅ `npm run lint` 성공
- ✅ `npm run build` 성공

## 다음 단계
- CTA content group은 실제 두 번째 CTA 패턴이 생긴 뒤 검토
- dual-logo header 일반화와 legacy alias 제거는 별도 cleanup pass에서 진행
- n8n workflow templating은 현재 automation metadata 기반으로 다음 단계에서 설계
