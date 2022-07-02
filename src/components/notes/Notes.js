import React, { useState } from 'react';
import AddNotes from './AddNotes';
import ViewNotes from './ViewNotes';


const Notes = () => {
    const [notes, addNotes] = useState({
        title: '',
        date: '',
        summary: []
    });
    return (
        <div className="box-border w-5/6 mx-auto p-4 shadow-sm">
        <ul className="flex">
            <li className="flex-1 mr-2">
                <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Active Item</a>
            </li>
            <li className="flex-1 mr-2">
                <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Nav Item</a>
            </li>
            <li className="text-center flex-1">
                <a className="block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Item</a>
            </li>
        </ul>
        </div>
        // <><div classNameName="box-border w-5/6 mx-auto p-4 shadow-sm">
        //     <AddNotes addNotes={addNotes} />
        // </div><div classNameName="box-border w-5/6 mx-auto p-4 shadow-sm">
        //         <ViewNotes />
        //     </div></>
    )
}

export default Notes;