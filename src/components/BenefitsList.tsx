import Image from 'next/image';

export function BenefitsList() {
    const benefits = [
        { icon: '/analysis.svg', title: 'Комплексный анализ текстов' },
        { icon: '/linguist.svg', title: 'Работа сертифицированных лингвистов' },
        { icon: '/dictionary.svg', title: 'Использование нормативных словарей' },
        { icon: '/law.svg', title: 'Соответствие федеральному закону №53-ФЗ' },
        { icon: '/clock.svg', title: 'Соблюдение сроков' }
    ];

    return (
        <section id="benefits" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Наши преимущества</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center">
                            <Image
                                src={benefit.icon}
                                alt={benefit.title}
                                width={48}
                                height={48}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-medium">{benefit.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}