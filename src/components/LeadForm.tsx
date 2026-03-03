'use client';

import { useState } from 'react';
import { EnvelopeIcon, LinkIcon, PhoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface FormData {
  url: string;
  email: string;
  phone: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    url: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.url || !formData.email) return;
    
    setIsSubmitting(true);
    
    // Имитация отправки на API
    console.log('Lead form submitted:', formData);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ url: '', email: '', phone: '' });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-stone-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Получите бесплатный аудит за 24 часа
      </h3>
      <p className="text-gray-600 text-center mb-8">
        Проверим ваш сайт по 25 параметрам и пришлем PDF-отчет с рекомендациями
      </p>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="text-lg font-semibold text-green-900 mb-2">Заявка отправлена!</h4>
          <p className="text-green-700">Мы свяжемся с вами в течение 24 часов.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              URL сайта <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                id="url"
                required
                placeholder="https://vash-site.ru"
                value={formData.url}
                onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                required
                placeholder="info@company.ru"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Телефон <span className="text-gray-400 text-sm">(опционально)</span>
            </label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                placeholder="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <PaperAirplaneIcon className="w-5 h-5" />
                Отправить заявку
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
            <span className="text-green-500">✓</span> Не передаем данные третьим лицам
            <span className="mx-2">•</span>
            <span className="text-green-500">✓</span> Без спама
          </p>
        </form>
      )}
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}