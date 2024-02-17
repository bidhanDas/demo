import React from 'react'
import AppNavBar from './AppNavBar'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import { cookies } from 'next/headers';

async function getData(){
  const res = await fetch(`${process.env.HOST}/api/category`,{cache:'no-cache'});
  return res.json();
}

const PlainLayout = async (props) => {

  const x =await getData(); // x = {status:"success",data:result}, result = json array (of objects)

  const cookieStore = cookies()  //instance
  const token = cookieStore.get('token')
  let isLogin=false //atar pore

    if(typeof token === "undefined" || token === ""){
        isLogin=false
    }
    else{
        isLogin=true
    }

  // isLogin = typeof token !== "undefined" || token === ""; //ata
  
  return (
    <div>
        <AppNavBar isLogin={isLogin} data={x}></AppNavBar>
        {props.children}
        
        <Toaster position="bottom-center"></Toaster>
        
        <Footer data={x}></Footer>
    </div>
  )
}

export default PlainLayout