import {Component} from "react"


import Header from "../Header";

import "./index.css"

class NotFound extends Component {
    render(){
        return (
            <>
                <Header/>
                <div className = "not-found-container">
                    <div>
                        <img src="https://res.cloudinary.com/dgonqoet4/image/upload/v1705628593/NotFound_mir3cm.png" alt = "Not Found" className = "not-found-image"/>
                    </div>
                    <h1> OOPS!!!  Something Went Wrong!</h1>
                </div>
            </>            
        );
    }
}

export default NotFound