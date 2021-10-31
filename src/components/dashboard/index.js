import React from 'react';
import Notes from '../notes/Notes';
import PDFViewer from '../pdf/PDFViewer';
import Player from '../video/Player';

const Dashboard = () => {
    return (
        <div className="mt-3.5">
            <div className="flex justify-center space-x-2">
                <div className="flex-initial h-1/3">
                    <Player />
                </div>
                <div className="flex-initial self-center">
                    <PDFViewer />
                </div>
            </div>
            <div className="py-20">
                <Notes />
            </div>
        </div>
    )
}

export default Dashboard;