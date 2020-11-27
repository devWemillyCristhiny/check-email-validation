import React from 'react'
import './CheckEmailValidation.css'
import './CheckEmailValidation.txt'

export default function(){
    return (
        <div className="container">
            <h3>Email Validation Check</h3>
            <form id="form" action="#">
                <div className="inputBox">
                    <input type="text" id="email" placeholder="Enter 
                    Email Address" onKeyUp="validate();"></input>
                    <span className="indicator"></span>
                </div>
            </form>
        </div> 
    )
}