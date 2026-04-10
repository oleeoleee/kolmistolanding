export type ServiceKind = "maintenance" | "repair" | "diagnostics" | "consultation";

export type ContactWindow = "today" | "tomorrow" | "worktime";

export const dealerProfile = {
  brandLine: "Официальный дилер LADA",
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
  workHours: ["Пн–Пт 09:00–19:00, Сб–Вс 10:00–19:00"],
  routeHref: "https://2gis.ru/yakutsk/firm/70000001018554877",
  policyHref: "/privacy",
  // TODO: connect a real form endpoint or CRM/n8n webhook before publishing.
  formEndpoint: "https://bot.shukland.xyz/webhook/kolmi-service-booking",
  requisites: null as string | null,
};

export const serviceOptions: Array<{ value: ServiceKind; label: string }> = [
  { value: "maintenance", label: "ТО" },
  { value: "repair", label: "Ремонт" },
  { value: "diagnostics", label: "Диагностика" },
  { value: "consultation", label: "Нужна консультация" },
];

export const contactWindowOptions: Array<{
  value: ContactWindow;
  label: string;
}> = [
  { value: "today", label: "Сегодня" },
  { value: "tomorrow", label: "Завтра" },
  { value: "worktime", label: "В рабочее время" },
];

export const advantages = [
  {
    title: "Сервис по дилерским регламентам",
    description: "Обслуживание по стандартам LADA.",
  },
  {
    title: "Оригинальные детали и расходные материалы",
    description: "Используем подходящие комплектующие и расходники.",
  },
  {
    title: "Специалисты по автомобилям LADA",
    description: "С машиной работает профильная сервисная команда.",
  },
  {
    title: "Согласование работ до начала обслуживания",
    description: "Подтверждаем объём и стоимость до старта работ.",
  },
];

export const processSteps = [
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
];
