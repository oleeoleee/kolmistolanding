import type { BrandConfig } from "@/content/brand-types";
import { autoHeroTemplates } from "@/content/hero-templates";
import { toServiceOptions } from "@/content/services";
import { themePresets, toThemePresetSelection } from "@/content/theme-presets";

const contactPhoneHref = "tel:+74112400888";
const contactRouteHref = "https://2gis.ru/yakutsk/firm/70000001018554877";
const ctaSource = "kolmi-landing";

const logos: BrandConfig["logos"] = {
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
  brandLine: "Официальный дилер LADA",
  brandName: "LADA",
  dealerName: "КОЛМИ",
  city: "Якутск",
  serviceStatus: "Официальный дилер LADA",
  serviceCenterLabel: "Сервисный центр официального дилера",
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
    variant: "book-consultation",
    label: "Оставить заявку",
    mobileLabel: "Отправить запрос",
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
    id: "service-booking-submit",
    variant: "book-consultation",
    label: "Оставить заявку",
    helperText: "Достаточно телефона • Остальное можно уточнить позже",
    actionType: "form-submit",
    submittingLabel: "Отправляем...",
    desktopHelperPoints: [
      "Запись предварительная",
      "Подтверждаем визит",
      "Свяжемся в рабочее время",
    ],
    analytics: {
      source: ctaSource,
      placement: "form-submit",
    },
  },
  route: {
    id: "route-to-dealer",
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
  phoneDisplay: "+7 (4112) 40-08-88",
  phoneHref: contactPhoneHref,
  address: "Покровское шоссе, 6 километр, 1а, с. Пригородный, г. Якутск",
  shortAddress: "Покровское шоссе, 6 км",
  workHours: ["Пн–Пт 09:00–19:00, Сб–Вс 10:00–19:00"],
  mobileWorkHours: "Пн–Пт 09:00–19:00",
  routeHref: contactRouteHref,
  requisites: null,
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
      id: "maintenance",
      label: "ТО",
      shortLabel: "ТО",
      alternateLabel: "Техническое обслуживание",
      description: "Плановое обслуживание автомобиля по регламентам производителя.",
      category: "scheduled-service",
      isPrimary: true,
    },
    {
      id: "repair",
      label: "Ремонт",
      description: "Работы по устранению неисправностей после диагностики и согласования.",
      category: "repair",
      isPrimary: true,
    },
    {
      id: "diagnostics",
      label: "Диагностика",
      description: "Проверка систем автомобиля и уточнение причины обращения.",
      category: "diagnostics",
      isPrimary: true,
    },
    {
      id: "consultation",
      label: "Нужна консультация",
      shortLabel: "Консультация",
      description: "Предварительная консультация, если услуга или причина обращения неясны.",
      category: "consultation",
    },
  ],
};

const hero: BrandConfig["hero"] = {
  template: {
    ...autoHeroTemplates.serviceTrust,
    primaryServiceIds: ["maintenance", "repair", "diagnostics"],
  },
  title: "Официальный дилер LADA в Якутске",
  description:
    "ТО, диагностика и ремонт по дилерским регламентам. Оставьте телефон - свяжемся в рабочее время и согласуем визит.",
  eyebrow: "LADA • КОЛМИ • ЯКУТСК",
  mobileDescription: "Официальный дилер LADA. Оставьте телефон — согласуем визит.",
  trustPoints: [
    "Дилерские регламенты LADA",
    "Оригинальные детали и расходные материалы",
    "Согласование работ до начала обслуживания",
  ],
};

const faq: BrandConfig["faq"] = {
  title: "Частые вопросы",
  description:
    "Ответы на базовые вопросы перед предварительной записью в дилерский сервис.",
  items: [
    {
      id: "what-to-choose",
      question: "Что выбрать в заявке, если я не знаю причину обращения?",
      answer:
        "Выберите консультацию или оставьте только телефон. Специалист уточнит симптомы, пробег и удобное время, а затем подскажет, нужна ли диагностика, ТО или ремонт.",
      shortAnswer:
        "Можно оставить только телефон, специалист уточнит детали при звонке.",
      category: "consultation",
      isPrimary: true,
      order: 1,
    },
    {
      id: "maintenance-record",
      question: "Можно ли записаться на плановое ТО через форму?",
      answer:
        "Да. Укажите телефон и выберите ТО в списке услуг. При звонке можно уточнить пробег, комплектацию и удобное время визита.",
      category: "scheduled-service",
      isPrimary: true,
      order: 2,
    },
    {
      id: "diagnostics-before-repair",
      question: "Нужна ли диагностика перед ремонтом?",
      answer:
        "Во многих случаях диагностика помогает точнее определить причину неисправности и согласовать объем работ до начала ремонта.",
      category: "diagnostics",
      isPrimary: true,
      order: 3,
    },
    {
      id: "work-approval",
      question: "Работы согласовываются до начала обслуживания?",
      answer:
        "Да. Объем работ и дальнейшие действия согласуются с клиентом до старта обслуживания или ремонта.",
      category: "process",
      order: 4,
    },
    {
      id: "callback-time",
      question: "Когда со мной свяжутся после заявки?",
      answer:
        "Заявка предварительная. Обычно звонок выполняется в рабочее время сервиса, чтобы подтвердить детали обращения и визит.",
      category: "contact",
      order: 5,
    },
  ],
};

