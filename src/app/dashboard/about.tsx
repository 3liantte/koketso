import React from 'react'

const About = () => {
    return (
        <div className="py-16 px-5 flex flex-col items-center">
          <section className="max-w-5xl w-full">
            <h1 className="text-5xl font-bold mb-10">
              Skills<span className="text-purple-600">.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold">Web Design</h3>
                <ul className="mt-3 text-gray-600 space-y-2">
                  <li>UI/UX Design</li>
                  <li>Responsive Design</li>
                  <li>Wireframing</li>
                  <li>User Research</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Frontend</h3>
                <ul className="mt-3 text-gray-600 space-y-2">
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>NextJS</li>
                  <li>CSS3</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Backend</h3>
                <ul className="mt-3 text-gray-600 space-y-2">
                  <li>NodeJS</li>
                  <li>MongoDB</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Soft Skills</h3>
                <ul className="mt-3 text-gray-600 space-y-2">
                  <li>Effective communication</li>
                  <li>Collaboration</li>
                  <li>Commitment</li>
                  <li>Leadership</li>
                </ul>
              </div>
            </div>
          </section>
    
          <section className="max-w-4xl w-full mt-16">
            <h1 className="text-4xl font-bold mb-8">
              My Story<span className="text-purple-600">.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              My journey as a front-end developer started back in late 2023, working as a <span className="text-purple-600">freelancer</span> for mostly personal projects.
            </p>
            <p className="text-lg text-gray-600 mb-4">
            As an aspiring frontend developer with mid-experience level in building responsive, 
            user-centric web applications using React.js, Tailwind CSS, and JavaScript. 
            Strong passion for clean UI/UX design and efficient code. 
            Seeking to contribute innovative solutions and grow within a dynamic development team and also showcase my skills.</p>
          </section>
    
          <footer className="mt-16 text-center w-full py-8 border-t border-gray-200">
            <div className="mt-8">
              <p className="text-gray-500">
                ©2023 All Rights Reserved. Made with 💜 by Koketso Seshoka
              </p>
            </div>
          </footer>
        </div>
      );
    };
    

export default About
