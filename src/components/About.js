import React from "react";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
//image
import Image from '../assets/kalu.png';
// import links
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="bg-secondary py-8 lg:py-24 lg:h-screen flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* ------image------ */}
          <div>
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}

            className="flex max-w-[320px] lg:max-w-[482px] w-96">
              <img src={Image} alt=""/>
            </motion.div>
          </div>
          {/* ------text------ */}
          <motion.div 
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          >
            <div className="flex-1">
              {/* Heading */}
              <h2 className=" font-secondary text-[44px] mb-3 tracking-[10%] uppercase text-font2 font-semibold">
                About Me
              </h2>
              {/* Sub-Heading */}
              <h3 className="text-tertiary font-secondary font-semibold text-[32px] text-font3 leading-[46px] mb-3">
              I am a passionate web developer, continuously exploring the dynamic world of coding.
              </h3>
              {/* Paragraph */}
              <p className="mb-3 text-tertiary text-[20px]">
                I am a fourth-year B.Tech student in ECE, passionate about web development.
                With expertise in HTML, CSS, JavaScript, and frameworks, I create captivating websites.
                Merging creativity and technology, I strive to deliver seamless user experiences.
                Let's collaborate and bring your digital vision to life!
              </p>
              {/* Button */}
              <Link
               to='skills'
               smooth={true}
               spy={true}
              >
                <button className='btn-sm btn btn-hover'>My Skills</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

