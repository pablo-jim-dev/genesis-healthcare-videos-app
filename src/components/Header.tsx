import { useNavigate } from "react-router"
import { FaMoon } from "react-icons/fa";
import { motion } from 'framer-motion';

const Header = () => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.8, ease: 'backInOut', delay: 0.6 }}
            className='bg-transparent w-full h-auto fixed top-0 left-0 right-0 z-50'>
            <div className='container mx-auto flex items-center justify-between p-4'>
                <img onClick={() => navigate("/")} src='/logo_white.png' alt='Genesis Healthcare' className='h-18 cursor-pointer' />
                <nav>
                    <ul className='flex items-center text-xl gap-5 uppercase font-semibold'>
                        <li><a onClick={() => navigate("/home")} className='text-white cursor-pointer'>Videos</a></li>
                        <li><a onClick={() => navigate("/")} className='flex flex-col justify-center items-center text-white cursor-pointer bg-white/20 backdrop-blur-3xl py-3 px-3 rounded-lg hover:bg-white/30 transition-colors duration-300'>
                            <FaMoon className='' /></a></li>
                    </ul>
                </nav>
            </div>
        </motion.div>
    )
}

export default Header