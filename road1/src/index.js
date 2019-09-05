import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // ****
import Booming from './World';
import * as serviceWorker from './serviceWorker';




// Mad!  This won't work if it is in another file

 function Ticking() {
      let now = new Date().toLocaleTimeString();
    let nowElement = (
    	<p>Time: {now} </p>
    );
		ReactDOM.render(nowElement, document.getElementById('clockHere'));
  }
setInterval(Ticking, 3000);
setInterval(Booming, 3000);



ReactDOM.render(<App />, document.getElementById('root'));







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
