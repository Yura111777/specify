import React from 'react';
import iwf from './../iwf.module.scss'

const IconWfolder = (props) => {
    const icArr = props.icons.map((ic) => {
        return <img src={ic} alt="image"/>
    })

    return (
        <div className={iwf.iconWfolder}>
                <h3>{props.text}</h3>
                {icArr}
        </div>
    )

}


export default IconWfolder;