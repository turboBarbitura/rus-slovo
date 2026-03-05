import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-4">Слова по-русски</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Профессиональная адаптация сайтов под требования 168-ФЗ с сохранением SEO-позиций.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-semibold mb-4">Навигация</h4>
                        <nav className="space-y-2">
                            <Link href="/168-fz" className="block hover:text-white transition-colors">Закон 168-ФЗ</Link>
                            <Link href="/" className="block hover:text-white transition-colors">Услуги и цены</Link>
                            <Link href="/privacy" className="block hover:text-white transition-colors">Политика конфиденциальности</Link>
                        </nav>
                    </div>        
                    <div>
                        <p className="text-sm text-gray-400">
                            © 2026 Слова по-русски. Все права защищены.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}