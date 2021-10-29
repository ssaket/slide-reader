import { h } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoJS = ( {options, onReady }) => {
    const videoref = useRef(null);
    const playerref = useRef(null);

    useEffect( () => {
        if(!playerref.current){
            const videoElement = videoref.current;
            if(!videoElement) return;

            const player = playerref.current = videojs(videoElement, options, () => {
                console.log('player is ready');
                onReady && onReady(player);
            });
        }
        
        else {
            const player = playerref.current;
            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, onReady]);

    useEffect(() => {
        return () => {
            if(playerref.current){
                playerref.current.dispose();
                playerref.current = null;
            }
        };
    }, []);

    return (
        <div>
            <video ref={videoref} className="video-js vjs-big-play-centered" />
        </div>  
    )
}

export default VideoJS