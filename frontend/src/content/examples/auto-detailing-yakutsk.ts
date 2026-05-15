import type { BrandConfig } from "@/content/brand-types";
import { autoHeroTemplates } from "@/content/hero-templates";
import { toServiceOptions } from "@/content/services";
import { themePresets, toThemePresetSelection } from "@/content/theme-presets";

const businessName = "AURUM DETAIL";
const operatorName = "ООО «Аурум Детейл»";
const contactEmail = "hello@aurumdetail.ru";
const contactPhoneHref = "tel:+79142884716";
const contactRouteHref =
  "https://2gis.ru/yakutsk/search/%D1%83%D0%BB.%20%D0%90%D0%B2%D1%82%D0%BE%D0%B4%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D0%B0%D1%8F%2C%209";
const ctaSource = "aurum-detail-landing";

const logos: BrandConfig["logos"] = {
  primary: {
    src: "/images/logos/aurum-detail-wordmark.svg",
    alt: businessName,
    width: 244,
    height: 64,
    mobileClassName:
      "h-[22px] w-auto shrink-0 object-contain max-[360px]:h-[20px]",
    desktopClassName:
      "h-[34px] w-auto shrink-0 object-contain max-[430px]:h-[30px] sm:h-[42px]",
  },
  secondary: {
    src: "/images/logos/aurum-detail-mark.svg",
    alt: "AURUM DETAIL brand mark",
    width: 64,
    height: 64,
    mobileClassName:
      "h-[22px] w-auto shrink-0 object-contain max-[360px]:h-[20px]",
    desktopClassName:
      "h-[34px] w-auto shrink-0 object-contain max-[430px]:h-[30px] sm:h-[42px]",
  },
};

const locale: BrandConfig["locale"] = {
  htmlLang: "ru",
  dateLocale: "ru-RU",
  timeZone: "Asia/Yakutsk",
  phone: {
    mode: "ru-phone-first",
    prefix: "+7",
    normalizedCountryCode: "7",
    localLength: 10,
    trunkPrefixes: ["7", "8"],
    placeholder: "+7 (900) 123-45-67",
  },
};

const brand: BrandConfig["brand"] = {
  brandLine: "Авто-детейлинг",
  brandName: businessName,
  dealerName: businessName,
  city: "Якутск",
  serviceStatus: "Авто-детейлинг в Якутске",
  serviceCenterLabel: "Студия детейлинга",
};

const cta: BrandConfig["cta"] = {
  headerCall: {
    id: "header-call",
    variant: "call-now",
    label: "Позвонить",
    actionType: "phone",
    href: contactPhoneHref,
    analytics: {
      source: ctaSource,
      placement: "header",
    },
  },
  quickContactCall: {
    id: "quick-contact-call",
    variant: "call-now",
    label: "Позвонить",
    actionType: "phone",
    href: contactPhoneHref,
    analytics: {
      source: ctaSource,
      placement: "quick-contact",
    },
  },
  mobileStickyPrimary: {
    id: "mobile-sticky-request",
    variant: "leave-request",
    label: "Оставить заявку",
    mobileLabel: "Оставить заявку",
    actionType: "form-anchor",
    href: "#service-form",
    analytics: {
      source: ctaSource,
      placement: "mobile-sticky-primary",
    },
  },
  mobileStickySecondary: {
    id: "mobile-sticky-call",
    variant: "call-now",
    label: "Позвонить",
    mobileLabel: "Позвонить",
    actionType: "phone",
    href: contactPhoneHref,
    analytics: {
      source: ctaSource,
      placement: "mobile-sticky-secondary",
    },
  },
  formSubmit: {
    id: "detailing-request-submit",
    variant: "leave-request",
    label: "Оставить заявку",
    helperText: "Достаточно телефона • Детали уточним позже",
    actionType: "form-submit",
    submittingLabel: "Отправляем...",
    desktopHelperPoints: [
      "Заявка предварительная",
      "Подберем услугу",
      "Согласуем удобное время",
    ],
    analytics: {
      source: ctaSource,
      placement: "form-submit",
    },
  },
  route: {
    id: "route-to-studio",
    variant: "book-consultation",
    label: "Построить маршрут",
    actionType: "route",
    href: contactRouteHref,
    target: "_blank",
    analytics: {
      source: ctaSource,
      placement: "contact-route",
    },
  },
};

const contact: BrandConfig["contact"] = {
  phoneDisplay: "+7 (914) 288-47-16",
  phoneHref: contactPhoneHref,
  address: "Республика Саха (Якутия), г. Якутск, ул. Автодорожная, 9",
  shortAddress: "ул. Автодорожная, 9",
  workHours: ["Пн–Вс 10:00–20:00"],
  mobileWorkHours: "Пн–Вс 10:00–20:00",
  routeHref: contactRouteHref,
  requisites: operatorName,
  labels: {
    sectionTitle: "Контакты",
    workHours: "Часы работы",
    phone: "Телефон",
    callCta: cta.headerCall.label,
  },
};

