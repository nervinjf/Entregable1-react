import { useState } from 'react';
import React from 'react';
import paragraph from "./paragraph.json"

const Paragraph = () => {

    

    console.log(paragraph);

    const indexrandom = Math.floor(Math.random () * paragraph.length)
    const [ index, setindex ] = useState(indexrandom) 

    const nextphrase = () =>{
        const indexRandom = Math.floor(Math.random () * paragraph.length)
        setindex(indexRandom)
    }

    const colors = ["#64D9DD", "#64E5D1", "#79EEBC", "#9EF5A2", "#C9F887", "#A33561", "#9E599D", "#817FCA", "#18A2A6", "#324B4C"];
    const randomColors = Math.floor(Math.random () * colors.length)
    document.body.style = `background: ${colors[randomColors]}`;

    return (
        <div className=' QuoteBox'>
            <div className="container-paragraph">
            <i class="fa-solid fa-quote-left" style={{color: colors[randomColors]}}></i>
                  <div className="move-p" style={{color: colors[randomColors]}}>
                      <p>{paragraph[index].quote}</p>
                  </div>
            </div>
            <div className="move-btn-autor"> 
              <div className="container-btn-autor">
                <p style={{color: colors[randomColors]}}>{paragraph[index].author}</p>
                <button onClick={nextphrase} style={{background: colors[randomColors]}}><i class="fa-solid fa-angles-right"></i></button>
            </div>
            </div>
      </div>
    );
};

export default Paragraph;