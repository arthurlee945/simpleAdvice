import React from 'react';

interface props {
    quote: string[],
    click: React.MouseEventHandler<HTMLElement>;
}

const Quote:React.FC<props> = ({quote, click}:props) =>{
    return (
    <div className="quoteBox">
        <p>Advice #{quote[0]}</p>
        <h1>"{quote[1]}"</h1>
        <div className = "divider">
            <i className="fa-solid fa-pause"></i>
        </div>
        <i className="fa-solid fa-dice-five randomBtn" onClick = {click}></i>
    </div>
    )
}

export default Quote