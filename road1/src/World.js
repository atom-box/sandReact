import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



function World(props){
	let t = props.time;
	t -= 1567700000000;
	t = (t -(t%100))/100  ;
	let baleans = t, zees = t;
	return (
		<div class="App-header">
			<h2>World</h2>
			<p>Population: </p>
			<div class="App-header">
				<h2>Asia</h2>
				<p>Population: </p>
				</div>
			<div class="App-header">
				<h2>Oceana</h2>
				<p>Population: {zees + baleans}</p>
				<div class="App-header">
				<h2>New Zealand</h2>
				<p>Population: {zees}</p>
				</div>
				<div class="App-header">
				<h2>Bali</h2>
				<p>Population: {baleans}</p>
				</div>
			</div>
		</div>
	)
}

function Booming(){
	let epoch = new Date().getTime();
	ReactDOM.render(<World time={epoch}/>, document.getElementById('popular'))
}


export default Booming;