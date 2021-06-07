import React,{useState} from 'react';
function Increase(){
    const [inc, setInc]=useState(0);
    const handleClick=()=>{
        let index=inc+1;
        setInc(index);
    }
    return(
        <div>
            <h2>{inc}</h2>
            <button onClick={handleClick}>Tang so</button>
        </div>
    );
}
export default Increase;