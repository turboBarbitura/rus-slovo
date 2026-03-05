import { Metadata } from 'next';
import Link from 'next/link';

import {
  ChartBarIcon, 
  ClockIcon, 
  AcademicCapIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import CostCalculator from '@/components/CostCalculator';
import LeadForm from '@/components/LeadForm';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Адаптация сайта под закон 168-ФЗ с гарантией SEO | Слова по-русски',
  description: 'Штрафы до 500 000 ₽ за иностранные слова с 1 марта 2026. Адаптируем сайт под 168-ФЗ без потери трафика. Более 800 успешных проектов. Бесплатный аудит за 24 часа.',
  keywords: '168-ФЗ, адаптация сайта, иностранные слова, штрафы, SEO, русификация сайта',
};

const faqData = [
  {
    question: 'Нужно ли убирать английские слова полностью, даже если это иконка?',
    answer: 'Нет, закон требует понятности для потребителя. Английские слова можно использовать, если они дублируются на русском (например, в сноске или подсказке). Мы находим баланс между дизайном и требованиями закона, чтобы сохранить эстетику сайта.'
  },
  {
    question: 'Что делать, если мой бренд зарегистрирован на английском (например, «Black Bunny»)?',
    answer: 'Товарные знаки на латинице — исключение. Закон их не запрещает. Однако сопроводительный текст (описание, характеристики) должен быть на русском. В отчете мы помечаем такие зоны как «безопасные».'
  },
  {
    question: 'Как адаптация повлияет на трафик? Не выпаду ли я из выдачи?',
    answer: 'Это главный страх наших клиентов. Мы не просто переводим, мы делаем рерайт с сохранением семантики. В 95% случаев позиции остаются неизменными или растут.'
  },
  {
    question: 'Вы даете гарантию, что штрафа не будет?',
    answer: 'Мы даем гарантию соответствия вашего сайта букве закона на момент сдачи работ.'
  }
];

// JSON-LD микроразметка для FAQ
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

