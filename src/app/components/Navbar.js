
import React from 'react';
import Image from 'next/image';
import logo from '/public/vyldlogo.png';
import {  Anton } from 'next/font/google';
import { Exo } from 'next/font/google';
const  anton = Anton({
    subsets: ["latin"],
    weight: '400',
  
})
const jaro = Exo({
    subsets: ["latin"],
    weight: '400',
  
})


export  default function Navbar()
{





    return (
        <div>
        <div className=" flex  justify-between m-3  lg:mt-10" >
            <div>
                <a href="https://vyld.io/">
                <Image src={logo} alt="logo" className = " w-20 md:w-32  lg:w-48 "  />
                </a>
                
            </div>
            <div className={jaro.className}>
               
        <h1 className={` text-custom-cyan text-2xl sm:text-3xl md:text-4xl `}>PLAY </h1>
        <h1 className="  text-custom-purp text-2xl sm:text-3xl md:text-6xl "> SOCIAL</h1>

            </div>

            <div className = {jaro.className} >
                <a href = "/aboutme " className=" text-custom-purp font-bold text-2xl sm:text-3xl md:text-4xl "> About Me </a>
            </div>
            

        </div>
        
    </div>

    )
}


