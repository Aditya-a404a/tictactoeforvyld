import React from 'react';
import Square from './Square';


const Grid = ({ grid, onClick }) => {
  return (
    <div className="">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => {
            var mx=1 
            var my=1
            var size = grid.length;
            if ( rowIndex== 0 || rowIndex==size-1 )
                {
                    mx=0;

                }
            if ( colIndex== 0 || colIndex==size-1 )
                {
                    my=0;

                }
            return (<Square
              key={colIndex}
              value={cell}
              onClick={() => onClick(rowIndex, colIndex)}
              marginx= {mx}
              marginy= {my}
            />)
})}
        </div>
      ))}
    </div>
  );
};

export default Grid;