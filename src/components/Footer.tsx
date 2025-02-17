import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <p className="text-center">&copy; <Link href="https://slova-po-russki.ru">2025 Слова по-русски</Link><br className="tablet:hidden"/> Все права защищены.</p>
            </div>
        </footer>
    )
}