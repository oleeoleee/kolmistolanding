# 오토 디테일링 fixture 데모 준비

## 개요
auto-detailing fixture의 자리표시자 데이터를 일관된 데모 브랜드 데이터로 교체했다.
화면 구조는 유지하면서 연락처, 법무 텍스트, 제출 메타데이터, 로고 자산을 실제 예시처럼 정리했다.

## 주요 변경사항
- 개발한 것: `AURUM DETAIL`용 wordmark와 brand mark SVG 로고 추가
- 수정한 것: 사업자명, 전화번호, 주소, 경로 링크, privacy 문구, automation/submission 식별자 교체
- 개선한 것: fixture 내부 브랜드/연락처/법무/전송 메타데이터 일관성 확보

## 결과
- ✅ `npm run lint` 성공
- ✅ `npm run build` 성공

## 다음 단계
- 실제 운영 전 endpoint와 외부 지도 링크를 실환경 기준으로 검증
- 실제 사업자 정보가 정해지면 privacy 문구와 requisites를 최종 확정
