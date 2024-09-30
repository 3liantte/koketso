import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import profile from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className="min-h-screen">
        <div className='flex flex-col justify-center items-center'>
            <div className="text-center items-center mt-20">
                <h2 className="text-xl text-gray-600">Hey, I&apos;m <span className='text-2xl font-bold'>Koketso</span> 👋</h2>
                <h1 className="text-5xl font-bold text-black">
                Front<span className="text-purple-600">end</span> Developer
                </h1>
                <p className="mt-4 text-lg text-gray-500 max-w-xl">
                I&apos;m a frontend developer based in Johannesburg. I&apos;ll help you design and build beautiful websites your users will love.
                </p>
                
                <div className="mt-8 space-x-4">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=brilliantk49@gmail.com"
                        >
                        Get In Touch
                    </a>  
                </button>
                    <Link href='/projects'>
                        <button className="border border-gray-400 text-black px-6 py-3 rounded-lg shadow hover:border-purple-600">Browse Projects</button>
                    </Link>
                </div>
            </div>

            <div className="mt-12 mb-16">
                <div className="relative w-96 h-96 rounded-full border-4 border-purple-600">
                <Image
                    src={profile}
                    alt="Profile Picture"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
                </div>
            </div>
        </div>
    </div>
  );
}


export default Home
