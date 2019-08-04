import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Job from './Job'

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Job />
      </React.Fragment>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'))