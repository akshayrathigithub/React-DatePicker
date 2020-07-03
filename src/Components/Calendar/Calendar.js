import React from 'react'
import './Calendar.style.css'
export default function Calendar() {
    return (
        <div id="Calendar">
            <div className="ContentWrapper">
                <div className="Header">
                    <div id="Header_Heading">
                        <p>SELECT DATE</p>
                    </div>
                    <div id="Header_Footer">
                        <div id="Header_Footer_Date">
                            <p>Mon, July 20</p>
                        </div>
                        <div id="Header_Footer_Edit">
                            <p>L</p>
                        </div>
                    </div>
                </div>
                <div className="Body"></div>
                <div className="Footer"></div>
            </div>
        </div>
    )
}
