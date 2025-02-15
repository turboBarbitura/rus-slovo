export const Testimonials = () => {
    const testimonials = [
        { name: 'Иван Иванов', position: 'CEO компании X', quote: 'Отличная работа! Все англицизмы были успешно заменены.' },
        { name: 'Мария Петрова', position: 'Маркетолог', quote: 'Сайт стал более профессиональным после русификации.' },
        { name: 'Александр Сергеев', position: 'PR-менеджер', quote: 'Рекомендую всем, кто заботится о соответствии законодательству.' }
    ]

    return (
        <section id="testimonials" className="py-16 bg-gray-200 text-gray-700">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Что говорят наши клиенты</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                            <p className="italic">{testimonial.quote}</p>
                            <p className="font-bold mt-2">{testimonial.name}</p>
                            <p>{testimonial.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}