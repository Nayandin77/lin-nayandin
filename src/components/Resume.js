import React from 'react';
import './style/Layout.css';
import './style/Resume.css';
import resume from '../images/DN_resume_CO.pdf';

const Projects = () => {
    const pdfFile = resume + "#view=Fit&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0";

    return (
        <div className="resume-container">
            <div className="resume-download">
                <a href={resume} download="DennisNayandin_Resume.pdf">Download</a>
            </div>
            <div className="resume-pdf-container">
                <iframe src={pdfFile} frameBorder="0" className="resume-pdf"></iframe>
            </div>
        </div>

    );
}

export default Projects;