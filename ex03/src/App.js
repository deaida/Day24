import React from 'react'

class App extends React.Component {
  setLocalStorage=() => {

localStorage.setItem('Arena', 'Selection Month');

  }

render() {
  return(
    <div className="App">
      <button onClick={this.setLocalStorage}/>
    </div>
  )
}
}

export default App;