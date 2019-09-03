import React from 'react';
import './App.css';

function App() {

  function WordCounter(){
    return null;
  }

  function ProgressBar() {
    return (

      <form onSubmit={null}>
        <label>
          Name:
          <input type="text" value={null} onChange={null} />
        </label>
        <input type="submit" value="Submit" />
      </form>








    )
  }

  function Ticking({ count }) {
      let now = new Date().toLocaleTimeString();
    return <p>{now} </p>
  }

  function Editor(props) {
    return <p>Look: {props.n1}</p>;
  }


  return (
  <div className="App">
    <Editor n1={"Sent this as a prop."}/>
    <ProgressBar />
    <Ticking />
  </div>
  );
}

export default App;
