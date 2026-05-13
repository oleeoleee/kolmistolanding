# Auto Detailing Fixture

## 개요
Phase 1 reusable landing skeleton에 Yakutsk auto-detailing용 새 fixture를 추가했다.
기존 UI, 레이아웃, 반응형 동작은 유지하고 config 데이터만 교체했다.

## 주요 변경사항
- 개발한 것: `frontend/src/content/examples/auto-detailing-yakutsk.ts` fixture 추가
- 수정한 것: `activeBrand`를 auto-detailing fixture로 전환
- 개선한 것: 5번째 서비스 옵션을 위해 `ServiceKind`에 `service` 호환 값 추가

## 결과
- ✅ `npm run lint` 성공
- ✅ `npm run build` 성공

## 다음 단계
- 실제 업체명, 전화번호, 주소, 로고, 법적 문구로 placeholder 교체
- n8n workflow JSON을 auto-detailing 설정에 맞게 템플릿화
- 서비스 옵션 value를 niche-neutral schema로 정리
