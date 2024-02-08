import React from 'react'
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// import images
import Img1 from "../assets/portfolio-img4.png";
import Img2 from "../assets/portfolio-img5.png";
import Img3 from "../assets/portfolio-img6.png";
// import link
import { Link } from 'react-scroll';

const Work = () => {
  return (
    <section className='bg-secondary' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col'>
          {/* -----Header----- */}
          <div className='flex flex-col items-center justify-center mt-5'>
            {/* Title */}
            <h1 className='text-[48px] text-font2 font-secondary font-semibold py-3 lg:text-[64px]'>
              My Latest Projects
            </h1>
            {/* Sub Title */}
            <p className='text-[24px] '>
              Here is the the culmination of my creativity and technical skills
              through a collection of captivating projects.
            </p>
          </div>
          {/* -----------First Project---------- */}
          <div className='flex flex-col lg:flex-row py-5'>
            {/* image */}
            <motion.div 
             variants={fadeIn("right", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }} 
             className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/2"
            >
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* project image */}
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* title */}
              <a href='https://github.com/diptanshu14/estate-explorer'>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Estate Explorer</span>
              </div>
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Find your perfect Residence</span>
              </div>
              </a>
            </motion.div>
            {/* Project Description */}
            <motion.div 
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }} 
             className='flex flex-col items-center justify-center lg:w-1/2 px-5 py-5'
            >
              <p>
              Meet Estate Explorer, a cutting-edge real estate marketplace developed using the MERN Stack
               and styled with Tailwind CSS. Connecting buyers and sellers seamlessly, it offers a 
               user-friendly interface with robust search features and real-time market updates. 
               Estate Explorer goes beyond traditional listings, providing a secure platform for 
               informed decision-making. Experience a modern and visually appealing approach 
              to real estate with Estate Explorer – where exploration meets efficiency.
              </p>
            </motion.div>
          </div>
          {/* ------------Second Project------------ */}
          <div className='flex flex-col lg:flex-row py-5'>
            {/* image */}
            <motion.div
             variants={fadeIn("right", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }} 
             className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/2"
            >
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* project image */}
              <img
                src={Img2}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* title */}
              <a href='https://github.com/diptanshu14/recipe-finder-app'>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Recipe App</span>
              </div>
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Find your Food</span>
              </div>
              </a>
            </motion.div>
            {/* Project Description */}
            <motion.div
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }} 
             className='flex flex-col items-center justify-center lg:w-1/2 px-5 py-5'
            >
              <p>
              Introducing Recipe App, crafted with HTML, CSS, 
              and JavaScript, complemented by TheMealDB API. This user-friendly app 
              simplifies the quest for delicious recipes, offering a seamless browsing 
              experience. With an intuitive interface and interactive features, 
              Recipe App makes discovering new culinary delights a breeze. 
              Unleash your inner chef and explore a world of 
              flavors with Recipe App, where the perfect recipe is just a click away.
              </p>
            </motion.div>
          </div>
          {/* ------------Third Project------------ */}
          <div className='flex flex-col lg:flex-row py-5'>
            {/* image */}
            <motion.div
             variants={fadeIn("right", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }} 
             className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-1/2"
            >
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* project image */}
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* title */}
              <a href='https://github.com/diptanshu14/code-editor'>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">CODE CRAFT</span>
              </div>
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Write Code in HTML, CSS, JS</span>
              </div>
              </a>
            </motion.div>
            {/* Project Description */}
            <motion.div
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }} 
             className='flex flex-col items-center justify-center lg:w-1/2 px-5 py-5'
            >
              <p>
              CodeCraft, a sleek ReactJS-based code editor designed to seamlessly compile
               HTML, CSS, and JavaScript in a unified workspace. With a user-friendly 
               interface and real-time compiler, CodeCraft enhances efficiency by 
               eliminating the need to switch between tabs. Equipped with syntax highlighting, 
               autocompletion, and collaborative features, it ensures a smooth and error-free 
               coding experience, ideal for both seasoned developers and beginners alike. 
              </p>
            </motion.div>
          </div>
          {/* -----Button----- */}
          <div className='flex flex-col items-center justify-center'>
            <Link
             to='contact'
             smooth={true}
             spy={true}
            >
              <button className='btn btn-lg btn-hover mb-5'>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work