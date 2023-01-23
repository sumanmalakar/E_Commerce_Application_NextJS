import React from 'react'
import Link from 'next/link';

import { AiOutlineShoppingCart } from "react-icons/ai";




export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center bg-pink-600 text-white">
      <div>
        <Link href={"/"} className="logo mx-3 p-3 font-bold">E-Commerce</Link>
      </div>
      <div className="nav">
        <ul className="flex  item-center">
          <Link href={"/tshirts"}>
              <li
                className="mx-2 p-3 hover:bg-purple-900 hover:font-light">Tshirts
              </li>
        
          </Link>
          <Link href={"/hoodies"}>
           
              <li
               
                className="mx-2 p-3 hover:bg-purple-900
                hover:font-light">Hoodies
              </li>
           
          </Link>
          <Link href={"/stickerks"}>
          
              <li
               
                className="mx-2 p-3 hover:bg-purple-900
                hover:font-light">Stickers{" "}
              </li>
         
          </Link>
          <Link href={"/mugs"}>
        
              <li
              
                className="mx-2 p-3 hover:bg-purple-900 hover:font-light">Mugs
              </li>
          
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-2 mx-5  
      ">
        
          <AiOutlineShoppingCart className="text-3xl" />
      </div>
    </div>
  );
}
