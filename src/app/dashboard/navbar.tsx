import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div>
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div>
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white text-black">
                    <li>
                        <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0   " aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0">About</Link>
                    </li>
                    <li>
                        <a href="tel:0614091530" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0 ">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
)
}

export default navbar
