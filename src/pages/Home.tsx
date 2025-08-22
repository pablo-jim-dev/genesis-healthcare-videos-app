import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from 'framer-motion';
import { FaPlay } from "react-icons/fa";
import Header from "../components/Header";

const Home = () => {
    const [show, setShow] = useState(true);
    const hideTimer = useRef<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!show) return;

        hideTimer.current = window.setTimeout(() => {
            setShow(false);
        }, 5000);

        return () => {
            if (hideTimer.current) {
                window.clearTimeout(hideTimer.current);
                hideTimer.current = null;
            }
        };
    }, [show]);

    const VIDEOS = [
        // {
        //     id: 1,
        //     title: "Carga de reactivos de ensayo",
        //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        //     thumbnail: "/videos/2/2.png",
        //     src: '/videos/2/2.mp4'
        // },
        {
            id: 2,
            title: "Consejos para la carga",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            thumbnail: "/videos/1/1.png",
            src: '/videos/1/1.mp4'
        },
        // {
        //     id: 3,
        //     title: "Carga de muestras",
        //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        //     thumbnail: "/videos/1/1.png",
        //     src: '/videos/1/1.mp4'
        // },
        {
            id: 4,
            title: "Carga de MTU",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            thumbnail: "/videos/4/4.png",
            src: '/videos/4/4.mp4'
        },
        // {
        //     id: 5,
        //     title: "Carga MTU con el Módulo de Expansión Universal",
        //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        //     thumbnail: "/videos/1/1.png",
        //     src: '/videos/1/1.mp4'
        // },
        {
            id: 6,
            title: "Vaciar residuos",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            thumbnail: "/videos/6/6.png",
            src: '/videos/6/6.mp4'
        },
        {
            id: 7,
            title: "Cargar fluidos",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            thumbnail: "/videos/7/7.png",
            src: '/videos/7/7.mp4'
        }
    ];

    const handleVideoClick = (videoSrc: string) => {
        navigate(`/player?video=${encodeURIComponent(videoSrc)}`);
    };

    return (
        <>
            <Header />
            <div className='relative flex flex-col items-center justify-center min-h-screen h-auto z-30 pt-24'>
                <div className='relative container mx-auto p-4 flex flex-col gap-6 z-10'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'backInOut' }}
                        className='text-white text-4xl text-left w-full uppercase font-bold'>Videos</motion.h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 select-none'>
                        {VIDEOS.map(video => (
                            <motion.div
                                onClick={() => handleVideoClick(video.src)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 * video.id }}
                                key={video.id}
                                className='bg-white/30 backdrop-blur-3xl rounded-lg overflow-hidden cursor-pointer'>
                                <div className="relative">
                                    <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/40 z-10">
                                        <FaPlay className="text-white text-3xl" />
                                    </div>
                                    <img src={video.thumbnail} alt='Video Thumbnail' className='w-full h-48 object-cover' />
                                </div>
                                <div className='p-4'>
                                    <h3 className='text-xl font-semibold mb-2'>{video.title}</h3>
                                    <p className='text-gray-300 text-base'>{video.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <AnimatePresence>
                        {show && (
                            <motion.div
                                key={"info-box"}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, ease: 'backInOut', delay: 0.6 }}
                                className="absolute right-0 bottom-0 flex flex-row items-center select-none">
                                <div className="w-auto h-auto p-4 bg-[#0076D3]/30 backdrop-blur-3xl rounded-lg shadow-lg">
                                    <p className="text-xl text-white">Haz click en cualquier video para reproducirlo</p>
                                </div>
                                <img src="/GABO/g-5.png" alt="GABO" className="w-auto h-36" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}

export default Home