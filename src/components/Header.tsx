import Link from 'next/link'

export const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-start items-center">
                <Link href="https://рус-слово.рф">
                        <h2 className="text-xl text-black font-semibold">Рус-слово.рф</h2>
                </Link>
            </div>
        </header>
    )
}