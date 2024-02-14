import Link from 'next/link';

export const Header = () => {
    return (
        <header>
            <div className="p-4 bg-black text-white flex">
                <div className='pr-6'>
                    <Link href="/" className="text-5xl font-bold">
                        Finversia
                    </Link>
                    <p className="text-xs mt-3">Курсы валют: USD 100, EUR 120</p>
                </div>
                <div className="text-sm flex flex-col gap-y-2 mx-20">
                    <p>Немецкие вложения в Китай достигли исторического максимума</p>
                    <p>
                        Thyssenkrupp снизила прогнозы по продажам и чистой прибыли из-за проблем в
                        стале...
                    </p>
                    <p>
                        Sony снизила прогноз продаж по PS5 и готовится к IPO своего финансового
                        подразде...
                    </p>
                </div>

                <div className="flex">
                    <iframe
                        width="300"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=v_T_vypFOzLYNT6B"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
            </div>
        </header>
    );
};
