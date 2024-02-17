import React from 'react'
import styles from './page.module.css'

async function getData(){
  const res = await fetch(`${process.env.HOST}/api/category`,{cache:'no-cache'});
  return res.json();
}

const page = async () => {
  const x =await getData();
  return (
    <div>
      {x.data[0].name}
    </div>
  )
}

export default page