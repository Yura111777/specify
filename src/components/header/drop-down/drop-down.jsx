import React, {useRef} from 'react';
import h from './../header.module.scss';



const DropDown = (props) => {
    const liDrop = useRef(null);
   const mOver = () =>{
       props.mouseOver(im1);
       liDrop.current.classList.add('active');
       console.log(liDrop.current)
   }
    const mOut = () =>{
        props.mouseOut(im1, props.img)
        liDrop.current.classList.remove( 'active');
    }
    const im1 = useRef(null);

    return (

            <li className={h.dropDown_li} ref={liDrop} onMouseLeave={mOut} onMouseEnter={mOver}>
                <div className={h.dropDown_li_item}>
                    <img src={props.img}  ref={im1} data-img={props.hover}  alt=""/>
                    <a href="">
                        {props.text}
                    </a>
                    <div className="clearfix"></div>
                </div>
            </li>
    )

}


export default DropDown;