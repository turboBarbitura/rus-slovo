export const HowItWorks = () => {
    const steps = [
        { number: 1, description: 'Анализ содержимого сайта' },
        { number: 2, description: 'Выявление несоответствий' },
        { number: 3, description: 'Предложение русских аналогов' },
        { number: 4, description: 'Корректировка текстов' },
        { number: 5, description: 'Финальная проверка' }
    ]

    return (
        <section id="how-it-works" className="py-16 bg-gray-100 text-gray-700">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Как это работает</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <span className="text-2xl font-bold block">{step.number}</span>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
