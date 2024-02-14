export const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-between border-b border-black px-4">
                <li className="cursor-pointer">Экономика и общество</li>
                <li className="cursor-pointer">Фондовый рынок</li>
                <li className="cursor-pointer">Валютный рынок</li>
                <li className="cursor-pointer">Другие рынки</li>
                <li className="cursor-pointer">Финансовая инфраструктура</li>
                <li className="cursor-pointer">Больше</li>
            </ul>
        </nav>
    );
};
