import React from 'react';
function App() {
  const inputRef = React.useRef(null)
  React.useEffect(() => {inputRef.current.select()},[inputRef])
  return (
    <div className="console">
      <pre>
      <h5>madison funderburk all rights reserved...</h5>
      <h1>       __    __    _    __   ____  _   _  _   _ </h1>
      <h1>//////|  \  /  |  / \  |  \ | ___|| | | || \ | |/////////////</h1>
      <h1>//////| | \/ | | / ^ \ | | \| __| | |_| ||  \| |/////////////</h1>
      <h1>//////|_|    |_|/_/ \_\|__ /|_|   |_____||_|\__|/////////////</h1>
      </pre>
      <div className="console-input-box">
        <p className="green">~ guest@madisonfunderburk.com:</p>
        <input ref={inputRef} type="text" name="consoleInput"/>
      </div>
      
    </div>
  );
}

export default App;
