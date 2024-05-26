import React from 'react';



export default  function Frominput( props )
{
    const handlesumbit = (e) => {
        e.preventDefault();
        const size = e.target.elements.size.value;
        

        const streak = e.target.elements.streak.value;
        if (size <3 || size > 10 || streak < 3 || streak > 10 ){
            alert("Please enter a valid size and streak");
            return;

        }
        else{
            props.handleNChange(e);
            props.setStreak(streak);
        }
    }
    return (
        <div className= "  py-12 px-4 ">
            <form className = " flex-col justify-center items-center " onSubmit={handlesumbit}>
                <div className= "flex">
                <label className=" text-custom-purp -rotate-6 m-2 text-2xl px-4  rounded-full font-bold  " htmlFor="Grid Size">Grid Size</label>
                <input className=" text-custom-purp max-w-24 bg-custom-cyan -rotate-6 m-2 text-xl px-4  rounded-full font-bold  "type="text" id="size" name="Gridsize" placeholder=' 3' />
                <label className=" text-custom-purp  rotate-12 m-2 text-2xl px-4  rounded-full font-bold  "htmlFor="Winning">Winning Streak</label>
                <input className=" text-custom-purp max-w-24 bg-custom-cyan -rotate-6  m-2 text-xl rounded-full font-bold  p-4"type="text" id="streak" name="Winning Streak" placeholder=' 3' />
                </div>
                <div className=" flex justify-center">
                <div >
                <button className=" text-custom-purp bg-custom-cyan -rotate-6  text-xl  m-4 rounded-full font-bold  p-4"type="submit">Start</button>
                </div>
                </div>
            </form>
        </div>
    )
}