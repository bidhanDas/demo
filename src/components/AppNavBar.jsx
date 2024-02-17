"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'

const AppNavBar = (props) => {

  let [keyword,SetKeyword]=useState("");
  const handleKeyword = (e) => {
    SetKeyword(e.target.value);
  };

  return (
    <div>

      <div className="py-2 bg-dark text-white container-fluid">

        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <h6><i className="bi bi-calendar2-check"></i> Today: <span>{new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()}</span></h6>
            </div>

            <div className="col-md-4">
              <ul className='d-flex justify-content-end list-unstyled'>
                <li><a target="_blank" className="text-white mx-2" href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a></li>
                <li><a target="_blank" className="text-white mx-2" href="https://www.youtube.com/"><i className="bi bi-youtube"></i></a></li>
                <li><a target="_blank" className="text-white mx-2" href="https://twitter.com/"><i className="bi bi bi-twitter"></i></a></li>
                <li><a target="_blank" className="text-white ms-2" href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
        <Container>
         <Navbar.Brand href="/"><img className="nav-logo" src={"/logo.svg"} alt="img"/></Navbar.Brand>

         <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll">
           <Nav
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' }}
             navbarScroll
            >

             <Nav.Link href="/" className="f-13">Home</Nav.Link>
             {
               props.data.data.map((item)=>{return <Nav.Link href={`/category?id=${item.id}`} className="f-13">{item.name}</Nav.Link>})
             }
            </Nav>

            
            <Form className="d-flex">
             <Form.Control
               type="search" //text
               placeholder="Search"
               className="me-2"
               aria-label="Search"
               onChange={handleKeyword}
               value={keyword}  //na dileo hoy may be, empty korar jonno
             />
             <Link href={keyword===""?("/"):(`/search?keyword=${keyword}`)} className="btn btn-danger"><i className="bi bi-search"></i></Link> {/* type="button" */}
            </Form>

            {
              props.isLogin ? 
              (
                <>
                  <div className="ms-3 user-dropdown">
                   <img className="icon-nav-img icon-nav" src="profile.png" alt=""/>

                   <div className="user-dropdown-content">
                        <div className="my-4 text-center">
                          <img className="icon-nav-img" src="profile.png" alt=""/>
                        </div>

                        <Link href="/profile" className="side-bar-item">
                          <span className="side-bar-item-caption">Profile</span>
                        </Link>
                        <Link href="/comments" className="side-bar-item">
                          <span className="side-bar-item-caption">Comments</span>
                        </Link>
                        <a href="/api/user/login" className="side-bar-item">
                          <span className="side-bar-item-caption">Logout</span>
                        </a>
                    </div>

                  </div>
                </>
              ) 

              : 

              (
                <>
                  <Link href="/user/login" className="btn ms-2 btn-outline-danger">Login</Link>
                </>
              )
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default AppNavBar