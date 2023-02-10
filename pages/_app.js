import { useRouter } from 'next/router'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

// MONGO_URI = mongodb+srv://suman:suman8896@cluster0.dkbfbbo.mongodb.net/?retryWrites=true&w=majority 
// MONGO_URI = mongodb://localhost:27017


export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    try {

      // if cart is already present in localStorage
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.log(error);
      localStorage.clear();
    }


    // checking for login token
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random());
    }

  }, [])

  // save cart's to localStorage and calculate subtotal
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    // calculating sub total
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  }

  // adding a new item to the cart
  const addToCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varient }
    }

    // update the state variable
    setCart(newCart);
    // store cart in local storage
    saveCart(newCart)

    toast.success("Your item is added on Cart..!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }

  // remove particular item from cart
  const removeFromCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart;

    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    // if cart qty is already zero
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }

    setCart(newCart);
    // store cart in local storage
    saveCart(newCart)

  }

  const buyNow = (itemCode, qty, price, name, size, varient) => {
    let newCart = { itemCode: { qty: 1, price, name, size, varient } };

    setCart(newCart);
    saveCart(newCart);
    console.log(newCart)

    router.push('/checkout')
  }


  // clear all the item from cart
  const clearCart = () => {
    setCart({})
    saveCart({});

    console.log("Cart is cleard!");

    toast.warn('Cart is Cleared!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  return (<>
    <Navbar
      user={user}
      key={key}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      subTotal={subTotal}
    />

    <Component
      buyNow={buyNow}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      subTotal={subTotal}
      {...pageProps}
    />
    <Footer />
  </>)


}

