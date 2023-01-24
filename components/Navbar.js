/* eslint-disable react/jsx-no-undef */
import React, {useRef} from 'react'
import Link from 'next/link';


import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";






export default function Navbar() {
const toggleCart = () =>{
console.log("Cart is clicked")

if(ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-full')
  ref.current.classList.add('translate-x-0')
}

else if(!ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-0')
  ref.current.classList.add('translate-x-full')
}


}

const ref  = useRef()

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center bg-pink-600 text-white">
      <div>
        <Link href={"/"} className="logo mx-3 p-3 font-bold">
          E-Commerce
        </Link>
      </div>
      <div className="nav">
        <ul className="flex  item-center space-x-6 font-bold md:text-md ">
          <Link href={"/tshirts"}>
            <li className="mx-2 py-4 hover:bg-purple-900 ">Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li
              className="mx-2 py-4 hover:bg-purple-900
                "
            >
              Hoodies
            </li>
          </Link>
          <Link href={"/stickerks"}>
            <li
              className="mx-2 py-4 hover:bg-purple-900
                "
            >
              Stickers{" "}
            </li>
          </Link>
          <Link href={"/mugs"}>
            <li className="mx-2 py-4 hover:bg-purple-900 ">Mugs</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute right-0 top-2 mx-5  cursor-pointer
      "
      >
        <AiOutlineShoppingCart className="text-3xl" />
      </div>

      {/* sidebar... */}

      <div
        ref={ref}
        className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 text-black transform
         transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-600"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold py-2">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold text-lg">
                <AiFillMinusCircle className="text-pink-500 cursor-pointer" /> 
                <span className="mx-3 text-sm">1</span>
                <AiFillPlusCircle  className="text-pink-500 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold">
                1
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold">
                1
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold">
                1
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold">
                1
              </div>
            </div>
          </li>
        </ol>
        <button class="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">
          <BsFillBagCheckFill className="m-1" /> 
        CheckOut</button>
      </div>
    </div>
  );
}
