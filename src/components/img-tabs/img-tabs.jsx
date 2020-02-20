import React, {useRef, useEffect} from 'react';
import Tabs from "./tabs/tab";
import firstimg from '../../img/1.png';
import secondimg from '../../img/2.png';
import thirdimg from '../../img/3.png';
import tab1 from '../../img/tab1.png';
import tab2 from '../../img/tab2.png';
import tab3 from '../../img/tab3.png';
import ichover1 from './../../img/hover1.png'
import ichover2 from './../../img/hover2.png'
import ichover3 from './../../img/hover3.png'
import imgBut from './imgBut.module.scss'

const ImgTabs = () => {
    const imgFolderRef = useRef(null);
    const tabButtons = [
            {id: 'ar1', href: firstimg, title: 'Dynamic libraries  for styles and assets', img: tab1, hover:ichover1, bgColor: '#ffb9b9'},
        {id: 'ar2', href: secondimg, title: 'The new continuous  delivery system', img:  tab2, hover:ichover2, bgColor: '#b1cef7'},
        {id: 'ar3', href: thirdimg, title: 'Atomic hand-off & component focused', img: tab3, hover:ichover3, bgColor: '#9587ec'},
    ];
    const dom = ()=>{
        alert(1)
    };
    const mouseOver = (button, imgRef) => {
        button.current.classList.add('active')
        imgRef.current.setAttribute('src', button.current.getAttribute('data-hover'));
        imgFolderRef.current.style.backgroundImage = `url(${button.current.getAttribute('data-img')})`;
    };
    const mouseDown = (button ,imgRef) => {
        button.current.classList.remove('active');
        imgRef.current.setAttribute('src', button.current.getAttribute('data-default'));
    };
    const tabs = tabButtons.map((el) => {
            return <Tabs
                href={el.href}
                title={el.title}
                img={el.img}
                key={el.id}
                hover={el.hover}
                bgColor={el.bgColor}
                mouseOver={mouseOver}
                mouseDown={mouseDown}
            ></Tabs>
        }
    );
    useEffect(() =>{
        imgFolderRef.current.style.backgroundImage = `url(${tab1})`;
    }, []);

    return (
        <div className={imgBut.tabsFolder}>
            <div className="container">
                <div className={imgBut.imgFolder} ref={imgFolderRef}>

                </div>
            </div>
            {tabs}
        </div>
    )

}


export default ImgTabs;