import Link from 'next/link';

export const Header = () => {
    return (
        <header>
            <div className="p-4 bg-black text-white flex justify-between">
                <div className="pr-6">
                    <Link href="/" className="text-5xl font-bold">
                        Finversia
                    </Link>
                    <p className="text-xs mt-3">Курсы валют: USD 100, EUR 120</p>
                    <ul className="flex mt-12 justify-between border-b border-black relative space-x-2">
                        <li className="cursor-pointer hover:text-gray-400">НОВОСТИ</li>
                        <li className="cursor-pointer hover:text-gray-400">ПУБЛИКАЦИИ</li>
                        <li className="cursor-pointer hover:text-gray-400">ИНВЕСТКЛУБ</li>
                        <li className="cursor-pointer hover:text-gray-400">КАЛЕНДАРЬ</li>
                        <li className="cursor-pointer hover:text-gray-400">КОТИРОВКИ</li>
                        <li className="cursor-pointer hover:text-gray-400">СЕРВИСЫ</li>
                        <li className="cursor-pointer hover:text-gray-400">TV</li>
                    </ul>
                </div>

                <div className="flex">
                    <iframe
                        width="300"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=v_T_vypFOzLYNT6B"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
            </div>
        </header>
    );
};
