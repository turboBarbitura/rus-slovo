import { Metadata } from 'next';
import Link from 'next/link';

import { 
  ExclamationTriangleIcon, 
  ScaleIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldExclamationIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Закон 168-ФЗ о русском языке: полный разбор для бизнеса 2026',
  description: 'Полный разбор закона 168-ФЗ от 24.06.2025. Штрафы до 500 000 ₽ с 1 марта 2026. Что подпадает под закон, исключения, требования к сайтам и вывескам. Бесплатный аудит.',
  keywords: '168-ФЗ, закон о русском языке 2026, штрафы за англицизмы, адаптация сайта под закон, требования к вывескам',
};

const faqData = [
  {
    question: 'Нужно ли переводить название бренда (Apple или Nike), если я продаю их товары?',
    answer: 'Нет, это зарегистрированные товарные знаки. Но описание товара, его характеристики и ценник должны быть на русском.'
  },
  {
    question: 'Что делать с меню ресторана, где "Цезарь" и "Фетучини"?',
    answer: 'Названия блюд, ставшие международными или не имеющие аналогов (этнические блюда), можно оставить. Но состав блюда, цена и описание должны быть на русском. Лучше писать: "Паста Фетучини с курицей".'
  },
  {
    question: 'У меня интернет-магазин. Нужно ли переводить названия разделов "Cart" и "Wish list"?',
    answer: 'Да, обязательно. Кнопки и навигация — это информация для потребителя. Замените на "Корзина" и "Избранное".'
  },
  {
    question: 'Как быть с IT-терминами (USB, 4G, Bluetooth)?',
    answer: 'Это техническая терминология, признанная исключением. Их можно использовать.'
  },
  {
    question: 'Распространяется ли закон на посты в соц. сетях?',
    answer: 'Да, если в посте вы информируете о ценах, условиях доставки, проводите конкурс с правилами. Личные блоги без коммерции — вне зоны риска, но малейший намек на предпринимательскую деятельность — и пост должен быть на русском.'
  },
  {
    question: 'Мы только готовим вывеску. Надо ли регистрировать товарный знак?',
    answer: 'Если вы хотите использовать название на латинице (например, "John\'s Pizza") и не хотите каждый раз добавлять перевод "Пиццерия Джона" крупным шрифтом, регистрация товарного знака — единственный способ обезопасить себя.'
  },
  {
    question: 'Что будет, если русский текст есть, но он меньше английского?',
    answer: 'Это нарушение принципа равнозначности. ФАС может посчитать это попыткой ввести потребителя в заблуждение и выписать штраф за ненадлежащую рекламу.'
  },
  {
    question: 'Отвечает ли подрядчик (дизайнер, программист) за нарушения?',
    answer: 'Нет. Ответственность всегда несет собственник бизнеса (рекламодатель, владелец сайта).'
  }
];

// JSON-LD для FAQ
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

// JSON-LD для статьи
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Закон 168-ФЗ о русском языке: полный разбор для бизнеса 2026',
  datePublished: '2025-06-24',
  dateModified: '2026-03-03',
  author: {
    '@type': 'Organization',
    name: 'Слова по-русски'
  }
};

