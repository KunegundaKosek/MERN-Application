import React from 'react';
import { MainHeaderProps } from '../../interfaces/interface-mainHeader';
import '../../../scss/MainHeader.scss'

const MainHeader: React.FC<MainHeaderProps> = (props) => {
    return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
