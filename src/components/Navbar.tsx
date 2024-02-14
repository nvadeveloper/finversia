export const Navbar = () => {
    return (
        <nav>
            <ul className="px-4 flex justify-between border-b border-black relative">
                <li className="cursor-pointer hover:text-gray-500">Экономика и общество</li>
                <li className="cursor-pointer hover:text-gray-500">Фондовый рынок</li>
                <li className="cursor-pointer hover:text-gray-500">Валютный рынок</li>
                <li className="cursor-pointer hover:text-gray-500">Другие рынки</li>
                <li className="cursor-pointer hover:text-gray-500">Финансовая инфраструктура</li>
                <li className="cursor-pointer hover:text-gray-500">Больше</li>
            </ul>
        </nav>
    );
};
