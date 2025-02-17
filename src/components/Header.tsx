import Link from 'next/link'

export const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-start items-center">
                <Link href="https://slova-po-russki.ru">
                        <h2 className="text-xl text-black font-semibold">Слова по-русски</h2>
                </Link>
            </div>
        </header>
    )
}