import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';


const Background = () => {
    const WORK_CARDS_BG = [
        { transform: "translateY(100%) translateX(100%)", styles: "top-0 left-0", background: "#61717d" },
        { transform: "translateY(50%) translateX(-60%)", styles: "bottom-0 right-0", background: "#474d52" },
        { transform: "translateY(20%) translateX(-90%)", styles: "top-0 right-0 ", background: "#61717d" },
        { transform: "translateY(80%) translateX(-30%)", styles: "bottom-0 left-0 ", background: "#474d52" },
        { transform: "translateY(20%) translateX(-90%)", styles: "top-0 right-0 ", background: "#61717d" },
        { transform: "translateY(80%) translateX(-30%)", styles: "bottom-0 left-0 ", background: "#474d52" },
    ]

    const WORK_CARDS_PROPS = (
        initTransform: string,
        numberX: number,
        numberY: number
    ) => {
        return {
            initial: { initTransform },
            whileInView: { transform: `translateY(${numberY}%) translateX(${numberX}%)` },
            transition: {
                repeatType: "mirror" as const,
                duration: 1.5,
            }
        }
    }

    const [randomNumbers, setRandomNumbers] = useState([
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 }
    ]);

    function updateRandomNumber(index: number) {
        const randomNumberX = (Math.random() * 100).toFixed(2);
        const randomNumberY = (Math.random() * 100).toFixed(2);

        setRandomNumbers(prevNumbers => {
            const newNumbers = [...prevNumbers];
            newNumbers[index] = { x: Number(randomNumberX), y: Number(randomNumberY) };
            return newNumbers;
        });

        return { x: randomNumberX, y: randomNumberY };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            WORK_CARDS_BG.forEach((_, index) => {
                updateRandomNumber(index);
            });
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-20 min-h-screen w-full'>
            {WORK_CARDS_BG.map((item, index) => (
                <motion.div
                    key={index}
                    className={`flex aspect-square w-[90%] max-w-[850px] h-auto fixed rounded-full ${item.styles} blur-3xl`}
                    {...WORK_CARDS_PROPS(item.transform, randomNumbers[index]?.x || 0, randomNumbers[index]?.y || 0)}
                    style={{ backgroundColor: item.background }}
                />
            ))}
        </div>
    )
}

export default Background