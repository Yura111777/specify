import React from 'react';
import ifc from './ifc.module.scss'

const IconFolder = (props) => {
    return (
        <div className={ifc.iconFolder}>
            <img src={props.img} className={ifc.img} alt="image"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )

}


export default IconFolder;