export default function HomePage() {
  const siteCount = 72
  return (
    <main className="min-h-screen bg-cream-50">
      {/* JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <span>С 1 марта 2026 года штрафы до 500 000 ₽</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Адаптируйте сайт под 168-ФЗ{' '}
              <span className="text-accent-400">без потери трафика</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-3xl mx-auto">
              Единственный сервис в РФ, который дает гарантию сохранности ваших SEO-позиций после лингвистической экспертизы.
            </p>
            
            <p className="text-2xl md:text-3xl font-bold text-white mb-10">
              Уже адаптировали <span className="text-accent-400">{siteCount}</span> сайта
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#lead-form"
                className="max-w-[500px] w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Бесплатный аудит за 24 часа
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#calculator"
                className="max-w-[500px] w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all hover:bg-white/10"
              >
                Калькулятор стоимости
              </Link>
            </div>
            
            <p className="mt-4 text-sm text-gray-300">
              Не нужно ждать — узнайте цену за 1 минуту
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section id="calculator" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Рассчитайте стоимость приведения сайта в соответствие с 168-ФЗ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наш калькулятор — это не просто цена, это подбор стратегии под ваш бизнес
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Нам доверяют крупнейшие бренды и бизнес по всей России
            </h2>
            
            {/* Счётчик */}
            <div className="inline-flex flex-col items-center bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <span className="text-5xl md:text-7xl font-bold text-primary-700 mb-2">{siteCount}</span>
              <span className="text-gray-600 font-medium">сайта уже защищены от штрафов</span>
              <span className="text-xs text-gray-400 mt-1">
                {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>

          {/* Логотипы клиентов (заглушки) */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {['ТехноРай', 'Шеф-хаус', 'White Lotus', 'Red Hills Sochi', 'Траст-Капитал', 'PlusCloud'].map((name) => (
              <div 
                key={name} 
                className="h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-medium hover:bg-gray-200 transition-colors"
              >
                {name}
              </div>
            ))}
          </div> */}

          {/* Кейс и видеоотзыв */}
          {/* <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-cream-50 p-8 rounded-2xl border border-stone-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Кейс: Интернет-магазин электроники</h3>
              <p className="text-gray-600 mb-4">
                После адаптации и A/B-тестирования новых текстов трафик не упал, а вырос на 
                <span className="text-green-600 font-bold text-lg"> +8%</span> за счет улучшения поведенческих факторов.
              </p>
              <p className="text-sm text-gray-500">Позиции по коммерческим запросам сохранены</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-white/20 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
                <blockquote className="text-lg italic mb-4">
                  "Мы боялись, что придется менять вывески и названия блюд. Команда предложила элегантные решения с дубляжем и сносками. Уложились в 4 дня."
                </blockquote>
                <div>
                  <p className="font-semibold">Алексей Смирнов</p>
                  <p className="text-sm text-gray-400">Директор сети ресторанов «Шеф-хаус»</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 md:py-28 bg-cream-50 relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-100/40 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Заголовок секции */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
              <ChartBarIcon className="w-4 h-4" />
              Процесс работы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Как мы адаптируем сайт, чтобы{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-800">
                Google и Яндекс
              </span>{' '}
              не заметили подмены
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Четыре простых шага от аудита до полной защиты от штрафов
            </p>
          </div>

          {/* Сетка шагов */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { num: '01', title: 'Бесплатный аудит', desc: 'Сканируем сайт на наличие англицизмов и оцениваем объём работ' },
              { num: '02', title: 'Точная смета', desc: 'Фиксируем цену в договоре — никаких скрытых платежей и доплат' },
              { num: '03', title: 'Финальная проверка', desc: 'Юридический аудит и детальный отчёт о выполненных работах' },
              { num: '04', title: 'Постгарантийное сопровождение', desc: 'Отвечаем на вопросы ФАС и помогаем 3 месяца после сдачи' },
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-stone-100 overflow-hidden"
              >
                {/* Верхняя акцентная полоса */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-400" />
                
                {/* Контент */}
                <div>
                  {/* Номер шага */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl lg:text-6xl font-black text-primary-100 leading-none">
                      {step.num}
                    </span>
                    {/* <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                      <ArrowRightIcon className="w-5 h-5 text-primary-600" />
                    </div> */}
                  </div>
                  
                  {/* Заголовок и описание */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Декоративный уголок */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-400/10 rounded-full blur-2xl" />
              </div>
            ))}
          </div>

          {/* Соединительные линии (только на десктопе) */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 w-3/4 max-w-4xl">
            <div className="flex justify-between px-12">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-24 h-0.5 bg-gradient-to-r from-primary-200 to-accent-200" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Мы берем на себя риски, а вы получаете чистый сайт
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Письменная гарантия SEO</h3>
              <p className="text-sm text-gray-600">Если трафик упадет — вернем деньки и бесплатно исправим</p>
            </div> */}

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckBadgeIcon className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Все платформы</h3>
              <p className="text-sm text-gray-600">1С-Битрикс, WordPress, Shopify, OpenCart, самописные решения</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Тройная экспертиза</h3>
              <p className="text-sm text-gray-600">Лингвисты, разработчики и юристы, специализирующиеся на 168-ФЗ</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Прозрачное ценообразование</h3>
              <p className="text-sm text-gray-600">10% предоплата, остальное — по факту. Никаких скрытых платежей</p>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY SECTION */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50 border-y border-red-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Время вышло: 168-ФЗ уже работает
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 mb-8">
            <p className="mb-4">
              С 1 марта 2026 года Федеральный закон № 168-ФЗ вступил в полную силу. 
              Роскомнадзор и ФАС уже начали мониторинг сайтов.
            </p>
            <p className="font-semibold text-red-700 text-xl">
              Штрафы для юридических лиц — от 100 000 до 500 000 рублей 
              за каждый выявленный факт нарушения.
            </p>
          </div>
          <Link 
            href="/168-fz"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 underline underline-offset-4"
          >
            Подробный разбор закона 168-ФЗ
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="lead-form" className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <LeadForm />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Часто задаваемые вопросы
          </h2>
          <FAQAccordion items={faqData} />
        </div>
      </section>

    </main>
  );
}
