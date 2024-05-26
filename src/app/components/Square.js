import React from 'react';


const Square = ({ value, onClick, marginx ,marginy }) => {
  return (
    <button className={  `text-custom-purp font-bold text-xl bg-custom-cyan hover:bg-custom-orange w-10  h-10 m-1`} id ="btn" onClick={onClick}>
    
      {value} 
    </button>
  );
};

export default Square;