const legal: BrandConfig["legal"] = {
  policyHref: "/privacy",
  policyLabel: "Политика обработки персональных данных",
  backLinkLabel: "На страницу записи",
  privacyPolicyRaw: `ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
Общество с ограниченной ответственностью «Колми»
ООО «Колми»
ИНН 1435196015, КПП 143501001, ОГРН 1071435021954
Фактический адрес:
677007, Российская Федерация, Республика Саха (Якутия), город Якутск, с.
Пригородный, Покровское шоссе, 6 км., д. 1А
Email: kolmi95@mail.ru
Телефон: 8 (4112) 400-888, 400-444, 400-222
Дата публикации: 07.05.26
1. ОБЩИЕ ПОЛОЖЕНИЯ
Настоящая Политика обработки персональных данных определяет порядок
обработки и защиты персональных данных пользователей сайта/лендинга
ООО «Колми».
Политика применяется к персональным данным, которые пользователь
передает через форму заявки на сайте, в том числе при обращении по
вопросам обслуживания, ремонта, диагностики автомобиля или обратного
звонка.
Передавая данные через форму заявки, пользователь подтверждает, что
ознакомился с настоящей Политикой.
2. ОПЕРАТОР ПЕРСОНАЛЬНЫХ ДАННЫХ
Оператором персональных данных является:
Общество с ограниченной ответственностью «Колми»
Сокращенное наименование: ООО «Колми»
ИНН: 1435196015
КПП: 143501001
ОГРН: 1071435021954
Фактический адрес:
677007, Российская Федерация, Республика Саха (Якутия), город Якутск, с.
Пригородный, Покровское шоссе, 6 км., д. 1А
Генеральный директор:
Румянцева Наталья Леонидовна
Email: kolmi95@mail.ru
Телефон: 8 (4112) 400-888, 400-444, 400-222
3. КАКИЕ ПЕРСОНАЛЬНЫЕ ДАННЫЕ ОБРАБАТЫВАЮТСЯ
Оператор может обрабатывать следующие данные пользователя:
- номер телефона;
- тип услуги;
- удобное время для связи;
- комментарий клиента;
- источник заявки;
- дата и время создания заявки;
- иные сведения, которые пользователь самостоятельно указал в форме
заявки.
Оператор не запрашивает через форму специальные категории персональных
данных, включая сведения о здоровье, политических взглядах, религиозных
убеждениях и другие подобные данные.
4. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
Персональные данные обрабатываются для следующих целей:
- прием и обработка заявки пользователя;
- обратная связь с пользователем;
- консультация по услугам автосервиса;
- организация записи на обслуживание, ремонт или диагностику;
- уточнение деталей обращения;
- контроль качества обработки заявок.
5. ПРАВОВЫЕ ОСНОВАНИЯ ОБРАБОТКИ
Обработка персональных данных осуществляется на основании:
- согласия пользователя на обработку персональных данных;
- Федерального закона РФ от 27.07.2006 № 152-ФЗ «О персональных данных»;
- необходимости обработки заявки, направленной пользователем через сайт
6. ДЕЙСТВИЯ С ПЕРСОНАЛЬНЫМИ ДАННЫМИ
Оператор может совершать с персональными данными следующие действия:
- сбор;
- запись;
- систематизация;
- хранение;
- уточнение;
- использование;
- передача внутри организации ответственным сотрудникам;
- удаление;
- уничтожение.
Обработка может осуществляться с использованием средств автоматизации
и без использования таких средств.
7. СРОКИ ОБРАБОТКИ И ХРАНЕНИЯ ПЕРСОНАЛЬНЫХ ДАННЫХ
Персональные данные хранятся в течение срока, необходимого для
обработки заявки и связи с пользователем.
После достижения целей обработки персональные данные подлежат
удалению или обезличиванию, если иное не требуется по закону.
Персональные данные могут храниться до 1 года с момента последнего
обращения пользователя.
8. ПЕРЕДАЧА ПЕРСОНАЛЬНЫХ ДАННЫХ ТРЕТЬИМ ЛИЦАМ
Оператор не передает персональные данные третьим лицам, за исключением
случаев:
- когда передача необходима для обработки заявки пользователя;
- когда передача требуется по закону;
- когда пользователь дал согласие на такую передачу.
Доступ к заявкам могут иметь сотрудники ООО «Колми», ответственные за
обработку обращений клиентов.
9. ПРАВА СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ
Пользователь имеет право:
- получать информацию об обработке своих персональных данных;
- требовать уточнения, блокирования или удаления персональных данных;
- отозвать согласие на обработку персональных данных;
- направить обращение оператору по вопросам обработки персональных
данных;
- защищать свои права в порядке, установленном законодательством РФ.
10. ПОРЯДОК ОТЗЫВА СОГЛАСИЯ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ
ДАННЫХ
Пользователь может отозвать согласие на обработку персональных данных,
направив обращение на email:
kolmi95@mail.ru
В обращении рекомендуется указать номер телефона, который был оставлен
в заявке, и просьбу удалить персональные данные.
После получения обращения оператор прекращает обработку персональных
данных, если отсутствуют законные основания для их дальнейшего хранения.
11. ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ
Оператор принимает необходимые организационные и технические меры для
защиты персональных данных от неправомерного доступа, изменения,
распространения, уничтожения и иных неправомерных действий.
Доступ к персональным данным предоставляется только лицам, которым он
необходим для обработки заявок пользователей.
12. КОНТАКТНАЯ ИНФОРМАЦИЯ ОПЕРАТОРА
ООО «Колми»
Фактический адрес:
677007, Российская Федерация, Республика Саха (Якутия), город Якутск, с.
Пригородный, Покровское шоссе, 6 км., д. 1А
Телефон:
8 (4112) 400-888, 400-444, 400-222
Email:
kolmi95@mail.ru
13. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
Оператор вправе вносить изменения в настоящую Политику. Новая редакция
Политики вступает в силу с момента ее публикации на сайте/лендинге, если
иное не указано в новой редакции.
Актуальная редакция Политики размещается по ссылке:
https://kolmilada.ru/privacy`,
};

