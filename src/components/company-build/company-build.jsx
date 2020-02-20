import React from 'react';
import IconFolder from "./icon-folder/icon-folder";
import icon1 from './../../img/icon1.png';
import icon2 from './../../img/icon2.png';
import icon3 from './../../img/icon3.png';
import icon4 from './../../img/icon4.png';
import cb from './cb.module.scss'

const CompanyBuild = (props) => {
    const iconArr = [
        {img: icon1, title:'A bridge for product teams', text: 'Your entire company is going to speak the same language by accessing the only source of truth you created.'},
        {img: icon2, title:'Speed up daily production', text: 'Gain hours of work maintaining your code and reduce product debt. Say hello to a new kind of team velocity.'},
        {img: icon3, title:'Brand consistency', text: 'Specify helps you keep the same identity across all the platforms you use. Increase your incomes and speed-up your time to market.'},
        {img: icon4, title:'Facilitate team scaling', text: 'Every resources to start with are in Specify. Spend less time to onboard new co-workers. Start working faster and focus on what matters: users.'}
    ];
    const icons = iconArr.map((el) => {
        return <IconFolder
                    img={el.img}
                    title={el.title}
                    text={el.text}
        ></IconFolder>
    })

    return (
        <div className={cb.companyBuild}>
            <div className="container">
                <h2>{props.h1Text}</h2>
                <p>{[props.pText]}</p>
                <div className="clearfix"></div>
                {icons}
                <div className="clearfix"></div>
            </div>
        </div>
    )

}


export default CompanyBuild;