import {Button} from "@/components/Button";

export const HeroSection = () => {
    return (
        <section id="hero" className="bg-blue-50 py-10 tablet:py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-xl  laptop:text-4xl font-bold bg-blue-gradient bg-clip-text text-transparent">Адаптация Вашего сайта
                    <br className="hidden tablet:inline"/> под
                    <br className="tablet:hidden"/> Федеральный закон № 53-Ф3 <br/>«О государственном языке Российской Федерации»  </h1>
                <p className="text-lg laptop:text-2xl my-6 text-black">Замена иностранных слов на русские <br className="tablet:hidden"/> без потери смысла</p>
                <Button>Оставить заявку</Button>
            </div>
        </section>
    )
}
