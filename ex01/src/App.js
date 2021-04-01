import React from 'react'

class App extends React.Component {
  getMyStorage=() => {
document.cookie="Year=2021";
var myLocalStorageData =getItem('Paragon', 'yes, but Arena first');
var mySessionStorageData=getItem('frontend', 'react');
  }

render() {
  return(
    <div className="App">
      <button onClick={this.setMyStorage}/>
    </div>
  )
}
}

export default App;