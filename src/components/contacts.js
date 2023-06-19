import React from "react";
// import img from './cats/felix.png'
// import pic from '../img/cats/felix.png'
// import phone from './cats/phone-icon.png'
// import mail from './cats/mail-icon.png'

export default function Contacts(props){
    return(
        <div>
            <h1>{props.setup}</h1>
            <p>{props.punchline}</p>
        </div>
        // <div className="contactCard">
        //     <img src={props.img} alt="img1"></img>
        //     <h3>{props.name}</h3>
        //     <div className="infoGroup">
        //         <img src={phone}></img>
        //         <p>{props.phone}</p>
        //     </div>
        //     <div className="info-group">
        //             <img src={mail} />
        //             <p>{props.email}</p>
        //     </div>
        // </div>
    )
}


/* <div className="contact-card">
                <img src="./images/mr-whiskerson.png"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/fluffykins.png"/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/felix.png"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/pumpkin.png"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div> */