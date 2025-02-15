export const WhyUs = () => {
    return (
        <section id="why-us" className="py-10 laptop:py-16">
            <div className="container mx-auto px-4 max-w-[900px]">
                <h2 className="text-lg laptop:text-2xl font-bold text-center mb-8">Почему мы?</h2>

                {/* Преимущества */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="border border-gray-300 rounded-lg p-6 text-center">
                        <h3 className="text-lg laptop:text-2xl mb-4">Профессиональная команда</h3>
                        <p>Наша небольшая команда веб-разработчиков имеет более 5 лет опыта успешной работы в различных сегментах онлайн-бизнеса.</p>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-6 text-center">
                        <h3 className="text-lg laptop:text-2xl mb-4">Прозрачное ценообразование</h3>
                        <p>Работаем напрямую с клиентами без посредников, что позволяет предлагать конкурентоспособные цены. Вы платите только за фактически выполненную работу.</p>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-6 text-center">
                        <h3 className="text-lg laptop:text-2xl mb-4">Безопасная оплата</h3>

                            <p>Оплата производится поэтапно:</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>10% предоплаты после заключения договора</li>
                                <li>90% после демонстрации результатов</li>
                            </ul>

                    </div>

                    <div className="border border-gray-300 rounded-lg p-6 text-center">
                        <h3 className="text-lg laptop:text-2xl mb-4">Гарантия качества</h3>
                        <p>Каждый проект проходит тщательную проверку. Мы гарантируем полное соответствие федеральному закону №53-ФЗ и использование нормативных словарей.</p>
                    </div>
                </div>

                {/* Как это работает */}
                <div className="mt-16">
                    <h3 className="text-lg laptop:text-2xl font-bold mb-8">Как мы работаем</h3>
                    <ol className="list-decimal list-inside">
                        <li className="mb-4"><strong>Проверка сайта:</strong> Проводим детальный анализ вашего ресурса на наличие несоответствий закону о государственном языке</li>
                        <li className="mb-4"><strong>Согласование стоимости:</strong> Предоставляем подробную смету работ с учетом объема контента</li>
                        <li className="mb-4"><strong>Заключение договора:</strong> Подписываем официальный договор на оказание услуг</li>
                        <li className="mb-4"><strong>Предоплата 10%:</strong> После подписания договора вы вносите небольшой аванс</li>
                        <li className="mb-4"><strong>Выполнение работ:</strong> Наши специалисты проводят замену англицизмов на русские аналоги</li>
                        <li className="mb-4"><strong>Демо-встреча:</strong> Организуем онлайн-демонстрацию выполненной работы</li>
                        <li className="mb-4"><strong>Финальный расчет:</strong> После одобрения результатов вы перечисляете оставшуюся сумму</li>
                        <li><strong>Передача материалов:</strong> Предоставляем обновленные исходники или размещаем их на вашем сервере</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}