import React from 'react'
import styles from './page.module.css'
import parse from "html-react-parser";

async function getData(){
  const res = await fetch(`${process.env.HOST}/api/category`,{cache:'no-cache'});
  return res.json();
}

const page = async () => {
  const x =await getData();
  return (
    <div>
      <h1>f u</h1>
      
      <div>
      {parse(x.data[0].name)}
      </div>
    </div>
  )
}

export default page