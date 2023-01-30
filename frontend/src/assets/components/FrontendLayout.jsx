import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import Header from './frontend/header';
import Footer from './frontend/Footer';

export default function FrontendLayout() {
  return (
    <>
        <div class="fakeloader"></div>
        <Header></Header>
          <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}
