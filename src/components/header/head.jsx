import React, {useState, useRef, useEffect} from 'react';
import h from './header.module.scss'
import logo from '../../img/logo.jpg'
import ic1 from '../../img/1.png';
import ic2 from '../../img/2.png';
import ic3 from '../../img/3.png';
import ihover1 from '../../img/hover1.png';
import ihover2 from '../../img/hover2.png';
import ihover3 from '../../img/hover3.png';

import DropDown from "./drop-down/drop-down";
const Head = props => {

    const [state, setActiveState] = useState({

        showTopMenu: false
    });
    const  dropList = [
            {img: ic1, text:'Dynamic Libraries', hoverImg:ihover1},
            {img: ic2, text:' Continuous Delivery System', hoverImg:ihover2},
            {img: ic3, text:'Atomic Hand-off', hoverImg:ihover3},
    ]
    let showMenus = null;

    const mouseE = (element) => {
        const img = element.current.getAttribute('data-img');
        element.current.setAttribute('src', img )
    }
    const mouseL = (element, icon) => {
        element.current.setAttribute('src', icon )
    }
    const dropDownlist = dropList.map((el)=> {
        return <DropDown
            mouseOver={mouseE}
            mouseOut={mouseL}
            img={el.img}
            text={el.text}
            hover={el.hoverImg}
        ></DropDown>
    })
    if (state.showTopMenu) {
        showMenus = (
            <ul className={h.dropDown}>
                {dropDownlist}
            </ul>


        )
    }

    const mouseMove = () => {
        const showM = state.showTopMenu;
        setActiveState({showTopMenu: !showM});
    };


    return (
        <header>
            <div className="container">
                <img src={logo} className='logo' alt="logo"/>
                <ul className={h.menu}>
                    <li className={h.menu_list}>
                        <span className={h.dropDownB}>
                                Features <i className="icon-arrow"></i>
                        </span>
                        <div className={h.outer_dropdown_folder} onMouseEnter={mouseMove} onMouseLeave={mouseMove}>
                            {showMenus}
                        </div>
                    </li>
                    <li className={h.menu_list}>
                        <a href="" className={h.menu_item}>
                            Community
                        </a>
                    </li>
                </ul>
                <div className="clearfix"></div>
            </div>
        </header>
    )

}


export default Head;