import React from 'react';
import './App.css';

function App() {
  function WordCounter(){
    return null;
  }






// TEXT WORKS TEXT WORKS, look







  function ProgressBar({text}) {
    return (

      <form onSubmit={null}>
          <label htmlFor="editBox">Enter eight kinds of trees:</label>
          <input type="text"  id="editBox" value={null} onChange={null} />
                <textarea
        value={text}
 
        id="editor"
      />
        <input type="submit" value="Submit" />
      </form>








    )
  }


  function Editor(props) {
    return <p>Look: {props.n1}</p>;
  }


  return (
  <div className="App">
    <Editor n1={"Sent this as a prop."}/>
    <ProgressBar />
  </div>
  );
}





export default App;
