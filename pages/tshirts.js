/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

export default function tshirts({ products }) {
  console.log(products);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mt-4 justify-center">
            {products.map((item) => {
              return (
                <>
                  <div
                    key={item._id}
                    class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-5"
                  >
                    <Link
                      href={`/product/${item.slug}`}
                      class="block relative  rounded overflow-hidden "
                    >
                      <img
                        alt="ecommerce"
                        class="m-auto   h-[30vh] md:h-[36h] block"
                        src={item.img}
                      />
                    <div class="mt-4 text-center">
                      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                        T-Shirts
                      </h3>
                      <h2 class="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p class="mt-1">{item.price}</p>
                      <p class="mt-1">S, M, L, XL, XLL</p>
                    </div>
                    </Link>

                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: 'tshirts' });
  // console.log(products)
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}
