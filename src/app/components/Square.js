import React from 'react';


const Square = ({ value, onClick, marginx ,marginy }) => {
  return (
    <button className={  `text-custom-purp font-bold text-xl min-w-10 min-h-10 m-1 bg-custom-cyan hover:bg-custom-orange `} id ="btn" onClick={onClick}>
    
      {value? value : "_"} 
    </button>
  );
};

export default Square;