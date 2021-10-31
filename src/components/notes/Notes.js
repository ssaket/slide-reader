import React, { useState } from 'react';
import AddNotes from './AddNotes';


const Notes = () => {
    const [notes, addNotes] = useState({
        title: '',
        date: '',
        summary: []
    });
    return (
        <div className="">
             <AddNotes addNotes={addNotes} />
        </div>
    )
}

export default Notes;