export default function LawPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Микроразметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white">
        {/* Декоративные элементы (круги как на референсе) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <ExclamationTriangleIcon className="w-4 h-4 text-accent-400" />
              <span>Штрафы с 1 марта 2026 года</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Закон 168‑ФЗ о русском языке: <span className="text-accent-400">полный разбор для бизнеса</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              С 1 марта 2026 года вступают в силу поправки, которые обязывают бизнес дублировать на русском языке любую публичную информацию — от вывески кафе до интерфейса мобильного приложения. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#order-form"
                className="max-w-[500px] w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Бесплатный аудит сайта
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#faq"
                className="max-w-[500px] w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all hover:bg-white/10"
              >
                Читать FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Хронология принятия закона
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Вертикальная линия */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-accent-400" />
              
              <div className="space-y-8">
                {/* Этап 1 */}
                <div className="relative flex items-start gap-6 md:gap-0">
                  <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-cream-50 p-5 rounded-xl border border-stone-200 inline-block text-left">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">17 июня 2025</h3>
                      <p className="text-gray-600 text-sm">Принят Госдумой</p>
                      <p className="text-gray-500 text-sm mt-2">Закон проходит первое чтение и принят в целом</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full border-4 border-white shadow-md z-10 mt-1.5" />
                  <div className="md:hidden ml-12 flex-1">
                    <div className="bg-cream-50 p-5 rounded-xl border border-stone-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">17 июня 2025</h3>
                      <p className="text-gray-600 text-sm">Принят Госдумой</p>
                      <p className="text-gray-500 text-sm mt-2">Закон проходит первое чтение и принят в целом</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-12" />
                </div>

                {/* Этап 2 */}
                <div className="relative flex items-start gap-6 md:gap-0">
                  <div className="hidden md:block md:w-1/2 md:pr-12" />
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full border-4 border-white shadow-md z-10 mt-1.5" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12 flex-1">
                    <div className="bg-cream-50 p-5 rounded-xl border border-stone-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">24 июня 2025</h3>
                      <p className="text-gray-600 text-sm">Подписан президентом</p>
                      <p className="text-gray-500 text-sm mt-2">Официальное опубликование и начало подготовительного периода</p>
                    </div>
                  </div>
                </div>

                {/* Этап 3 */}
                <div className="relative flex items-start gap-6 md:gap-0">
                  <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-red-50 p-5 rounded-xl border border-red-200 inline-block text-left">
                      <h3 className="text-lg font-bold text-red-700 mb-1">1 марта 2026</h3>
                      <p className="text-red-600 text-sm font-medium">Вступление в силу</p>
                      <p className="text-red-500 text-sm mt-2">Основные положения вступают в силу. Начало проверок Роспотребнадзором и ФАС.</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg z-10 mt-1" />
                  <div className="md:hidden ml-12 flex-1">
                    <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                      <h3 className="text-lg font-bold text-red-700 mb-1">1 марта 2026</h3>
                      <p className="text-red-600 text-sm font-medium">Вступление в силу</p>
                      <p className="text-red-500 text-sm mt-2">Основные положения вступают в силу. Начало проверок Роспотребнадзором и ФАС.</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE SECTION (Таблица сферы применения) */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Сфера применения: что под закон, а что — нет
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Закон 168-ФЗ вносит изменения в статью 10.1 Закона о защите прав потребителей. Ключевой критерий — информация предназначена для публичного ознакомления.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto shadow-xl rounded-xl bg-white">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-primary-800 text-white">
                  <th className="p-4 text-left font-semibold w-1/2">Что подпадает под закон</th>
                  <th className="p-4 text-left font-semibold w-1/2">Что исключено из требований</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-800"><span className="font-medium text-red-600 mr-2">•</span>Сайты в интернете (товары, услуги, описания)</td>
                  <td className="p-4 text-gray-600"><span className="font-medium text-green-600 mr-2">•</span>Зарегистрированные товарные знаки (со свидетельством Роспатента)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-800"><span className="font-medium text-red-600 mr-2">•</span>Мобильные приложения (UI, push-уведомления)</td>
                  <td className="p-4 text-gray-600"><span className="font-medium text-green-600 mr-2">•</span>Фирменные наименования юрлиц (как в ЕГРЮЛ)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-800"><span className="font-medium text-red-600 mr-2">•</span>Социальные сети (коммерческие посты, акции)</td>
                  <td className="p-4 text-gray-600"><span className="font-medium text-green-600 mr-2">•</span>Научная терминология (USB, Wi-Fi)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-800"><span className="font-medium text-red-600 mr-2">•</span>Маркетплейсы (карточки товаров, инфографика)</td>
                  <td className="p-4 text-gray-600"><span className="font-medium text-green-600 mr-2">•</span>Внутренние документы (непубличные)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-800"><span className="font-medium text-red-600 mr-2">•</span>Вывески и таблички (режим работы, вход/выход)</td>
                  <td className="p-4 text-gray-600"><span className="font-medium text-green-600 mr-2">•</span>Объекты недвижимости до 01.03.2026</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-800"><span className="font-medium text-red-600 mr-2">•</span>Email-рассылки и реклама</td>
                  <td className="p-4 text-gray-600"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="max-w-3xl mx-auto mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
            <BookOpenIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              <strong>Важно:</strong> Если домен состоит из иностранного слова (например, mymorningcoffee.ru), он может быть признан нарушением, если не дублируется русским названием на самом сайте.
            </p>
          </div>
        </div>
      </section>

      {/* EQUALITY REQUIREMENTS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Ключевое требование — равнозначность
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Недостаточно просто добавить мелкий перевод "для галочки". Закон требует, чтобы русский текст был идентичен по смыслу и оформлению.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto shadow-xl rounded-xl bg-white border border-gray-200">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left font-semibold">Параметр</th>
                  <th className="p-4 text-left font-semibold">Требование закона</th>
                  <th className="p-4 text-left font-semibold text-red-200">Типичное нарушение</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Шрифт</td>
                  <td className="p-4 text-gray-700">Не мельче, чем у иностранного текста</td>
                  <td className="p-4 text-red-600 text-sm">Русский текст микроскопическим шрифтом в подвале</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Цвет</td>
                  <td className="p-4 text-gray-700">Контрастный, читаемый</td>
                  <td className="p-4 text-red-600 text-sm">Серый перевод на белом фоне, когда оригинал яркий</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Расположение</td>
                  <td className="p-4 text-gray-700">Русский текст должен быть первым (слева или сверху)</td>
                  <td className="p-4 text-red-600 text-sm">Иностранное слово крупно по центру, русский сбоку</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Содержание</td>
                  <td className="p-4 text-gray-700">Полное и точное соответствие смысла</td>
                  <td className="p-4 text-red-600 text-sm">"Sale 50%" в английской версии, "Скидки" в русской</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-3xl mx-auto mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <ExclamationTriangleIcon className="w-5 h-5" />
              Запрет транслитерации
            </h4>
            <p className="text-red-800">
              Использовать русские слова, записанные латиницей, тоже запрещено. Нельзя написать на вывеске "KOFI", если вы имеете в виду кофе. Только кириллица или зарегистрированный товарный знак.
            </p>
          </div>
        </div>
      </section>

      {/* MATERIALS LIST */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Полный перечень материалов под прицелом
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Онлайн */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
              <h3 className="text-xl font-bold text-primary-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-lg">🌐</span>
                Онлайн-пространство
              </h3>
              <ul className="space-y-3">
                {[
                  'Веб-сайты (хедер, меню, кнопки, описания, формы)',
                  'Мобильные приложения (UI, онбординг, push-уведомления)',
                  'Социальные сети (коммерческие посты, акции)',
                  'Маркетплейсы (карточки товаров, инфографика)',
                  'Email-рассылки (тема и тело письма)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Офлайн */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
              <h3 className="text-xl font-bold text-primary-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-lg">🏪</span>
                Офлайн-пространство
              </h3>
              <ul className="space-y-3">
                {[
                  'Вывески и входные группы (название, режим работы)',
                  'Торговый зал (ценники, плакаты, меню, буклеты)',
                  'Навигация (указатели, схемы эвакуации)',
                  'Упаковка (этикетки, инструкции)',
                  'Полиграфия (визитки, флаеры для клиентов)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PENALTIES SECTION */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Ответственность и штрафы: сколько стоит забывчивость
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Отдельной статьи КоАП пока не ввели, но надзорные органы применяют действующие нормы, что создает серьезные риски.
          </p>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[600px] bg-white/5 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white/10 border-b border-white/20">
                  <th className="p-4 text-left font-semibold">Нарушитель</th>
                  <th className="p-4 text-left font-semibold text-yellow-400">Ст. 14.3 КоАП (ФАС)</th>
                  <th className="p-4 text-left font-semibold text-yellow-400">Ст. 14.8 КоАП (Роспотребнадзор)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5">
                  <td className="p-4">Должностные лица (ИП)</td>
                  <td className="p-4 text-red-400 font-bold">от 4 000 до 20 000 ₽</td>
                  <td className="p-4">от 500 до 1 000 ₽</td>
                </tr>
                <tr className="hover:bg-white/5 bg-red-500/10">
                  <td className="p-4 font-bold">Юридические лица</td>
                  <td className="p-4 text-red-400 font-bold text-lg">от 100 000 до 500 000 ₽</td>
                  <td className="p-4">от 5 000 до 10 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-3xl mx-auto mt-8 p-6 bg-red-500/20 border border-red-500/30 rounded-xl">
            <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
              <ShieldExclamationIcon className="w-6 h-6" />
              Критический нюанс
            </h4>
            <p className="text-gray-300">
              Штраф может быть наложен <strong>за каждый случай нарушения</strong>. Если в интернет-магазине 1000 карточек товаров с описанием только на английском — это потенциально 1000 поводов для штрафа. Риск многомиллионных санкций реален.
            </p>
          </div>
        </div>
      </section>

      {/* EXCEPTIONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Исключения: разбираем сложные моменты
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-green-50 border border-green-200 rounded-xl">
              <CheckCircleIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-900 mb-2">Зарегистрированные товарные знаки</h3>
                <p className="text-green-800 text-sm leading-relaxed">
                  Если у вас есть свидетельство Роспатента, вы можете использовать логотип и название бренда в том виде, в каком они зарегистрированы. <strong>Важно:</strong> регистрация занимает от 7 до 18 месяцев. Если свидетельства нет — название на латинице является нарушением.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <BookOpenIcon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Слова, вошедшие в словари</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Слова, ставшие частью русского языка (например, "блогер", "трафик", "лидер") разрешены. Если сомневаетесь, сверяйтесь с орфографическим словарем РАН.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <ScaleIcon className="w-8 h-8 text-gray-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Внутренние документы</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Требования не касаются внутреннего документооборота компании, если он не предназначен для клиентов (переписка с поставщиками, внутренние инструкции).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 53-FZ CONNECTION */}
      <section className="py-16 bg-cream-50 border-y border-stone-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Связь с 53-ФЗ: что было раньше?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Предыдущий закон «О государском языке РФ» № 53-ФЗ декларировал необходимость использования русского языка в рекламе и СМИ. Однако на практике он применялся редко.
          </p>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-primary-600 text-left">
            <p className="text-gray-800 font-medium">
              <strong>168-ФЗ конкретизировал эти требования</strong> и внес прямые поправки в Закон «О защите прав потребителей». Теперь обязанность писать по-русски стала не абстрактной, а вполне конкретной, с четкими критериями равнозначности и подкрепленной полномочиями Роспотребнадзора.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Ответы на ключевые вопросы владельцев бизнеса
          </p>
          <FAQAccordion items={faqData} />
        </div>
      </section>

      {/* CTA / ORDER FORM */}
      <section id="order-form" className="py-16 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Бесплатный аудит вашего сайта на соответствие 168-ФЗ
            </h2>
            <p className="text-lg text-gray-200">
              Штрафы уже с 1 марта 2026 года могут достигать <span className="text-accent-400 font-bold">500 000 рублей</span> за каждый факт нарушения. 
            </p>
          </div>
          
          {/* Используем существующую форму, но с темным фоном */}
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 text-gray-900">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">Проверить сайт за 24 часа</h3>
              <p className="text-sm text-gray-600 mt-2">Мы пришлем чек-лист того, что нужно исправить</p>
            </div>
            
            {/* Здесь можно вставить OrderForm или сделать упрощенную версию */}
            <div className="space-y-4">
             <LeadForm />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="http://publication.pravo.gov.ru/document/0001202506240035"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm underline underline-offset-4"
            >
              <ScaleIcon className="w-4 h-4" />
              Ссылка на официальный источник: Федеральный закон от 24.06.2025 № 168-ФЗ
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
