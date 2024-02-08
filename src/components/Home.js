import React from 'react';
//logo
import Logo from '../assets/logo.png';
//ninja pic
import Ninja from '../assets/ninja.png';
//icons
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// import links
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="bg-primary h-[100vh] flex flex-col items-center justify-center" id="home">
      {/* logo */}
      <div className='absolute left-5 top-5'>
        <a href='#' className=''>
          <img src={Logo} alt='logo' />
        </a>
      </div>
      {/* socials */}
      <div className='absolute right-5 top-5'>
        <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
          <a href="https://www.linkedin.com/in/diptanshu-chattopadhyay-67a23a239/">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/diptanshu14">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/diptanshu.chattopadhyay/">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/diptanshu1939">
            <FaTwitter size={30} />
          </a>
        </div>
      {/* Center Elements */}
      </div>
      <motion.img 
       variants={fadeIn("up", 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }}
       src={Ninja} alt="Ninja" className="w-48 h-48 mb-4" 
      />
      {/* Name */}
      <motion.h1
       variants={fadeIn("up", 0.4)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }} 
       className="text-[36px] lg:text-[72px] font-semibold font-secondary"
      >
        Diptanshu Chattopadhyay
      </motion.h1>
      {/* Type Animation */}
      <motion.h2 
       variants={fadeIn("up", 0.5)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }}
       className="text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] mt-3"
      >
        <TypeAnimation
          className="text-font2"
          sequence={[
            "Developer",
            2000,
            "Student",
            2000,
            "Front-End",
            2000,
            "Back-End",
            2000,
          ]}
          speed={50}
          wrapper="span"
          repeat={Infinity}
        />
      </motion.h2>
      {/* Paragraph */}
      <motion.p 
       variants={fadeIn("up", 0.6)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }}
       className="text-center text-[24px]"
      >
        Developing websites that leave a lasting effect on the digital landscape.
      </motion.p>
      {/* Button */}
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='flex flex-row justify-center items-center gap-x-10'
      >
        <Link
          to='about'
          smooth={true}
          spy={true}
        >
          <button className='btn-sm btn hover'>About Me</button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
