import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import 'videojs-youtube/dist/Youtube.min.js';

export const VideoJS = ({ options, onReady }) => {

    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                console.log("player is ready");
                onReady && onReady(player);
            });
        } else {
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            // player.src(options.sources);
            // playerRef.data-setup = '{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}] }';
        }
    }, [options]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div data-vjs-player>
            <video
                width={options.width}
                height={options.height}
                className="video-js vjs-default-skin"
                data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}], "youtube": { "iv_load_policy": 1 } }'
            >
            </video>
        </div>
    );
}

export default VideoJS;