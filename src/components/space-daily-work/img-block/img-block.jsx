import React from 'react';
import sdw from './../sdw.module.scss'


const ImgBlock = (props) => {
    return (
        <span className={sdw.iconBlock}>
            <img src={props.href}  alt="img"/>
        </span>
    )

}


export default ImgBlock;