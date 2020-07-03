import React, { Component } from 'react'
import Calendar from './Calendar/Calendar'
import './style.css'
export default class App extends Component {
    render() {
        return (
            <div id="App">
                <Calendar />
            </div>
        )
    }
}
