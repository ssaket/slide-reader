import React, { useState } from 'react';
import Notes from '../notes/Notes';
import PDFViewer from '../pdf/PDFViewer';
import Player from '../video/Player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faFilePdf } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {

    const [activeView, setAcitveViews] = useState('videoplayer');

    const pdfviewer = (
        <div className="flex-initial self-center">
            <PDFViewer />
        </div>
    );

    const handleOnClick = (e) => {
        setAcitveViews(e.target.name);
    }

    return (
        <div className="mt-3.5">
            <div className="flex justify-center space-x-16">
                <div className="flex flex-col self-center space-y-6">
                    <button name="videoplayer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleOnClick}>
                        <FontAwesomeIcon icon={faVideo} />
                    </button>
                    <button name="pdfviewer" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleOnClick}>
                        <FontAwesomeIcon icon={faFilePdf} />
                    </button>
                </div>
                <Player />
                {activeView  === 'pdfviewer' && pdfviewer}

            </div>
            <div className="py-20">
                <Notes />
            </div>
        </div>
    )
}

export default Dashboard;