const form: BrandConfig["form"] = {
  serviceOptions: toServiceOptions(services.items),
  contactWindowOptions: [
    { value: "today", label: "Сегодня" },
    { value: "tomorrow", label: "Завтра" },
    { value: "worktime", label: "В рабочее время" },
  ],
  copy: {
    eyebrow: "Предварительная запись",
    title: "Заявка на сервис",
    description: "Оставьте телефон. Остальное — по желанию.",
    phoneLabel: "Телефон для связи",
    requiredLabel: "Обязательно",
    optionalLabel: "Необязательно",
    phoneHelperText: "Нужен для подтверждения записи.",
    phoneErrorText: "Укажите телефон полностью.",
    submitLabel: cta.formSubmit.label,
    submittingLabel: cta.formSubmit.submittingLabel,
    mobileCtaMicrocopy: cta.formSubmit.helperText ?? "",
    desktopCtaPoints: cta.formSubmit.desktopHelperPoints,
    legalPrefix:
      "Нажимая кнопку, вы соглашаетесь с обработкой персональных данных в соответствии с",
    legalLinkLabel: "политикой обработки персональных данных",
    successMessage: "Заявка отправлена. Мы свяжемся с вами в рабочее время.",
    errorMessage: "Не удалось отправить заявку. Попробуйте еще раз или позвоните нам.",
    detailsToggleLabel: "Уточнить детали заявки",
    detailsToggleMeta: "Необязательно",
    serviceLegend: "Что нужно",
    serviceLabel: "Услуга",
    contactWindowLegend: "Когда удобно связаться",
    contactWindowLabel: "Когда удобно связаться",
    commentLabel: "Комментарий к заявке",
    commentPlaceholder: "Если хотите, кратко опишите вопрос или неисправность",
    antiAnxietyCopy:
      "Если не уверены в причине обращения — опишите своими словами, мы уточним.",
    mobileStickySubmitLabel:
      cta.mobileStickyPrimary.mobileLabel ?? cta.mobileStickyPrimary.label,
  },
  submission: {
    endpoint: "https://bot.shukland.xyz/webhook/kolmi-service-booking",
    source: "kolmi-landing",
    mockDelayMs: 700,
  },
};

export const kolmiLadaExampleConfig: BrandConfig = {
  id: "kolmi-lada-example",
  locale,
  brand,
  seo: {
    metadataTitleDefault: "КОЛМИ",
    metadataTitleTemplate: "%s | КОЛМИ",
    metadataDescription: "Официальный дилер LADA. Запись на сервис, диагностику и ремонт.",
    servicePageTitle: "Запись на сервис LADA",
    servicePageDescription:
      "ТО, диагностика и ремонт по дилерским регламентам. Оставьте телефон - свяжемся в рабочее время и согласуем визит.",
    privacyPageTitle: "Политика обработки персональных данных",
    privacyPageDescription:
      "Политика обработки персональных данных ООО «Колми» для сайта официального дилера LADA в Якутске.",
  },
  theme: {
    ...themePresets.graphiteOrange.tokens,
    preset: toThemePresetSelection(themePresets.graphiteOrange),
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
    workflowName: "KOLMI Landing API",
    webhookPath: "kolmi-service-booking",
    source: form.submission.source,
    timeZone: locale.timeZone,
    emailSubject: "Новая заявка с лендинга KOLMI LADA",
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
    policyLabel: legal.policyLabel,
  },
};
