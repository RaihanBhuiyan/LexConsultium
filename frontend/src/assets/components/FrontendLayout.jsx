import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import Header from './frontend/header';
import Footer from './frontend/Footer';
import $ from 'jquery'
import "jquery-ui-dist/jquery-ui"
window.jQuery = window.$ = $
export default function FrontendLayout() {
  useEffect(() =>{

  },[])
  return (
    <>
        <div className="fakeloader"></div>
        <Header></Header>
          <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}
