console.log('barracuda');

/*
                                                              (`-')  
 _                  .->          <-.             .->       <-.(OO )  
 \-,-----.     (`-')----.      ,--. )       (`-')----.     ,------,) 
  |  .--./     ( OO).-.  '     |  (`-')     ( OO).-.  '    |   /`. ' 
 /_) (`-')     ( _) | |  |     |  |OO )     ( _) | |  |    |  |_.' | 
 ||  |OO )      \|  |)|  |    (|  '__ |      \|  |)|  |    |  .   .' 
(_'  '--'\       '  '-'  '     |     |'       '  '-'  '    |  |\  \  
   `-----'        `-----'      `-----'         `-----'     `--' '--' 
*/

// object to hold colors whenever new color scheme button is clicked
let restore = {};
// object to hold original colors when page first loads
let original = {};


document.addEventListener('DOMContentLoaded', storeOrigs);
document.addEventListener('DOMContentLoaded', addLines);


console.log("line 46...");

// store original colors, so less revision hassle
function storeOrigs() {
  let el3 = document.getElementById("exposed1")
  console.log("...stored orig colors succesfully.");
  original.textColor = el3.style.color;
  original.backgroundColor = el3.style.background;    
}


function goDad() {
  let el3 = document.getElementById("exposed1")
  restore.textColor = el3.style.color;
  restore.backgroundColor = el3.style.background;
  el3.style.color = "#ff0";
  el3.style.background = "#FF69B4";
}

function goContrast() {
  let el3 = document.getElementById("exposed1")
  restore.textColor = el3.style.color;
  restore.backgroundColor = el3.style.background;
  el3.style.color = "black";
  el3.style.background = "white";
}

function goPrev() {
  let el3 = document.getElementById("exposed1")
  el3.style.color = restore.textColor;
  el3.style.background = restore.backgroundColor;    
}

function goOrig() {
  let el3 = document.getElementById("exposed1")
  restore.textColor = el3.style.color;
  restore.backgroundColor = el3.style.background;
  el3.style.color = original.textColor;
  el3.style.background = original.backgroundColor;    
}


/*
 __          __   ____    _____    _____   
 \ \        / /  / __ \  |  __ \  |  __ \  
  \ \  /\  / /  | |  | | | |__) | | |  | | 
   \ \/  \/ /   | |  | | |  _  /  | |  | | 
    \  /\  /    | |__| | | | \ \  | |__| | 
     \/  \/      \____/  |_|  \_\ |_____/ 
*/



// global to avoid re declaring, more efficient?
// ...because MUNCH function gets called several times per second
let words = {}; 
words.dirty = [], words.clean = [];


// (global/words: array of strings, arg/s: string) → {return: string}
function munch(s) {
	words.dirty = s.split(' ');

  // upper/lower case messes up the alpha order
  words.clean = words.dirty.map((s)=>{return s.toLowerCase()});
  console.log(words.clean);

  // collapse AND THEN DELETE any 'space' chars
  words.clean = words.clean.map((s)=>{return s.trim()});
  words.clean = words.clean.filter((x)=>{ return x.length > 0}  );

  //
  console.log(words.clean);
  words.clean.sort();
	wordCount = words.clean.length;
	return `First/Last words are [${words.clean[0]}] and [` + words.clean[wordCount -1] +`]`;
}

/*
 .----------------.    .----------------.    .-----------------.   .----------------. 
| .--------------. |  | .--------------. |  | .--------------. |  | .--------------. |
| |   _____      | |  | |     _____    | |  | | ____  _____  | |  | |  _________   | |
| |  |_   _|     | |  | |    |_   _|   | |  | ||_   \|_   _| | |  | | |_   ___  |  | |
| |    | |       | |  | |      | |     | |  | |  |   \ | |   | |  | |   | |_  \_|  | |
| |    | |   _   | |  | |      | |     | |  | |  | |\ \| |   | |  | |   |  _|  _   | |
| |   _| |__/ |  | |  | |     _| |_    | |  | | _| |_\   |_  | |  | |  _| |___/ |  | |
| |  |________|  | |  | |    |_____|   | |  | ||_____|\____| | |  | | |_________|  | |
| |              | |  | |              | |  | |              | |  | |              | |
| '--------------' |  | '--------------' |  | '--------------' |  | '--------------' |
 '----------------'    '----------------'    '----------------'    '----------------' 
*/

function addLines() {
  const manyEls = document.getElementsByTagName('div');
  let i = manyEls.length - 1;
  while (i--){
    console.log(manyEls[i].innerHTML);
    manyEls[i].style.backgroundColor = "red";
  }
  console.log('done!');
}

