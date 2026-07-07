export const NAVIGATION = {
  main: {
    title: "무엇을 제작하시겠어요?",
    items: [
      { id: "automation", title: "업무자동화" },
      { id: "website", title: "웹사이트" },
      { id: "landing", title: "랜딩페이지" },
      { id: "mvp", title: "MVP구축" },
    ],
  },

  // 1차 메뉴들
  automation: {
    title: "업무자동화",
    items: [
      { id: "at_total", title: "통합구축" },
      { id: "at_book", title: "상담·예약" },
      { id: "at_contract", title: "견적·계약" },
      { id: "at_pay", title: "결제·매출" },
      { id: "at_stock", title: "주문·재고" },
      { id: "at_marketing", title: "마케팅" },
      { id: "main", title: "처음으로" },
    ],
  },
  website: {
    title: "웹사이트",
    items: [
      { id: "ws_biz", title: "비즈니스" },
      { id: "ws_brand", title: "브랜드" },
      { id: "ws_shop", title: "쇼핑몰" },
      { id: "ws_port", title: "포트폴리오" },
      { id: "ws_plat", title: "플랫폼" },
      { id: "ws_other", title: "기타" },
      { id: "main", title: "처음으로" },
    ],
  },
  landing: {
    title: "랜딩페이지",
    items: [
      { id: "ld_ad", title: "광고" },
      { id: "ld_event", title: "이벤트" },
      { id: "ld_prod", title: "제품" },
      { id: "ld_svc", title: "서비스" },
      { id: "ld_apply", title: "신청" },
      { id: "main", title: "이전으로" },
    ],
  },
  mvp: {
    title: "MVP구축",
    items: [
      { id: "mvp_start", title: "스타트업" },
      { id: "mvp_admin", title: "관리자" },
      { id: "mvp_web", title: "웹앱" },
      { id: "mvp_ai", title: "AI서비스" },
      { id: "mvp_plat", title: "플랫폼" },
      { id: "main", title: "이전으로" },
    ],
  },

  // 2차 공통 메뉴 (모든 서비스가 공유)
  service_sub: {
    title: "서비스 선택",
    items: [
      { id: "info", title: "정보안내" },
      { id: "estimate", title: "견적요청" },
      { id: "booking", title: "예약신청" },
      { id: "contact", title: "상담원연결" },
      { id: "main", title: "처음으로" },
    ],
  },
};