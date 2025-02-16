import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <p className="text-center">&copy; <Link href="https://рус-слово.рф">2025 Рус-слово.рф.</Link><br className="tablet:hidden"/> Все права защищены.</p>
            </div>
        </footer>
    )
}