const services: BrandConfig["services"] = {
  items: [
    {
      id: "body-polishing",
      label: "Полировка кузова",
      shortLabel: "Полировка",
      description: "Восстановление блеска и аккуратная коррекция следов эксплуатации.",
      category: "polishing",
      isPrimary: true,
    },
    {
      id: "ceramic-coating",
      label: "Керамическое покрытие",
      shortLabel: "Керамика",
      description: "Защитный состав для лакокрасочного покрытия и легкого ухода.",
      category: "coating",
      isPrimary: true,
    },
    {
      id: "interior-deep-cleaning",
      label: "Химчистка салона",
      shortLabel: "Химчистка",
      description: "Глубокая чистка сидений, пластика, ковров и труднодоступных зон.",
      category: "interior-care",
      isPrimary: true,
    },
    {
      id: "paint-protection-film",
      label: "Оклейка защитной пленкой",
      shortLabel: "Защитная пленка",
      description: "Локальная или комплексная защита уязвимых зон кузова.",
      category: "paint-protection",
    },
    {
      id: "presale-preparation",
      label: "Предпродажная подготовка",
      shortLabel: "Подготовка к продаже",
      description: "Комплексная подготовка внешнего вида и салона перед продажей.",
      category: "prep",
    },
  ],
};

const hero: BrandConfig["hero"] = {
  template: {
    ...autoHeroTemplates.premiumDetailing,
    primaryServiceIds: [
      "body-polishing",
      "ceramic-coating",
      "interior-deep-cleaning",
    ],
  },
  title: "Авто-детейлинг в Якутске",
  description:
    "Полировка кузова, химчистка салона, защитные покрытия и комплексный уход за автомобилем. Оставьте заявку, и мы подберем подходящую услугу и удобное время.",
  eyebrow: "ДЕТЕЙЛИНГ • ЯКУТСК • УХОД ЗА АВТО",
  mobileDescription: "Полировка, химчистка и защитные покрытия в Якутске.",
  trustPoints: [
    "Полировка кузова",
    "Химчистка салона",
    "Защитные покрытия",
  ],
};

const faq: BrandConfig["faq"] = {
  title: "Частые вопросы",
  description:
    "Короткие ответы для первичной консультации по детейлингу, покрытиям и подготовке автомобиля.",
  items: [
    {
      id: "how-to-choose-service",
      question: "Как понять, какая услуга нужна автомобилю?",
      answer:
        "Оставьте заявку с телефоном и, если удобно, добавьте модель авто и задачу в комментарий. Мы уточним состояние кузова или салона и предложим подходящий формат: полировку, химчистку, защитное покрытие или комплексный уход.",
      shortAnswer:
        "Мы уточним состояние авто и подберем услугу по задаче.",
      category: "consultation",
      isPrimary: true,
      order: 1,
    },
    {
      id: "polishing-vs-coating",
      question: "Чем полировка отличается от керамического покрытия?",
      answer:
        "Полировка помогает восстановить внешний вид лакокрасочного покрытия и убрать часть следов эксплуатации. Керамическое покрытие наносится после подготовки поверхности и помогает дольше сохранять блеск и упростить уход.",
      shortAnswer:
        "Полировка восстанавливает внешний вид, покрытие помогает сохранить результат.",
      category: "coating",
      isPrimary: true,
      order: 2,
    },
    {
      id: "interior-cleaning-time",
      question: "Сколько занимает химчистка салона?",
      answer:
        "Срок зависит от состояния салона, материалов и объема работ. Обычно точное время согласуем после короткой консультации, чтобы сразу учесть сушку и удобное окно выдачи автомобиля.",
      category: "interior-care",
      order: 3,
    },
    {
      id: "need-visit-before-price",
      question: "Можно ли узнать стоимость без визита?",
      answer:
        "Предварительно сориентируем по телефону. Финальную стоимость лучше подтверждать после осмотра, потому что результат и объем работ зависят от состояния кузова, салона и выбранной защиты.",
      shortAnswer:
        "Предварительно сориентируем по телефону, финально подтвердим после осмотра.",
      category: "pricing",
      isPrimary: true,
      order: 4,
    },
    {
      id: "paint-protection-film-zones",
      question: "Можно ли оклеить пленкой только отдельные зоны?",
      answer:
        "Да, можно выбрать локальную защиту наиболее уязвимых зон или комплексную оклейку. Подходящий вариант подбираем по задаче, пробегу и состоянию покрытия.",
      category: "paint-protection",
      order: 5,
    },
  ],
};

