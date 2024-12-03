import React from "react";

const margin = {
    margin: '10px'
}

const Button = ({value, onClick}) => {
    return (
        <input type="button" value = {value} onClick={onClick} style={margin}></input>
    )    
}

export default Button;