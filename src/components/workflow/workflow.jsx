import React from 'react';
import icon1 from './../../img/apple.jpg';
import icon2 from './../../img/windows.jpg';
import icon3 from './../../img/sketch.jpg';
import icon4 from './../../img/figma.jpg';
import icon5 from './../../img/adobe-xd.jpg';
import icon6 from './../../img/slack.jpg';
import icon7 from './../../img/github.jpg';
import icon8 from './../../img/gitlab.jpg';
import IconWfolder from "./icon-w-folder/icon-w-folder";
import iwf from './iwf.module.scss'

const Workflow = (props) => {
    const iconArr = [
        {text:'Multi OS', icon: [icon1, icon2]},
        {text:'Compatibility', icon: [icon3, icon4, icon5]},
        {text:'Integrations', icon: [icon6, icon7, icon8]}
    ];
    const icons = iconArr.map((el) => {
        return <IconWfolder
                    text={el.text}
                    icons={el.icon}
        ></IconWfolder>
    })

    return (
        <div className={iwf.iwf}>
            <div className="container">
                <h2>{props.h1Text}</h2>
                <p>{props.pText}</p>
                <div className="clearfix"></div>
                {icons}
                <div className="clearfix"></div>
            </div>
        </div>
    )

}


export default Workflow;