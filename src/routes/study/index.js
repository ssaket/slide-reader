import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';
import VideoJS from '../../components/video/VideoJS';
import style from './style.css';
import PDFViewer from '../../components/pdf';
import Notes from '../../components/notes';

const Home = () => {
    const playerref = useRef(null);
    const [videoLink, setVideoLink] = useState(null);
    const [isFileUpload, setFileUpoad] = useState(false);
    const [file, setFile] = useState('');

    const [videoJsOptions, setVideoJsOptions] = useState({
        autoplay: true,
        controld: true,
        resposive: true,
        fluid: true,
        sources: [],
    });

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handlePlayerReady = (player) => {
        playerref.current = player;

        player.on('waiting', () => {
            console.log('player is waiting');
        });

        player.on('dispose', () => {
            console.log('player will be disposed');
        });
    };

    const fileUploadView = (
        <div className="mx-3">
            <label htmlFor="formFile" className="form-label">Open PDF</label>
            <input onChange={onFileChange} className="form-control form-control-sm" type="file" id="formFile" />
        </div>
    )

    const startPlayer = () => {
        setVideoJsOptions(options => ({
            ...options,
            sources: [{
                src: videoLink,
                type: 'video/mp4',
            }],
        }));
    }

    const viewSelector = (
        <div className="w-50 mx-auto px-5 row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Please enter the details below</h5>
                        <p className="card-text">
                            <div className="row my-3">
                                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Video Link</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="colFormLabel" onchange={(e) => setVideoLink(e.target.value)} placeholder="Enter the lecture video link" />
                                </div>
                            </div>
                            <div className="row my-3">
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">PDF</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" onChange={() => setFileUpoad(true)} checked={isFileUpload === true} />
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                Upload PDF
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" onChange={() => setFileUpoad(false)} value="option2" checked={isFileUpload === false} />
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                                Enter Link
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                {isFileUpload ? fileUploadView :
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="colFormLabel" placeholder="Enter the PDF link" />
                                    </div>
                                }
                            </div>
                        </p>
                        <button className="btn btn-primary" onclick={startPlayer}> Next</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const vidPlayer = (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-6">
                    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                </div>
                <div className="col-6">
                    <PDFViewer file={file} setFile={setFile} />
                </div>
                <div className="col-12">
                    <Notes />
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className={style.playercontainer}>
                {videoJsOptions.sources.length > 0 ? vidPlayer : viewSelector}
            </div>
        </>
    )
}


export default Home