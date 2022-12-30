import React from "react"
import Contact from "./Contact"
import felix from "./images/felix.png"
import fluffykins from "./images/fluffykins.png"
import mailicon from "./images/mailicon.png"
import mrwhiskerson from "./images/mrwhiskerson.png"
import phoneicon from "./images/phoneicon.png"
import pumpkin from "./images/pumpkin.png"


function App() {
    return (
        <div className="contacts">
            <Contact
                img = {mrwhiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
                />
            <Contact
                img = {fluffykins}
                name= "Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
                />
            <Contact
                img = {felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
                />
            <Contact
                img = {pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
                />
            
        </div>
    )
}
       

export default App