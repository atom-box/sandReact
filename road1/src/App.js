import React from 'react';
import './App.css';

function App() {
const tally = 3, text = "Ham over pine.", completion = 66;

                    function WordCounter({tally}){
                        return <h2>Number of words: {tally}</h2>;
                      }

                    function TextInput({text}) {
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

                    function ProgressBar({completion}) {
                      const percent = completion * 100;
                      return (
                        <div>
                        <label>Progresso
                        </label>
                        <progress value={completion} class="stay-big" >
                        {percent}%
                        </progress>
                        </div>
                        )
                    }

                    function Editor(props) {
                        return <h2>Look: {props.n1}</h2>;
                      }

return (
  <div >
    <Editor n1={"place   holding    with   this    prop."}/>
    <WordCounter />
    <TextInput />
    <ProgressBar />
  </div>
  );
}

export default App;
