import React from 'react';
import ReactDOM from 'react-dom';
import '../../../scss/SideDrawer.scss';
import { SideDrawerProps } from '../../interfaces/interface-sideDrawer';
import { CSSTransition } from 'react-transition-group';

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
    const content = (
        <CSSTransition
            in={props.show}
            timeout={200}
            className="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );
    return ReactDOM.createPortal(
        content,
        document.getElementById('drawer-hook')!
    );
};

export default SideDrawer;
