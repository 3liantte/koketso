import React from 'react';
import Image from 'next/image';
import profile from '../assets/profile.jpg';


const Contacts = () => {
  return (
    <div className="min-h-screen px-4">
        <div className='flex flex-col md:flex-row justify-center items-center mt-20'>
            <div className="text-center flex-col mt-20">
                <h2 className="text-lg text-gray-600">Hey, I&apos;m Koketso 👋</h2>
                <h1 className="text-5xl font-bold text-black">
                Front<span className="text-purple-600">end</span> Developer
                </h1>
                <div className="mt-12 mb-16">
                <div className="relative w-96 h-96 rounded-full border-3 border-purple-600">
                <Image
                    src={profile}
                    alt="Profile Picture"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
                </div>
                <p className="mt-4 text-lg text-gray-500 max-w-xl">
                I&apos;m a frontend developer based in Johannesburg. I&apos;ll help you design and build beautiful websites your users will love.
                As a passionate front-end developer, I specialize in creating intuitive, 
                responsive web applications using modern technologies like HTML5, CSS3, JavaScript, 
                and React. With a strong focus on user experience and clean code, 
                I bring ideas to life with efficient, scalable solutions. 
                I&apos;m particularly adept at styling with Tailwind CSS, which allows me to rapidly 
                develop visually appealing and mobile-first interfaces. Eager to keep learning and growing, 
                I thrive in collaborative environments
                and love working on projects that challenge my skills and creativity.
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
            </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Contacts