import React from 'react';
// import all social media icons
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-10 bg-primary " id='contact'>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
         {/* ------Right Section------ */}
        <motion.div
         variants={fadeIn("right", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }} 
         className='lg:w-1/2'
        >
          {/* Title */}
          <h1 className='lg:text-[80px] text-[48px] text-font2 py-4 mb-5'>Get in Touch</h1>
          {/* subtitle 1 */}
          <p className='lg:text-[40px] text-[24px] mb-3'>Want to Collaborate...??</p>
          {/* subtitle 2 */}
          <p className='lg:text-[40px] text-[24px]'>Feel free to get in touch with me via email or social media:</p>
        </motion.div>
         {/* -------Left Section------- */}
        <motion.div
         variants={fadeIn("left", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }} 
         className="flex flex-col lg:w-1/2"
         >
          {/* Mailto link */}
          <a href="mailto:diptanshuchattopadhyay14@gmail.com" >
            <button className=" w-[450px] lg:h-[60px] flex items-center mt-5 px-4 py-2 bg-red-500 text-[20px] rounded-full hover:bg-red-600">
              <FaEnvelope className="mr-2" size={40} />
              Email: diptanshuchattopadhyay14@gmail.com
            </button>
          </a>
          {/* Social media links */}
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/diptanshu-chattopadhyay-67a23a239/">
            <button className=" w-[450px] lg:h-[60px] flex items-center mt-5 px-4 py-2 bg-blue-600 text-[24px] rounded-full hover:bg-blue-700">
              <FaLinkedin className="mr-2" size={40} />
              LinkedIn: Diptanshu Chattopadhyay
            </button>
          </a>
          {/* GitHub */}
          <a href="https://github.com/diptanshu14">
            <button className=" w-[450px] lg:h-[60px] flex items-center mt-5 px-4 py-2 bg-gray-800 text-[24px] rounded-full hover:bg-gray-900">
              <FaGithub className="mr-2" size={40} />
              GitHub: diptanshu14
            </button>
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/diptanshu1939">
            <button className=" w-[450px] lg:h-[60px] flex items-center mt-5 px-4 py-2 bg-blue-400 text-[24px] rounded-full hover:bg-blue-500">
              <FaTwitter className="mr-2" size={40} />
              Twitter: diptanshu1939
            </button>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/diptanshu.chattopadhyay/">
            <button className=" w-[450px] lg:h-[60px] flex items-center mt-5 px-4 py-2 bg-pink-500 text-[24px] rounded-full hover:bg-pink-600">
              <FaInstagram className="mr-2" size={40} />
              Instagram: diptanshu.chattopadhyay
            </button>
          </a>
        </motion.div>
      </div>
      {/* --------Footer------- */}
      <div className='flex flex-col items-center justify-center h-[320px] text-2xl'>
        Made in Heaven
      </div>
    </section>
  );
};

export default Contact;
