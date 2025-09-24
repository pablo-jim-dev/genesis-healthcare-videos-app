import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useNavigate } from 'react-router';
import { TbMessageCircleQuestion } from "react-icons/tb";

const Sleep = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const PET_ICONS = [
        "GABO/g-1.png", "GABO/g-2.png", "GABO/g-3.png",
        "GABO/g-4.png", "GABO/g-5.png", "GABO/g-6.png", "GABO/g-7.png",
    ];
    const [petSrc] = useState(() => PET_ICONS[Math.floor(Math.random() * PET_ICONS.length)]);
    const SOCIAL_MEDIA_LINKS = [
        { id: 1, icon: <FaLinkedin />, qr: 'qr/linkedin.png' },
        { id: 2, icon: <TbWorld />, qr: 'qr/website.png' },
        { id: 3, icon: <TbMessageCircleQuestion />, qr: 'qr/forms.png' },
    ];

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setShow(false);
            }, 5000);
        }
        return () => {
            setShow(true);
        }
    }, [show])

    return (
        <div className='relative flex flex-col justify-center items-center min-h-screen w-full z-30 bg-transparent' onClick={() => navigate("/home")}>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                src='/logo_white.png' alt='Genesis Healthcare' className='h-24' />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.4 }}
                src={`${petSrc}`} alt='Pet' className='h-48 w-auto' />
            <AnimatePresence>
                {show && (
                    <motion.div
                        key={"info-box"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, ease: 'backInOut', delay: 0.6 }}
                        className="flex flex-row items-center select-none">
                        <div className="w-auto h-auto p-4 bg-[#0076D3]/30 backdrop-blur-3xl rounded-lg shadow-lg">
                            <p className="text-xl text-white">Presiona en cualquier lugar para comenzar.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='flex flex-row items-center justify-center mt-8 w-full gap-8'>
                {SOCIAL_MEDIA_LINKS.map((link) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: link.id * 0.2 }}
                        key={link.id}
                        className='flex flex-col justify-center items-center text-4xl text-blue-500 transition-colors duration-300 gap-4'
                    >
                        <img src={link.qr} alt='QR Code' className='w-36 h-36 rounded-sm' />
                        {link.icon}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Sleep