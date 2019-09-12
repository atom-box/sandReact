// Through the magic of wrapping in a JS closure.
// Based on https://jscomplete.com/playground/rgs1.6, the React 3 buttons example


function sing() {
	console.log('fa la la do re mi...');
}

let x = ()=> sing();  // nothing happens
x(); 									// function fires
let y = sing(); 			// function fires
let z = function(){console.log('Toot!')} // nothing happens, for same reason as Line 9