const legal: BrandConfig["legal"] = {
  policyHref: "/privacy",
  policyLabel: "Политика конфиденциальности",
  backLinkLabel: "На страницу заявки",
  privacyPolicyRaw: `ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
${operatorName}
Адрес: ${contact.address}
Телефон: ${contact.phoneDisplay}
Email: ${contactEmail}
Дата публикации: 13.05.2026
1. ОБЩИЕ ПОЛОЖЕНИЯ
Настоящая политика определяет порядок обработки и защиты персональных
данных пользователей сайта ${businessName}.
Политика применяется к заявкам на услуги авто-детейлинга, оставленным через
форму сайта или отправленным по контактам студии.
2. ОПЕРАТОР ПЕРСОНАЛЬНЫХ ДАННЫХ
Оператором персональных данных является:
${operatorName}
Адрес:
${contact.address}
Телефон:
${contact.phoneDisplay}
Email:
${contactEmail}
3. КАКИЕ ПЕРСОНАЛЬНЫЕ ДАННЫЕ ОБРАБАТЫВАЮТСЯ
Оператор может обрабатывать номер телефона, выбранный тип услуги,
удобное время для связи, комментарий клиента, источник заявки, дату и
время создания заявки.
4. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
Персональные данные обрабатываются для приема заявки, обратной связи,
консультации по услугам авто-детейлинга и согласования удобного времени.
5. ПРАВОВЫЕ ОСНОВАНИЯ ОБРАБОТКИ
Обработка персональных данных осуществляется на основании согласия
пользователя и применимого законодательства о персональных данных.
6. ДЕЙСТВИЯ С ПЕРСОНАЛЬНЫМИ ДАННЫМИ
Оператор может осуществлять сбор, запись, хранение, уточнение,
использование, удаление и уничтожение персональных данных.
7. СРОКИ ОБРАБОТКИ И ХРАНЕНИЯ ПЕРСОНАЛЬНЫХ ДАННЫХ
Персональные данные хранятся в течение срока, необходимого для обработки
заявки и связи с пользователем, если иной срок не установлен применимым
законодательством.
8. ПЕРЕДАЧА ПЕРСОНАЛЬНЫХ ДАННЫХ ТРЕТЬИМ ЛИЦАМ
Оператор не передает персональные данные третьим лицам, за исключением
случаев, необходимых для обработки заявки или предусмотренных законом.
9. ПРАВА СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ
Пользователь вправе получать информацию об обработке персональных
данных, требовать их уточнения или удаления, а также отозвать согласие.
10. ПОРЯДОК ОТЗЫВА СОГЛАСИЯ
Пользователь может отозвать согласие, направив обращение оператору на email
${contactEmail} или по контактам, указанным в настоящей политике.
11. ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ
Оператор принимает необходимые организационные и технические меры для
защиты персональных данных.
12. КОНТАКТНАЯ ИНФОРМАЦИЯ ОПЕРАТОРА
${operatorName}
${contact.address}
${contact.phoneDisplay}
${contactEmail}
13. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
Актуальная редакция политики размещается на странице:
/privacy`,
};

const form: BrandConfig["form"] = {
  serviceOptions: toServiceOptions(services.items),
  contactWindowOptions: [
    { value: "today", label: "Сегодня" },
    { value: "tomorrow", label: "Завтра" },
    { value: "worktime", label: "В рабочее время" },
  ],
  copy: {
    eyebrow: "Предварительная заявка",
    title: "Заявка на детейлинг",
    description: "Оставьте телефон. Услугу и удобное время уточним при звонке.",
    phoneLabel: "Телефон для связи",
    requiredLabel: "Обязательно",
    optionalLabel: "Необязательно",
    phoneHelperText: "Нужен, чтобы согласовать услугу и время.",
    phoneErrorText: "Укажите телефон полностью.",
    submitLabel: cta.formSubmit.label,
    submittingLabel: cta.formSubmit.submittingLabel,
    mobileCtaMicrocopy: cta.formSubmit.helperText ?? "",
    desktopCtaPoints: cta.formSubmit.desktopHelperPoints,
    legalPrefix:
      "Нажимая кнопку, вы соглашаетесь с обработкой персональных данных в соответствии с",
    legalLinkLabel: "политикой конфиденциальности",
    successMessage: "Заявка отправлена. Мы свяжемся с вами в рабочее время.",
    errorMessage: "Не удалось отправить заявку. Попробуйте еще раз или позвоните нам.",
    detailsToggleLabel: "Уточнить детали заявки",
    detailsToggleMeta: "Необязательно",
    serviceLegend: "Какая услуга интересует",
    serviceLabel: "Услуга",
    contactWindowLegend: "Когда удобно связаться",
    contactWindowLabel: "Когда удобно связаться",
    commentLabel: "Комментарий к заявке",
    commentPlaceholder: "Если хотите, укажите модель авто, состояние кузова или салона",
    antiAnxietyCopy:
      "Если не уверены, какая услуга нужна, опишите задачу своими словами.",
    mobileStickySubmitLabel:
      cta.mobileStickyPrimary.mobileLabel ?? cta.mobileStickyPrimary.label,
  },
  submission: {
    endpoint: "https://bot.shukland.xyz/webhook/aurum-detail-booking",
    source: "aurum-detail-landing",
    mockDelayMs: 700,
  },
};

