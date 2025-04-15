import { Circle } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Footer = () => {

    const [time, setTime] = useState('');
    const [isAM, setIsAm] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                // second: '2-digit',
                hour12: true,
            };
            const indiaTime = new Date().toLocaleTimeString('en-US', options);
            const isAmNow = indiaTime.includes('AM');
            setIsAm(isAmNow)
            const formattedTime = indiaTime.replace(/ (AM|PM)/, '');
            console.log(formattedTime);
            setTime(formattedTime);
        };

        updateTime();

        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="flex flex-col md:flex-row justify-between !p-14 md:p-8 absolute bottom-0 w-full">
            <div className="flex flex-col">
                <div className="text-xs uppercase tracking-wider mb-2">
                    LOCAL TIME (UTC -5:30)
                </div>
                <div className="mb-2 flex items-end">
                    <div className="text-6xl font-monotime">
                        {time}
                    </div>
                    <div className="!mb-2">
                        {/* {!bg-green-300 rounded-2xl !mx-1 } */}
                        <p className="leading-[20px] flex items-center">
                            <Circle size={10} className={isAM ? "!bg-green-300 rounded-2xl !mx-1 am" : "!mx-1"} /> am
                        </p>
                        <p className="leading-[20px] flex items-center">
                            <Circle size={10} className={isAM ? "!ml-1" : "!bg-green-300 rounded-2xl !mx-1 pm"} />pm
                        </p>
                    </div>
                </div>
                <div className="text-xl max-w-md">
                    Frontend Developer who dips is toes in • Animation • Realtime 3D
                    {/* UI Engineer who dips his toes in Realtime 3D • Interaction • Perf */}
                </div>
                <div className="text-xs uppercase mt-6">
                    AJMER — FRONTEND DEVELOPER
                </div>
            </div>

            <div className="flex flex-col items-end mt-8 md:mt-0 justify-around !py-7 gap-y-2">
                <a href="https://github.com/khatri-rohit" className="mb-4 text-xs uppercase tracking-wider border-dotted border-2 rounded-lg !px-1 border-zinc-700">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/rohitkhatri302" className="mb-4 text-xs uppercase tracking-wider border-dotted border-2 rounded-lg !px-1 border-zinc-700">
                    LinkedIn
                </a>
                <a href="https://x.com/Rohit_Khatri302" className="mb-4 text-xs uppercase tracking-wider border-dotted border-2 rounded-lg !px-1 border-zinc-700">
                    Twitter / X
                </a>
                <a href="mailto:rohitkhatri.dev@gmail.com" className="text-xs uppercase tracking-wider border-dotted border-2 rounded-lg !px-1 border-zinc-700">
                    Email
                </a>
            </div>
        </footer>
    )
}

export default Footer