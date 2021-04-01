import React from 'react'

class App extends React.Component {
  getMyStorage=() => {
document.cookie="2021=Year";
localStorage.getItem('Paragon', 'yes, but Arena first');
sessionStorage.getItem('frontend', 'react');
  }

render() {
  return(
    <div className="App">
      <button value="text" onClick={this.getMyStorage}/>
    </div>
  )
}
}

export default App;