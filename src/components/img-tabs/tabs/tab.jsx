import React,{useRef} from 'react';
import imgBut from './../imgBut.module.scss'


const Tabs = (props) => {
    const button = useRef(null);
    const imgRef = useRef(null);
    const mouseOv = () => {
        props.mouseOver(button, imgRef);
    }
    const mouseOwt = () => {
        props.mouseDown(button, imgRef);
    }
    const spinerBg = {
        backgroundColor: props.bgColor
    }
    return (
        <div className={imgBut.buttonTab} ref={button} data-hover={props.hover} data-default={props.href} onMouseEnter={mouseOv} onMouseLeave={mouseOwt} data-img={props.img}>
            <img src={props.href} ref={imgRef} className={imgBut.img}  alt="img"/>
            <h4>{props.title}</h4>
            <a href="#">Learn more <i className="iconArrow"></i></a>
            <div className="spiner" style={spinerBg}></div>
        </div>
    )
}


export default Tabs;