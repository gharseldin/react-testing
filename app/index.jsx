import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome !!!</h1>
                <p>This is boiler plate code for a react application.</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))