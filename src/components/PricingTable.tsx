export const PricingTable = () => {
    const plans = [
        { name: 'Базовый', price: 'от 990 ₽', features: ['До 10 страниц', 'Стандартная проверка'] },
        { name: 'Стандарт', price: 'от 1990 ₽', features: ['До 50 страниц', 'Детальная проверка', 'Сертификат соответствия'] },
        { name: 'Профессиональный', price: 'по запросу', features: ['Без ограничений', 'Приоритетная обработка', 'Экспертная консультация'] }
    ]

    return (
        <section id="pricing" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Наши цены</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="border rounded-lg p-4 text-center">
                            <h3>{plan.name}</h3>
                            <p className="text-2xl font-bold">{plan.price}</p>
                            <ul className="list-disc list-inside mt-4">
                                {plan.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}