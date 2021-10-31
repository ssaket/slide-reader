import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const PDFViewer = ({ file, setFile }) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            {!file &&
                <div className="mx-3">
                    <label htmlFor="formFile" className="form-label">Open PDF</label>
                    <input onChange={onFileChange} className="form-control form-control-sm" type="file" id="formFile" />
                </div>
            }
            {file &&
                <div className="h-50 overflow-auto">
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className={pageNumber === 1 ? "page-item disabled": "page-item"}>
                                <button className="page-link" onclick={() => setPageNumber(pageNumber-1)}>Previous</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onclick={() => setPageNumber(pageNumber+1)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </>
    );
};

export default PDFViewer;