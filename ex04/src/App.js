import React from 'react'

class App extends React.Component {
  getLocalStorage=() => {
 var myLocalStorageData= localStorage.getItem('Arena',);

  }

render() {
  return(
    <div className="App">
    <button onClick={this.setLocalStorage}>Click me</button>  
      <button onClick={this.getLocalStorage}>Click me</button>
    </div>
    
  )
}
}

export default App;
