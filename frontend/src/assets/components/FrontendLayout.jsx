import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

export default function FrontendLayout() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}
