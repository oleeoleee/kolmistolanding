# Theme Preset Pass

## 개요
자동차 계열 랜딩 스켈레톤에 재사용 가능한 테마 프리셋 레이어를 추가했다.
기존 UI, 레이아웃, CSS 변수 소비 방식은 유지하고 fixture 작성용 메타데이터와 토큰 registry만 정리했다.

## 주요 변경사항
- 개발한 것: `themePresets` registry와 `ThemePreset` 관련 타입 추가
- 수정한 것: AURUM DETAIL은 `black-gold`, Kolmi/LADA는 `graphite-orange` 프리셋에 연결
- 개선한 것: 새 fixture 작성 시 테마 선택, 토큰 override, 로고 대비 확인 흐름을 문서화

## 핵심 코드
```typescript
theme: {
  ...themePresets.blackGold.tokens,
  preset: toThemePresetSelection(themePresets.blackGold),
}
```

## 결과
- ✅ `npm run lint` 성공
- ✅ `npm run build` 성공

## 다음 단계
- 새 프리셋 활성화 전 시각 회귀 확인 추가
- dual-logo 헤더 일반화 여부 결정
- 실제 클라이언트 fixture에서 `clean-silver` 같은 light preset 검증
