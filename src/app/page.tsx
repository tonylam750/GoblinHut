import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <header >
        <div className="border-b-4 border-lime-300 shadow-md shadow-lime-300 h-44 w-full relative"  >
          <img src="https://i.pinimg.com/564x/5f/5f/76/5f5f76ff3724b5890afaafb978ae856d.jpg" className="w-full h-full object-cover absolute mix-blend-overlay" />
       
          <div className="p-16">
            <h1 className=" text-white text-6xl font-bold">Goblin Hut</h1>
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
                   
