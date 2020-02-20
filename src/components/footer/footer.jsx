import React from 'react';
import logo from './../../img/logo.jpg'
import footer from './footer.module.scss'

const Footer = () => {
    return (
       <footer>
           <div className="container">
               <ul className={footer.ul}>
                   <li>
                       <img src={logo} alt="logo"/>
                   </li>
                   <li className={footer.copyright}>
                       <p>
                           &copy; Copyright 2019 Specify  <br/>
                           All rights reserved
                       </p>
                   </li>
                   <li className={footer.socailLink}>
                       <a href="">f</a>
                       <a href="">TW</a>
                       <a href="">M</a>
                   </li>
               </ul>
               <ul className={footer.ul}>
                   <li className={footer.caption}>
                       Features
                   </li>
                   <li className={footer.link}>
                       <a href="">
                           Dynamic Libraries
                       </a>
                   </li>
                   <li className={footer.link}>
                       <a href="">
                           Continuous Delivery System
                       </a>
                   </li>
                   <li className={footer.link}>
                       <a href="">
                           Atomic Hand-off
                       </a>
                   </li>
               </ul>
               <ul className={footer.last}>
                   <li className={footer.caption}>
                       Community
                   </li>
                   <li className={footer.link}>
                       <a href="">
                           Facebook
                       </a>
                   </li>
                   <li className={footer.link}>
                       <a href="">
                            Slack
                       </a>
                   </li>
                   <li className={footer.link}>
                       <a href="">
                            Spectrum
                       </a>
                   </li>
                   <li className={footer.link}>
                       <a href="">
                            Roadmap
                       </a>
                   </li>
               </ul>
               <ul className={footer.last}>
                   <li className={footer.caption}>
                       Legal
                   </li>
                   <li className={footer.link}>
                       <a href="">
                           Privacy policy
                       </a>
                   </li>
                   <li className={footer.link}>
                       <a href="">
                           Terms and services
                       </a>
                   </li>
                   <li className={footer.link}>
                       <a href="">
                           Contact
                       </a>
                   </li>
               </ul>
           </div>
       </footer>
    )

}


export default Footer;