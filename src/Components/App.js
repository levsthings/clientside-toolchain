import React, { PureComponent } from 'react'
import ReactLogo from '../assets/index.svg'

export default class App extends PureComponent {
    render() {
        return (
            <div className='section'>
                <div className='columns'>
                    <div className='column is-6 is-offset-3 has-text-centered'>
                        <img className='app-logo' src={ReactLogo} />
                        <h1 className='title is-1'>Hello from React!!</h1>
                    </div>
                </div>
            </div>
        )
    }
}
