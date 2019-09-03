import React from 'react';
import './App.css';

function App() {
  var now = new Date();
  now = now.toLocaleTimeString();

  function WordCounter(){
    return null;
  }

  function ProgressBar() {
    return <h1>Blerchley</h1>;
  }

  function Counter({ count }) {
    return <p>Word Count: </p>
  }

  function Editor(props) {
    return <p>Look: {props.n1}</p>;
  }


  return (
    <div className="App">
<ProgressBar />
    </div>
  );
}

export default App;
