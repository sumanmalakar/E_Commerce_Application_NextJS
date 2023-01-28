/* eslint-disable react/jsx-no-undef */
import React, { useRef } from "react";
import Link from "next/link";

import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) {
  // console.log(cart,
  //   addToCart,
  //   removeFromCart,
  //   clearCart,
  //   subTotal);

  const toggleCart = () => {
    console.log("Cart is clicked");

    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="w-[100%] flex flex-col md:flex-row md:justify-start justify-center items-center bg-pink-600 text-white fixed top-0 z-20">
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
            <li className="mx-2 py-4 hover:bg-purple-900">Hoodies</li>
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
          {/* <Link href={"/order"}>
            <li className="mx-2 py-4 hover:bg-purple-900 ">Orders</li>
          </Link> */}
        </ul>
      </div>
      <div
        className="flex cart absolute right-0 top-2 mx-5  cursor-pointer
      "
      >
        {/* Login */}
        <Link href={"/login"}>
          {" "}
          <MdAccountCircle className="text-3xl md:text-2xl mx-3" />{" "}
        </Link>

        {/* Shopping Cart */}
        {Object.keys(cart).length !== 0 ? (
          <div class="inline-flex relative w-fit">
            <div class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-violet-900 text-white rounded-full z-10">
              {Object.keys(cart).length}
            </div>
            <AiOutlineShoppingCart
              onClick={toggleCart}
              className="text-4xl md:text-2xl"
            />
          </div>
        ) : (
          
            <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-3xl md:text-2xl"
        /> 
          
        )}
      </div>

      {/* sidebar... */}

      <div
        ref={ref}
        // className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 text-black
        // transform
        //  transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}
        //  z-10`}

        className="w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 text-black 
        transform
         transition-transform  translate-x-full
         z-10"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-600"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold py-2">
          {/* if cart is empty than so some text */}
          {Object.keys(cart).length === 0 && (
            <div className="text-center m-4 font-semibold">
              Your Cart is Empty
            </div>
          )}

          {Object.keys(cart).map((k) => {
            return (
              <>
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
                    <div className="flex justify-center items-center w-1/3 font-semibold text-lg">
                      {/* decrease qty */}

                      <AiFillMinusCircle
                        onClick={() =>
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                        className="text-pink-500 cursor-pointer"
                      />
                      <span className="mx-3 text-sm">{cart[k].qty}</span>

                      {/* increase qty */}

                      <AiFillPlusCircle
                        onClick={() =>
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                        className="text-pink-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ol>

        {/* subTotal */}

        <div className="mt-3 flex  justify-center items-center my-3  ">
          <span className="font-bold">SubTotal: ₹{subTotal}</span>
        </div>

        <div className="flex">
          <Link href={"/checkout"}>
            {" "}
            <button class="flex text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm mx-2">
              <BsFillBagCheckFill className="m-1" />
              CheckOut
            </button>
          </Link>
          <button
            onClick={clearCart}
            class="flex text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm mx-2"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
