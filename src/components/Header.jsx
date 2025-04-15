import React, { useEffect } from 'react'

const Header = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const chars = document.querySelectorAll('.mouse-char');

            chars.forEach((char) => {
                const rect = char.getBoundingClientRect();
                const charCenterX = rect.left + rect.width / 2;
                const charCenterY = rect.top + rect.height / 2;

                // Calculate distance from mouse to char (normalized)
                const distX = (charCenterX - e.clientX) / window.innerWidth;
                const distY = (charCenterY - e.clientY) / window.innerHeight;
                const dist = Math.sqrt(distX * distX + distY * distY);

                // Update custom properties based on distance
                const fontWeight = Math.max(0, Math.min(1, 1 - dist * 2));
                char.style.setProperty('--f-w', fontWeight);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <header className='!p-14 !pb-0 !sm:py-16 w-full relative flex flex-col justify-between'>
            <div className="!pl-4 md:pl-8">
                <div className="leading-[0.7] whitespace-nowrap">
                    {['R', 'O', 'H', 'I', 'T'].map((letter, index) => (
                        <div
                            key={index}
                            className="relative inline-block select-none mouse-char font-graphic styles_char__R8sC_"
                            aria-hidden="true"
                            style={{
                                "--i": index,
                                "--rt": (2 - (index % 1) * 0.5),
                                "--f-w": Math.random(),
                                "--f-o": "1"
                            }}>
                            <span className="inline-block">{letter}</span>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header