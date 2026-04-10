export type ServiceKind = "maintenance" | "repair" | "diagnostics";

export type ContactWindow = "now" | "hour" | "today" | "tomorrow";

export const dealerProfile = {
  brandLine: "Официальный дилер LADA",
  dealerName: "КОЛМИ",
  heroTitle: "Запись на сервис LADA в КОЛМИ",
  heroDescription:
    "ТО, ремонт и диагностика у официального дилера. Перезвоним и подтвердим удобное время в рабочие часы.",
  // TODO: replace with the actual dealership phone number before publishing.
  phoneDisplay: "+7 (4112) 40-08-88",
  // TODO: replace with the actual dealership phone number before publishing.
  phoneHref: "tel:+74112400888",
  // TODO: replace with the actual dealership address before publishing.
  address: "Покровское шоссе, 6 километр, 1а, с. Пригородный, г. Якутск",
  // TODO: replace with the actual work schedule before publishing.
  workHours: ["Пн–Пт 09:00–19:00, Сб–Вс 10:00–19:00"],
  // TODO: replace with the actual route link before publishing.
  routeHref: "https://2gis.ru/yakutsk/firm/70000001018554877",
  policyHref: "/privacy",
  // TODO: connect a real form endpoint or CRM/n8n webhook before publishing.
  formEndpoint: "https://bot.shukland.xyz/webhook/kolmi-service-booking",
  requisites: null as string | null,
};

export const trustPoints = [
  "Сохранение гарантии",
  "Оригинальные запчасти",
  "Сертифицированные мастера",
];

export const serviceOptions: Array<{ value: ServiceKind; label: string }> = [
  { value: "maintenance", label: "ТО" },
  { value: "repair", label: "Ремонт" },
  { value: "diagnostics", label: "Диагностика" },
];

export const contactWindowOptions: Array<{
  value: ContactWindow;
  label: string;
}> = [
  { value: "now", label: "Сейчас" },
  { value: "hour", label: "В течение часа" },
  { value: "today", label: "Сегодня" },
  { value: "tomorrow", label: "Завтра" },
];

export const serviceCards = [
  {
    title: "ТО",
    description: "Регламентное обслуживание по стандартам LADA.",
  },
  {
    title: "Ремонт",
    description: "Согласовываем работы и бережно ведём автомобиль по этапам.",
  },
  {
    title: "Диагностика",
    description: "Проверяем системы автомобиля и объясняем результат без лишней воды.",
  },
];

export const advantages = [
  {
    title: "Сохранение гарантии",
    description: "Работы выполняются по дилерским регламентам.",
  },
  {
    title: "Оригинальные запчасти",
    description: "Используем детали и расходники, подходящие для LADA.",
  },
  {
    title: "Сертифицированные мастера",
    description: "С автомобилями марки работают профильные специалисты.",
  },
  {
    title: "Профильное оборудование",
    description: "Диагностика и обслуживание проводятся на дилерском оборудовании.",
  },
];

export const processSteps = [
  {
    title: "Заявка",
    description: "Оставляете телефон, тип услуги и удобное время для связи.",
  },
  {
    title: "Подтверждение",
    description: "Мы перезваниваем в рабочие часы и согласовываем детали визита.",
  },
  {
    title: "Приезд и приёмка",
    description: "Мастер-консультант оформляет автомобиль и подтверждает объём работ.",
  },
];
