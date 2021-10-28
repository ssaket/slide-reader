import { h } from 'preact';
import { useState } from 'preact/hooks';


const Notes = () => {
    const [textArea, setTextArea] = useState('');
    const [noteList, setNotes] = useState({
        notes: []
    });

    const addNotes = () => {
        setNotes(noteList => ({
            ...noteList,
            notes: noteList.notes.append({ heading: 'hah', text: textArea }),
        }));
    }

    const AddNotes = (
        <>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" onchange={(e) => setTextArea(e.target.value)} id="floatingTextarea" />
                <label htmlFor="floatingTextarea">Comments</label>
            </div><div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button" onclick={addNotes}>Add</button>
            </div>
        </>
    );

    const viewNotes = (
        <>
            <nav id="navbar-example3" className="navbar navbar-light bg-light flex-column align-items-stretch p-3">
                <a className="navbar-brand" href="#">Timestamp</a>
                {noteList.notes.map((notes) =>
                    // eslint-disable-next-line react/jsx-key
                    <a className="nav-link" href={'#item-'.concat(notes.heading)}>{notes.heading}</a>
                )}
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                {noteList.notes.map((notes) =>
                    // eslint-disable-next-line react/jsx-key
                    <>
                        <h4 id={'item'.concat(notes.heading)}>{notes.heading}</h4>
                        <p>{notes.text}</p>
                    </>
                )}
            </div></>

    );

    return (
        <>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Add Notes</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">View Notes</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Export Notes</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">{AddNotes}</div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">{viewNotes}</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
        </>

    );
}

export default Notes