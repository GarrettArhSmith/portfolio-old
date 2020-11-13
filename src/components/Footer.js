import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";


function Footer(props) {
    return (
        <footer>
            <ul>
                <a href="https://github.com/GarrettArhSmith"><li><FaGithub /></li></a>
                <a href="https://www.linkedin.com/in/garrettarhsmith/"><li><FaLinkedin /></li></a>
                <a href="https://twitter.com/GarrettArhSmith"><li><FaTwitter /></li></a>
                <a href='https://docs.google.com/document/d/1aaSKbGb2L1aJ3M7EtbDZ3dmd2KUc008LjbcxF0Wak7I/export?format=pdf&attachment=false'><li><VscFilePdf /></li></a>
            </ul>
        </footer>
    );
}

export default Footer;