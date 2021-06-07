import React,{useState} from 'react'; //rfsp
function ColorBox(){
    const [color, setColor]=useState('pink');
    const handleColor=()=>{
        setColor('green');
    }
    return(
        <div className="BoxColor" style={{backgroundColor:color}}
            onClick={handleColor}>
            color box
        </div>
    );
}
export default ColorBox;