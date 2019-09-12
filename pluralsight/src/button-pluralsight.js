console.log('we are legion');

function Button(){
  const [numNow, putIn] = useState(17);
  return (
    <button onClick={()=> putIn(numNow * 2)}>{numNow}</button>
  );
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
