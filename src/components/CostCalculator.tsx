'use client';

import { useState, useMemo } from 'react';
import { CheckIcon, CalculatorIcon } from '@heroicons/react/24/outline';

type SiteType = 'landing' | 'corporate' | 'shop' | 'marketplace' | 'custom';
type UrgencyType = 'base' | 'vip';

interface CalculationState {
  siteType: SiteType | '';
  extras: string[];
  urgency: UrgencyType;
}

export default function CostCalculator() {
  const [state, setState] = useState<CalculationState>({
    siteType: '',
    extras: [],
    urgency: 'base',
  });

  const basePrices: Record<SiteType, number> = {
    landing: 15000,
    corporate: 35000,
    shop: 65000,
    marketplace: 100000,
    custom: 80000,
  };

  const siteTypeLabels: Record<SiteType, string> = {
    landing: 'Лендинг / Визитка (до 5 стр.)',
    corporate: 'Сайт услуг / Корпоративный сайт',
    shop: 'Интернет-магазин (до 1000 товаров)',
    marketplace: 'Интернет-магазин (1000+) / Маркетплейс',
    custom: 'Уникальный дизайн / Сложная CMS',
  };

  const calculatedPrice = useMemo(() => {
    if (!state.siteType) return 0;
    
    let base = basePrices[state.siteType];
    let multiplier = 1;

    if (state.extras.includes('app')) multiplier += 0.3;
    if (state.extras.includes('email')) multiplier += 0.15;
    if (state.extras.includes('print')) multiplier += 0.2;
    if (state.urgency === 'vip') multiplier += 0.3;

    return Math.round(base * multiplier);
  }, [state]);

  const toggleExtra = (extra: string) => {
    setState(prev => ({
      ...prev,
      extras: prev.extras.includes(extra)
        ? prev.extras.filter(e => e !== extra)
        : [...prev.extras, extra]
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-stone-200">
      <div className="flex items-center gap-3 mb-8">
        <CalculatorIcon className="w-8 h-8 text-primary-700" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Рассчитайте стоимость адаптации
        </h2>
      </div>

      {/* Шаг 1: Тип сайта */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          1. Тип сайта <span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {(Object.keys(siteTypeLabels) as SiteType[]).map((type) => (
            <label
              key={type}
              className={`relative flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                state.siteType === type
                  ? 'border-primary-700 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="siteType"
                value={type}
                checked={state.siteType === type}
                onChange={(e) => setState(prev => ({ ...prev, siteType: e.target.value as SiteType }))}
                className="sr-only"
              />
              <div className="flex-1">
                <span className="block font-medium text-gray-900">
                  {siteTypeLabels[type]}
                </span>
                <span className="text-sm text-gray-500">
                  от {basePrices[type].toLocaleString('ru-RU')} ₽
                </span>
              </div>
              {state.siteType === type && (
                <CheckIcon className="w-5 h-5 text-primary-700 absolute right-4" />
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Шаг 2: Дополнительные каналы */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          2. Дополнительные каналы
        </h3>
        <div className="space-y-3">
          {[
            { id: 'app', label: 'Мобильное приложение', extra: '+30%' },
            { id: 'email', label: 'Email-рассылки и скрипты', extra: '+15%' },
            { id: 'print', label: 'Полиграфия и вывески', extra: '+20%' },
          ].map((item) => (
            <label
              key={item.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary-300 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={state.extras.includes(item.id)}
                  onChange={() => toggleExtra(item.id)}
                  className="w-5 h-5 text-primary-700 rounded focus:ring-primary-700 border-gray-300"
                />
                <span className="text-gray-700">{item.label}</span>
              </div>
              <span className="text-sm font-medium text-accent-500">{item.extra}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Шаг 3: Срочность */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          3. Срочность
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          {[
            { value: 'base', label: 'Базовый (7-10 дней)', extra: 'базовая цена' },
            { value: 'vip', label: 'VIP (старт за 24 часа)', extra: '+30%' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex-1 relative flex flex-col p-4 rounded-lg border-2 cursor-pointer transition-all ${
                state.urgency === option.value
                  ? 'border-primary-700 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="urgency"
                value={option.value}
                checked={state.urgency === option.value}
                onChange={(e) => setState(prev => ({ ...prev, urgency: e.target.value as UrgencyType }))}
                className="sr-only"
              />
              <span className="font-medium text-gray-900">{option.label}</span>
              <span className="text-sm text-gray-500">{option.extra}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Результат */}
      <div className="bg-cream-100 rounded-xl p-6 border border-stone-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Ориентировочная стоимость:</p>
            <p className="text-4xl font-bold text-primary-800">
              {calculatedPrice > 0 
                ? `от ${calculatedPrice.toLocaleString('ru-RU')} ₽` 
                : 'Выберите тип сайта'}
            </p>
            {calculatedPrice > 0 && (
              <p className="text-xs text-gray-500 mt-2">
                Для точного расчета необходим анализ уникальных формулировок бренда
              </p>
            )}
          </div>
          <button 
            className="w-full md:w-auto px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            onClick={() => {
              const element = document.getElementById('lead-form');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Оставить заявку на точный расчет
          </button>
        </div>
      </div>
    </div>
  );
}