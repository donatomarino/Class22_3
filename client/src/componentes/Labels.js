import React from "react";

const Labels = ({text}) => {
    const style = {
        display: 'block',
        marginTop: '10px'
      }

    return (
        <label style={style}>{text}</label>
    )
}

export default Labels;