import React, { PureComponent } from 'react'
import ReactLogo from '../assets/index.svg'

export default class App extends PureComponent {
    render() {
        return (
            <div className='app-container'>
                <img className='app-logo' src={ReactLogo} />
                <h1>Hello from React!</h1>
            </div>
        )
    }
}
