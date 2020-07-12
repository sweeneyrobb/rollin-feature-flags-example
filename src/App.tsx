import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Filter, useFlag, useSetFlags } from './features'

function App() {
    const feature1 = useFlag('rollin-feature-flags-example.area.feature1')
    const setFlags = useSetFlags()
    const handleClick = () => {
        setFlags({
            'rollin-feature-flags-example.area.feature1': true,
            'rollin-feature-flags-example.area.feature2': false,
            'rollin-feature-flags-example.area.feature3': false,
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Your feature is currently{' '}
                    {feature1 ? <strong>on</strong> : <strong>off</strong>}.
                </p>
                <Filter flag="rollin-feature-flags-example.area.feature1">
                    This is my new feature!
                </Filter>
                {!feature1 && (
                    <button className="App-link" onClick={handleClick}>
                        Turn Feature On
                    </button>
                )}
            </header>
        </div>
    )
}

export default App
