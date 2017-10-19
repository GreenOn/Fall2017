import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './components/input_line'
// Create a new component named App that produces JSX
const App = ()=>{
//const App = function(){
	return (<div> 
	Hello World <InputLine/>
	</div>
	);
}

// Put the component into our dom
ReactDOM.render(<App />,document.querySelector('.container'));
