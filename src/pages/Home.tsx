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
        {
            id: 1,
            title: "FLUIDOS",
            description: "Sistema universal de fluidos con capacidad para 2 familias (1.000 pruebas cada una), gestión inteligente mediante etiquetas RFID, panel de estado y codificación por colorque garantizan seguridad, precisión y control total.",
            thumbnail: "/videos/1/1.png",
            src: '/videos/1/1.mp4'
        },
        {
            id: 2,
            title: "CARGA DE REACTIVO DE ENSAYO",
            description: "“El sistema Panther emplea gradillas con codificación de color y separa los reactivos en compartimientos refrigerados y a temperatura ambiente, garantizando almacenamiento adecuado y operación confiable.”",
            thumbnail: "/videos/3/3.png",
            src: '/videos/3/3.mp4'
        },
        {
            id: 3,
            title: "CARGA DE MUESTRAS EN GRADILLA",
            description: "“El sistema Panther dispone de gradillas con capacidad para 15 posiciones, destinadas a muestras o calibradores. Su diseño ergonómico permite una carga sencilla y eficiente.”",
            thumbnail: "/videos/4/4.png",
            src: '/videos/4/4.mp4'
        },
        {
            id: 4,
            title: "CARGA DE MUESTRAS EN EQUIPO",
            description: "“El compartimiento de gradillas del sistema Panther admite hasta 8 gradillas (120 muestras) con lector de código de barras integrado, permitiendo una carga y descarga continua para máxima eficiencia.”",
            thumbnail: "/videos/5/5.png",
            src: '/videos/5/5.mp4'
        },
        {
            id: 5,
            title: "CARGA DE PUNTAS",
            description: "“El sistema Panther ofrece capacidad para 6 gradillas de 96 puntas cada una, que el operador coloca de forma sencilla y práctica. Su diseño permite carga continua,garantizando eficiencia operativa y máxima productividad.”",
            thumbnail: "/videos/6/6.png",
            src: '/videos/6/6.mp4'
        },
        {
            id: 6,
            title: "DESECHOS",
            description: "“El sistema Panther cuenta con compartimientos para desechos líquidos y sólidos de 750 de capacidad, lo que asegura un flujo de trabajo continuo y eficiente, con sustitución rápida y sencilla para el operador.”",
            thumbnail: "/videos/7/7.png",
            src: '/videos/7/7.mp4'
        },
        {
            id: 7,
            title: "MANTENIMIENTOS",
            description: "“El sistema Panther requiere mantenimientos sencillos por parte del operador, lo que reduce la interacción con el equipo y evita retrasos en el flujo de trabajo.”",
            thumbnail: "/videos/8/8.png",
            src: '/videos/8/8.mp4'
        },
        {
            id: 8,
            title: "CARGA DE MTU'S",
            description: "“El sistema Panther incorpora un compartimiento para la unidad multitubo (MTU) con capacidad de 125 MTU's. Su diseño permite una carga sencilla, rápida y continua durante todo el proceso, optimizando la eficiencia del flujo de trabajo.”",
            thumbnail: "/videos/9/9.png",
            src: '/videos/9/9.mp4'
        },
        {
            id: 9,
            title: "RPI",
            description: "“El equipo RPI acondiciona los reactivos refrigerados y congelados, manteniéndolos en condiciones óptimas y listos para su uso mediante un control preciso detemperatura.”",
            thumbnail: "/videos/10/10.png",
            src: '/videos/10/10.mp4'
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
                                className="fixed right-10 bottom-10 flex flex-row items-center select-none">
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