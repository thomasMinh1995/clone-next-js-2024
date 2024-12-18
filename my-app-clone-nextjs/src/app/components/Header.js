import Link from "next/link"

const Header = ({ items, languages }) => {
// TODO: 
// - update background-color header
// - update border-color dropdown list language
// - add icon for header
    return (
        <header className="py-4 border-b bg-gray-100">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex space-x-4">
                    {items.map((item) => (<li key={item.title}>
                        <Link href="#" className="text-gray-700 hover:underline">
                            {item.title}
                        </Link> </li>))}
                </ul>
                <div className="relative">
                    <select className="px-4 py-2 border rounded text-gray-700 bg-white hover:bg-gray-200">
                        {languages.map((language) => (<option key={language.name} value={language.code}> {language.name} </option>))}
                    </select>
                </div>
            </nav>
        </header>
    )
}

export default Header