export const autoDetailingYakutskExampleConfig: BrandConfig = {
  id: "auto-detailing-yakutsk",
  locale,
  brand,
  seo: {
    metadataTitleDefault: `${businessName} | Авто-детейлинг`,
    metadataTitleTemplate: `%s | ${businessName}`,
    metadataDescription:
      "Авто-детейлинг в Якутске: полировка кузова, химчистка салона, защитные покрытия и комплексный уход за автомобилем.",
    servicePageTitle: "Авто-детейлинг в Якутске",
    servicePageDescription:
      "Полировка кузова, химчистка салона, защитные покрытия и комплексный уход за автомобилем. Оставьте заявку, и мы подберем подходящую услугу и удобное время.",
    privacyPageTitle: "Политика конфиденциальности",
    privacyPageDescription:
      `Политика конфиденциальности ${businessName} для сайта авто-детейлинга в Якутске.`,
  },
  theme: {
    ...themePresets.blackGold.tokens,
    preset: toThemePresetSelection(themePresets.blackGold),
  },
  assets: {
    logos,
    faviconPath: "frontend/src/app/favicon.ico",
    logoDirectory: "frontend/public/images/logos",
    ogImagePath: null,
  },
  contact,
  cta,
  hero,
  services,
  faq,
  form,
  legal,
  automation: {
    workflowName: "AURUM DETAIL Landing",
    webhookPath: "aurum-detail-booking",
    source: form.submission.source,
    timeZone: locale.timeZone,
    emailSubject: "Новая заявка с лендинга AURUM DETAIL",
    templateHints: {
      expectedPayloadKeys: [
        "phone",
        "serviceType",
        "contactWindow",
        "comment",
        "source",
        "submittedAt",
      ],
    },
  },
  logos,
  dealerProfile: {
    ...brand,
    heroTitle: hero.title,
    heroDescription: hero.description,
    phoneDisplay: contact.phoneDisplay,
    phoneHref: contact.phoneHref,
    address: contact.address,
    shortAddress: contact.shortAddress,
    workHours: contact.workHours,
    mobileWorkHours: contact.mobileWorkHours,
    routeHref: contact.routeHref,
    policyHref: legal.policyHref,
    formEndpoint: form.submission.endpoint,
    requisites: contact.requisites,
  },
  trustSection: {
    title: `Почему выбирают ${businessName}`,
    description: "Подход к комплексному уходу за автомобилем без лишних шагов.",
    advantages: [
      {
        icon: "parts",
        title: "Подбор услуги под состояние авто",
        description: "Уточняем задачу и рекомендуем подходящий формат ухода.",
      },
      {
        icon: "tools",
        title: "Аккуратная работа с кузовом и салоном",
        description: "Используем профессиональный подход к поверхностям и материалам.",
      },
      {
        icon: "shield",
        title: "Защитные покрытия",
        description: "Помогаем сохранить внешний вид автомобиля после ухода.",
      },
      {
        icon: "scan",
        title: "Согласование до начала работ",
        description: "Подтверждаем услугу, сроки и детали до записи.",
      },
    ],
  },
  processSection: {
    title: "Как проходит заявка",
    description: "Короткий сценарий для предварительного подбора услуги.",
    steps: [
      {
        title: "Оставляете заявку",
        description: "Указываете телефон и интересующую услугу.",
      },
      {
        title: "Связываемся в рабочее время",
        description: "Уточняем автомобиль, задачу и состояние поверхностей.",
      },
      {
        title: "Подбираем услугу и время",
        description: "Согласуем формат работ и удобное окно для визита.",
      },
    ],
  },
  quickContact: {
    title: "Быстрая связь со студией",
    description:
      "Позвоните или оставьте заявку выше. Мы уточним задачу и подберем подходящую услугу для автомобиля.",
  },
  footer: {
    summaryLine: `${businessName} • авто-детейлинг • Якутск`,
    policyLabel: legal.policyLabel,
  },
};
