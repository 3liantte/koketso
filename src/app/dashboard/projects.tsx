import React from 'react'
import Image from 'next/image';
import card from '../assets/card.png'
import slider from '../assets/slider.png'
import ecommerce from '../assets/ecommerce.png'
import wallspaper from '../assets/wallspaper.png'

const Projects = () => {
    const projects = [
        {
          title: "3D Card",
          description: "3D Card is a component is card in a 3D space and is responsive when hovering over it.",
          imageUrl: card, 
        },
        {
          title: "Slider",
          description: "Slider is a full layed out carousel, the content inside changes automatically",
          imageUrl: slider, 
        },
        {
          title: "GrocCheck",
          description: "E-commerce platform promoting eco-friendly products specifically groceries, it contains all the food supermarkets.",
          imageUrl: ecommerce, 
        },
        {
          title: "Live3D Wallpaper",
          description: "Live 3D wallpaper is an innovative type of website covering that adds texture, animation and depth to the background or home page of your web application.",
          imageUrl: wallspaper,
        },
      ];
    
      return (
        <div className="py-12 px-5 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-10">
            Projects<span className="text-purple-600">.</span>
          </h1>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl cursor-pointer">
            {projects.map((project, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="border border-gray-200 rounded-lg shadow-lg p-5 hover:shadow-xl 
                transition duration-300 bg-white relative hover:scale-110 ease-in-out delay-150"
              >
                <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default Projects
