import Link from 'next/link'
import React from 'react'
import Subscribe from './Subscribe'

async function getData(){
  const options={method:'GET'}
  const res = await fetch(`${process.env.HOST}/api/subscriber`,options,{cache:'no-cache'});
  return res.json();
}

const Footer = async (props) => {
  const x =await getData();
  return (
    <div className='section-footer'>
      <div className='py-5 bg-dark'>

        <div className='container'>
          <div className='row'>

            <div className="col-md-3 col-sm-6  p-3">
              <h5 className="text-white fw-bold my-3"> ABOUT </h5>
              <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p>

              <div className='d-flex justify-content-sm-start justify-content-center'> {/* SM and SM thika uporer device */}
                <ul className='d-flex list-unstyled'>
                  <li><a target='_blank' href="https://www.facebook.com/"><i className="h3 text-white bi bi-facebook"></i></a></li>
                  <li className='ms-3'><a target='_blank' href="https://www.youtube.com/"><i className="h3 text-white bi bi-youtube"></i></a></li>
                  <li className='ms-3'><a target='_blank' href="https://twitter.com/"><i className="h3 text-white bi bi-twitter"></i></a></li>
                  <li className='ms-3'><a target='_blank' href="https://www.linkedin.com/"><i className="h3 text-white bi bi-linkedin"></i></a></li>
                </ul>
              </div>

            </div>

            <div className="col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3">RECOMMENDED</h5>
              {
                props.data.data.map((item,i)=>{
                  if(i<4){
                    return<Link key={i} className="nav-link text-white my-1"  href={`/category?id=${item.id}`} >{item.name}</Link>
                  }
                })
              }
            </div>

            <div className="col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3">LEGAL</h5>
              <ul className="list-unstyled text-white">
                <li className="my-1">
                  <Link href="/privacy" className="nav-link">Privacy Policy</Link>
                </li>
                <li className="my-1">
                  <Link href="/terms" className="nav-link">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 p-3">
              <Subscribe data={x}></Subscribe>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer