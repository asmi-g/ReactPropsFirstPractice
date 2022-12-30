import React from "react"
import felix from "./images/felix.png"
import fluffykins from "./images/fluffykins.png"
import mailicon from "./images/mailicon.png"
import mrwhiskerson from "./images/mrwhiskerson.png"
import phoneicon from "./images/phoneicon.png"
import pumpkin from "./images/pumpkin.png"


/*Props destructuring: replace {props} with its object properties like
{img, name, phone, email} and now you can use those properties without doing
props.img, props.name, props.phone, and props.email
*/
export default function Contact({img, name, phone, email}) {
    /*let catpic = props.img
    let catname = props.name 
    let catnumber = props.phone
    let catemail = props.email */
    return (
        <div className="contact-card">
            <img src={img} />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneicon} />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={mailicon} />
                <p>{email}</p>
            </div>
        </div>
    )
}