import {h} from 'preact';
import { useState } from 'preact/hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };
  

const PDFViewer = () => {

    const [file, setFile] = useState('');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onFileChange(event) {
      setFile(event.target.files[0]);
    }
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div className="Example">
        <header>
          <h1>react-pdf sample page</h1>
        </header>
        <div className="Example__container">
          <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>
            {' '}
            <input
              onChange={onFileChange}
              type="file"
            />
          </div>
          <div className="Example__container__document">
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
          </div>
        </div>
      </div>
    );
  };

  export default PDFViewer;