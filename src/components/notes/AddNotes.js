import React, { useState } from 'react';

const AddNotes = ({ notes, addNotes }) => {

    return (
        <>
            <div className="flex justify-center space-x-5">
                <div className="flex-initial">
                    <input type="text" />
                </div>
                <div className="flex-initial">
                    <input type="text" />
                </div>
                <div className="flex-initial">
                    <textarea className="w-96 resize border rounded-md" />
                </div>
            </div>

        </>

    )
}

export default AddNotes;