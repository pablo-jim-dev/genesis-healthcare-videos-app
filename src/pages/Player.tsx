import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { useSearchParams } from 'react-router'
import Header from '../components/Header';

const Player = () => {
    const [searchParams] = useSearchParams();
    const [video, setVideo] = useState<string | null>(null);

    useEffect(() => {
        console.log(Object.fromEntries(searchParams));
        setVideo(searchParams.get('video'));
        console.log(decodeURIComponent(video || ''));

        return () => {
            console.log('Cleanup');
        }
    }, [searchParams])

    return (
        <>
            <Header />
            <div className='relative flex items-center justify-center min-h-dvh bg-black z-30'>
                <div className='container mx-auto p-4 flex flex-col items-center'>
                    {video && (
                        <ReactPlayer
                            autoPlay
                            muted={true}
                            src={decodeURIComponent(video || '')}
                            controls
                            width='80%'
                            height='80%'
                            className='rounded-lg shadow-lg'
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Player