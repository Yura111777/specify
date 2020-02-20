import React from 'react';
import sdw from './sdw.module.scss'
import a from '../../img/apple.jpg';
import s from '../../img/sketch.jpg';
import g from '../../img/github.jpg';
import gl from '../../img/gitlab.jpg';
import sl from '../../img/slack.jpg';
import f from '../../img/figma.jpg';
import ad from '../../img/adobe-xd.jpg';
import w from '../../img/windows.jpg';
import ImgBlock from "./img-block/img-block";

const SpaceDailyWork = (props) => {
    const iconsArr = [
        {href:a, id:'cd1'},
        {href:s, id:'cd2'},
        {href:g, id:'cd3'},
        {href:gl, id:'cd4'},
        {href:sl, id:'cd5'},
        {href:f, id:'cd6'},
        {href:ad, id:'cd7'},
        {href:w, id:'cd8'}
    ]
    const imgArr = iconsArr.map((el) => {
        return <ImgBlock
                href={el.href}
                key={el.id}
        ></ImgBlock>
    })
    return (
        <div className={sdw.sdw}>

            <div className="container">
                <h1>{props.h1Text}</h1>
                <p>{props.pText}</p>
                <div className="clearfix"></div>
                {imgArr}
            </div>
        </div>
    )

}


export default SpaceDailyWork;