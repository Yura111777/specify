import React from 'react';
import ea from './ea.module.scss'

const EarlyAccess = (props) => {

    return (
        <div className={props.bgColor}>
            <div className="container">
                <div className={ea.ea}>
                    <h1>{props.h1Text}</h1>
                    <p>{props.pText}</p>

                    <form>
                        <input placeholder={'Your Email'} type="text"/>
                        <button className={ea.submit} type="submit">Get early access</button>
                    </form>
                </div>
            </div>
            <img src={props.img} className={props.imgClass} alt="image"/>
        </div>
    )

}


export default EarlyAccess;