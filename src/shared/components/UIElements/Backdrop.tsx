import React from 'react';
import ReactDOM from 'react-dom';

import '../../../scss/Backdrop.scss';
import { BackdropProps } from '../../interfaces/interface-backdrop';

const Backdrop: React.FC<BackdropProps> = (props) => {
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onClick}></div>,
        document.getElementById('backdrop-hook')!
    );
};

export default Backdrop;
