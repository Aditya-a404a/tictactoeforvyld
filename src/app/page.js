'use client';

import Navbar from "./components/Navbar";
import Forminput from "./components/Forminput"; 

import Grid from "./components/Grid";
import { useState } from 'react';



export default function Home() {

  const [size, setSize] = useState(3); // Default grid size is 3x3
  const [streak, setStreak] = useState(3); // Default streak is 3
  const [grid, setGrid] = useState(Array(size).fill(Array(size).fill(null)));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const checkDraw = (grid) => {
    return grid.flat().every(cell => cell !== null);
  };

   const checkWinner = (grid) => {
    const n = grid.length;
  
    // Check rows
    for (let i = 0; i < n; i++) {
      if (grid[i].every(cell => cell && cell === grid[i][0])) {
        return grid[i][0];
      }
    }
  
    // Check columns
    for (let j = 0; j < n; j++) {
      if (grid.every(row => row[j] && row[j] === grid[0][j])) {
        return grid[0][j];
      }
    }
  
    // Check main diagonal
    if (grid.every((row, i) => row[i] && row[i] === grid[0][0])) {
      return grid[0][0];
    }
  
    // Check anti-diagonal
    if (grid.every((row, i) => row[n - 1 - i] && row[n - 1 - i] === grid[0][n - 1])) {
      return grid[0][n - 1];
    }
  
    return null;
  };
  // winner ended

  const handleClick = (row, col) => {
    if (grid[row][col]|| winner || isDraw) 
      { console.log("returning");
        return;
       } // Ignore if cell is already filled, there's a winner, or it's a draw
    console.log(row, col);
    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return isXNext ? 'X' : 'O';
        }
        return cell;
      })
    );

    setGrid(newGrid);
    const newWinner = checkWinner(newGrid);
    if (newWinner) {
      console.log("23")
      setWinner(newWinner);
      console.log(newWinner);
    } else if (checkDraw(newGrid)) {
      console.log("26")
      setIsDraw(true);
    } else {
      console.log("29")
      setIsXNext(!isXNext);
    }
  };

  const handleNChange = (event) => {
    event.preventDefault();
    
    const newSize = parseInt(event.target.size.value, 10);

    setSize(newSize);
    setGrid(Array(newSize).fill(Array(newSize).fill(null)));
    setWinner(null);
    setIsXNext(true);
    setIsDraw(false);
  };


  return (
    <main className="">

     
      <Navbar />
      <div className=" flex justify-center">
      <div>{(isXNext&&(!winner)) && <h1 className=" text-custom-purp text-2xl font-bold -rotate-3 ">Player X Turn </h1>}</div>
      <div>{ (!isXNext&&(!winner)) && <h1 className=" text-custom-purp text-2xl font-bold -rotate-3 "> Player O Turn </h1>}</div>
      </div>
      <div  className = ' flex justify-center'>
      
      <div className=" flex-col place-items-center">
      <Forminput setStreak={setStreak} setSize={setSize} handleNChange={handleNChange}  />
      
      <div className=" flex justify-center ">
      
      {(!winner&& !isDraw ) && <Grid grid={grid} onClick={handleClick} /> }
      { winner && <h1 className=" text-custom-purp text-2xl font-bold -rotate-3 my-10"> Player {winner} Won  </h1> }
      { isDraw && !winner && <h1 className=" text-custom-purp text-2xl font-bold -rotate-3 my-10"> It's a Draw </h1>}
      </div>
      </div>
      </div>
    </main>
  );
}
