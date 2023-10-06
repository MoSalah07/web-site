'use client';
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='py-8 absolute z-[1000] left-0 top-0 w-full shadow-2xl bg-header'>
      <div className='overlay'/>
          <div className="container mx-auto">
              <div className='flex justify-between items-center'>
              <Link className='text-logo ' href={`/`}>
                  Mohamed Salah
                  </Link>
                  <button className='btn btn-sm capitalize'>hire me</button>
            </div>
          </div>
    </header>
  )
}

export default Header