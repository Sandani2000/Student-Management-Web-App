import React, {useState} from "react"; 

// React (the default export) and useState (a named export)
//useState is a non default package.

// The {} syntax is used to destructure the named export useState from the react module. 
// This allows us to use useState directly in our code, 
// without having to prefix it with the React object.

// For example, without destructuring,
// let [number, setNumber] = React.useState(0);

//if we export a default package no need to use {}

function CounterFunction(){

    //javascript array
    let [number, setNumber] = useState(0);

    function increment(){
        setNumber(++number);
    }

    return(
        <div>
            <h3>Functional Component</h3>
            <h1>Counter = {number}</h1>
            <button onClick={e => increment()}>Increment</button>
            {/* must use a event (e) */}
        </div>
    )
}

export default CounterFunction;