import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const AddNotes = ({ notes, addNotes }) => {

    return (
        <>
            <div className="flex justify-center space-x-5">
                <div className="flex-initial">
                    <FontAwesomeIcon size="3x" icon={faCirclePlus} />
                </div>
                <div className="flex-initial">
                    <FontAwesomeIcon size="3x" icon={faCircleMinus} />
                </div>
                <div className="flex-initial py-2">
                    <p className="text-center text-gray-600">Timestamp</p>
                </div>
                <div className="flex-initial">
                    <input type="text" placeholder="Title" className="focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="flex-initial">
                    <textarea placeholder="Please write the summary here" className="w-96 resize border rounded-md object-contain" />
                </div>
            </div>

        </>

    )
}

export default AddNotes;