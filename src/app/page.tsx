import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <header>
        <div className="border-b-4 border-blue-300 shadow-md shadow-blue-300 h-96 w-full relative"  >
          <img src="https://i.imgur.com/gXbyeq4.jpeg" className="w-full h-full  object-fit absolute mix-blend-overlay resize-none" />
       
          <div className="p-16">
            <h1 className=" text-green-300 text-6xl font-bold italic ">Goblin Hut</h1>
          </div>
        </div> 
      </header> 

      <main className="bg-black h-screen">
        <h1 className=" text-white font-serif">Hva i all verden</h1>
        <p className=" text-white font-serif">må bytte bakgrunn</p>
      </main>
    </>  
  );
}
                   
