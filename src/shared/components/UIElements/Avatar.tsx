import React from 'react';
import { AvatarProps } from '../../interfaces/interface-avatar';
import '../../../scss/Avatar.scss';


const Avatar: React.FC<AvatarProps> = (props) => {
    return (
        <div className={`avatar`} style={props.style}>
            <img
                src={props.image}
                alt={props.alt}
                style={{ width: props.width, height: props.height }}
            />
        </div>
    )
}

export default Avatar
