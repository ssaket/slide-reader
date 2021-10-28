import { h } from 'preact';
import { useRef } from 'preact/hooks';
import VideoJS from '../../components/video/VideoJS';
import style from './style.css';
import PDFViewer from '../../components/pdf'

const Home = () => {
    const playerref = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controld: true,
        resposive: true,
        fluid: true,
        sources: [{
            src: 'https://ilias3.uni-stuttgart.de/data/Uni_Stuttgart/mobs/mm_3491807/et_1.1_overview.mp4',
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerref.current = player;

        player.on('waiting', () => {
            console.log('player is waiting');
        });

        player.on('dispose', () => {
            console.log('player will be disposed');
        });
    };

    return (
        <div className={style.playercontainer}>
            <div className='container-fluid'>
                <div class="row">
                    <div className="col-6">
                        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                    </div>
                    <div className="col-6">
                        <PDFViewer />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home