import React from 'react';
// import FaUserNinja FaLaptopCode FaDatabase
import { FaUserNinja, FaLaptopCode, FaDatabase } from 'react-icons/fa';
// motion
import { motion } from "framer-motion";
// variants
import {fadeIn} from "../variants";
// countUp
import CountUp from "react-countup";
// import visibilty sensor
import VisibilitySensor from 'react-visibility-sensor';
// import link 
import { Link } from 'react-scroll';

const Skills = () => {
  return (
    <section className='lg:h-screen bg-primary' id='skills'>
      {/* Heading */}
      <div className=''>
        <h1 className='text-center text-[48px] text-font2 font-secondary font-semibold py-5'>My Skills</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* -------Problem Solving------- */}

        {/* -------Front End Web Development------- */}
        <motion.div 
         variants={fadeIn('right', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
         className="flex flex-col items-center mt-4 md:mt-0 font-secondary"
        >
          {/* Icon */}
          <div className="bg-green-500 rounded-full p-4 hover:bg-font3">
            <FaLaptopCode className="text-white" size={144} />
          </div>
          {/* Sub Heading */}
          <h2 className="text-[36px] text-font3 font-semibold mt-2">Front End Web Development</h2>
          {/* Paragraph */}
          <p className="text-center text-[24px] mt-2">
          As a Front End Developer, I master HTML, CSS, and React for dynamic interfaces, skillfully implementing styling with Tailwind CSS and Styled Components.          </p>
        </motion.div>

        {/* -------Data Analyst------- */}
        <motion.div 
         variants={fadeIn('right', 0.7)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
         className="flex flex-col items-center mt-4 md:mt-0 font-secondary"
        >
          {/* Icon */}
          <div className="bg-blue-500 rounded-full p-4 hover:bg-font3">
            <FaDatabase className="text-white" size={144} />
          </div>
          {/* Sub Heading */}
          <h2 className="text-[36px] text-font3 font-semibold mt-2">Back End Web Development</h2>
          {/* Paragraph */}
          <p className="text-center text-[24px] mt-2">
          In Backend Development, I specialize in Node.js, Express, and MongoDB, creating robust server-side applications with efficient data management for scalable solutions.          </p>
        </motion.div>
      </div>
      {/* ---Button--- */}
      <div className='flex flex-col items-center justify-center mt-10'>
        <Link
         to='work'
         smooth={true}
         spy={true}
        >
          <button className='btn btn-lg btn-hover'>My Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default Skills;
