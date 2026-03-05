'use client';

import { useState } from 'react';
import { EnvelopeIcon, LinkIcon, PhoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';
import { Bounce, toast } from 'react-toastify';
import Link from 'next/link';

interface FormData {
  name: string;
  url: string;
  email: string;
  phone: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    url: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.url || !formData.email || !agreed) return;
    
    setIsSubmitting(true);
    
    const templateParams = {
      name: formData.name || 'Не указано',
      phone: formData.phone || 'Не указан',
      email: formData.email,
      website: formData.url,
      comment: 'Заявка на бесплатный аудит',
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      );

      toast('Заявка успешно отправлена!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
        progressClassName: 'progress',
        className: 'my_toast_body',
      });

      setIsSuccess(true);
      setFormData({ name: '', url: '', email: '', phone: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('FAILED...', error);
      toast('Произошла ошибка при отправке заявки. Попробуйте позже.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-stone-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Получите бесплатный аудит
      </h3>
      <p className="text-gray-600 text-center mb-8">
        Проверим ваш сайт и пришлем отчет с рекомендациями
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
          {/* Скрытое поле name для совместимости с шаблоном emailjs */}
          <input
            type="hidden"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
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

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 text-accent-500 border-gray-300 rounded focus:ring-accent-500"
            />
            <span className="text-xs text-gray-600">
              Я даю{' '}
              <Link href="/privacy" target="_blank" className="text-accent-600 hover:text-accent-700 underline">
                согласие на обработку персональных данных
              </Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting || !agreed}
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