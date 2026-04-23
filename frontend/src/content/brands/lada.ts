import type { BrandConfig } from "@/content/brand-types";

export const ladaBrand: BrandConfig = {
  id: "lada-kolmi",
  seo: {
    metadataTitleDefault: "КОЛМИ",
    metadataTitleTemplate: "%s | КОЛМИ",
    metadataDescription: "Официальный дилер LADA. Запись на сервис, диагностику и ремонт.",
    servicePageTitle: "Запись на сервис LADA",
    servicePageDescription:
      "ТО, диагностика и ремонт по дилерским регламентам. Оставьте телефон - свяжемся в рабочее время и согласуем визит.",
    privacyPageTitle: "Политика обработки персональных данных",
    privacyPageDescription:
      "Временная заглушка для страницы политики персональных данных дилерского центра.",
  },
  theme: {
    bg: "#3f454a",
    surface: "rgba(27, 34, 39, 0.84)",
    surfaceMuted: "rgba(42, 51, 58, 0.82)",
    surfaceSubtle: "rgba(62, 73, 81, 0.3)",
    text: "#f1f0eb",
    textMuted: "#b7bec6",
    border: "rgba(223, 229, 234, 0.12)",
    borderStrong: "rgba(223, 229, 234, 0.2)",
    primary: "#df6d32",
    primarySoft: "rgba(223, 109, 50, 0.14)",
    primaryPressed: "#c75b24",
    success: "#8bcf97",
    danger: "#ff9a90",
    warning: "#d89954",
    shadowSoft: "0 24px 54px rgba(4, 8, 14, 0.28)",
    themeColor: "#3f454a",
  },
  logos: {
    primary: {
      src: "/images/logos/lada-logo.png",
      alt: "LADA",
      width: 2100,
      height: 893,
      mobileClassName:
        "h-[18px] w-auto shrink-0 scale-[1.09] object-contain origin-center max-[360px]:h-[17px]",
      desktopClassName:
        "h-6 w-auto shrink-0 scale-[1.08] object-contain origin-center max-[430px]:h-[22px] sm:h-8",
    },
    secondary: {
      src: "/images/logos/kolmi-logo-transparent.png",
      alt: "КОЛМИ",
      width: 690,
      height: 475,
      mobileClassName:
        "h-[26px] w-auto shrink-0 object-contain max-[360px]:h-[24px]",
      desktopClassName:
        "h-[41px] w-auto shrink-0 object-contain max-[430px]:h-[37px] sm:h-[52px]",
    },
  },
  dealerProfile: {
    brandLine: "Официальный дилер LADA",
    brandName: "LADA",
    dealerName: "КОЛМИ",
    city: "Якутск",
    serviceStatus: "Официальный сервис LADA",
    serviceCenterLabel: "Сервисный центр официального дилера",
    heroTitle: "Официальный сервис LADA в Якутске",
    heroDescription:
      "ТО, диагностика и ремонт по дилерским регламентам. Оставьте телефон - свяжемся в рабочее время и согласуем визит.",
    phoneDisplay: "+7 (4112) 40-08-88",
    phoneHref: "tel:+74112400888",
    address: "Покровское шоссе, 6 километр, 1а, с. Пригородный, г. Якутск",
    shortAddress: "Покровское шоссе, 6 км",
    workHours: ["Пн–Пт 09:00–19:00, Сб–Вс 10:00–19:00"],
    mobileWorkHours: "Пн–Пт 09:00–19:00",
    routeHref: "https://2gis.ru/yakutsk/firm/70000001018554877",
    policyHref: "/privacy",
    formEndpoint: "https://bot.shukland.xyz/webhook/kolmi-service-booking",
    requisites: null,
  },
  hero: {
    eyebrow: "LADA • КОЛМИ • ЯКУТСК",
    mobileDescription: "Официальный сервис LADA. Оставьте телефон — согласуем визит.",
    trustPoints: [
      "Дилерские регламенты LADA",
      "Оригинальные детали и расходные материалы",
      "Согласование работ до начала обслуживания",
    ],
  },
  form: {
    serviceOptions: [
      { value: "maintenance", label: "ТО" },
      { value: "repair", label: "Ремонт" },
      { value: "diagnostics", label: "Диагностика" },
      { value: "consultation", label: "Нужна консультация" },
    ],
    contactWindowOptions: [
      { value: "today", label: "Сегодня" },
      { value: "tomorrow", label: "Завтра" },
      { value: "worktime", label: "В рабочее время" },
    ],
  },
  trustSection: {
    title: "Почему выбирают сервис КОЛМИ",
    description: "Ключевые принципы официального дилерского сервиса LADA.",
    advantages: [
      {
        icon: "parts",
        title: "Оригинальные запчасти и расходные материалы",
        description: "Подбираем комплектующие и расходники по требованиям производителя.",
      },
      {
        icon: "tools",
        title: "Сертифицированные специалисты",
        description: "Автомобили LADA обслуживает профильная сервисная команда.",
      },
      {
        icon: "shield",
        title: "Обслуживание по стандартам LADA",
        description: "Работы выполняются по дилерским регламентам производителя.",
      },
      {
        icon: "scan",
        title: "Согласование работ до начала обслуживания",
        description: "Подтверждаем объём работ и стоимость до старта обслуживания.",
      },
    ],
  },
  processSection: {
    title: "Как проходит запись",
    description: "Короткий и понятный сценарий без лишних шагов.",
    steps: [
      {
        title: "Оставляете заявку",
        description: "Указываете телефон и тип услуги.",
      },
      {
        title: "Связываемся в рабочее время",
        description: "Уточняем детали и отвечаем на вопросы.",
      },
      {
        title: "Подтверждаем визит и принимаем автомобиль",
        description: "Фиксируем запись и оформляем приёмку.",
      },
    ],
  },
  quickContact: {
    title: "Быстрая связь с сервисом",
    description:
      "Позвоните или постройте маршрут до дилерского центра. Если удобнее, оставьте заявку выше и мы свяжемся в рабочее время.",
  },
  footer: {
    summaryLine: "Официальный дилер LADA • КОЛМИ • Якутск",
    policyLabel: "Политика обработки персональных данных",
  },
  assets: {
    faviconPath: "frontend/src/app/favicon.ico",
    logoDirectory: "frontend/public/images/logos",
    ogImagePath: null,
  },
};
