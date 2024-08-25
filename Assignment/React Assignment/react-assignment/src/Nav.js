import React from 'react'
import Module1 from './Module1'
import Module2 from './Module2'
import { Link } from 'react-router-dom'
import './App.css';

function Nav() {
  return (
    <div>
      <nav className='navBar'>
        <Link className='link' to={'/Module1'}>Module - 1</Link>
      <Link className='link' to={'/Module2'}>Module - 2</Link>
      <Link className='link' to={'/Module3'}>Module - 3</Link>
      </nav>
    </div>
  )
}

export default Nav
