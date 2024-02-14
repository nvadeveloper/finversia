import Link from 'next/link';

export const Header = () => {
    return (
        <header>
            <div className="p-4 bg-black text-white flex justify-between">
                <div>
                    <Link href="/" className="text-3xl font-bold">
                        Finversia
                    </Link>
                    <p className="text-sm mt-3">Курсы валют: USD 100, EUR 120</p>
                </div>
                <div>
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
