import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMedia from './SocialMedia';
import Type from '../effects/Type';
const LandingPage = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        // section is divided into two parts one is for image and other is for greeting message
        <section id="home" className='pb-5 md:flex md:justify-between md:items-center md:h-full gap-16 py-10' >
            <div className='basis-4/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2 '>
                {/* profile image part of the landing page */}

                {
                    isAboveLarge ? (
                        <div className="bg-[rgba(32, 4, 67, 0.513)] rounded-2xl relative flex flex-col items-center  w-full max-w-[400px] md:max-w-[500px]">
                        <img
                            alt="profile"
                            className=" relative z-10  hover:filter rounded-full opacity-90 saturate-200 transition duration-500 w-full max-w-[400px] md:max-w-[350px]"
                            src="/profilepic.jpeg"
                        />
                        <div className="text-center bg-gradient-to-r from-purple-700 to-red  text-white font-bold p-2 m-7  rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800">
                            <div className='h-7 w-20 bg-deep-blue rounded-xl'><a target='_black' href='https://www.linkedin.com/in/ranvijay-kumar-825457255/' className=''> Resume</a></div>
                        </div>
                        </div>
                    ) : (
                        <div className="bg-[rgba(32, 4, 67, 0.513)] rounded-2xl relative flex flex-col items-center">
                            <img
                                alt="profile"
                                className="ml-4 mr-4 bg-gradient-to-r to-slate-700 relative z-10 rounded-full hover:filter saturate-200 transition duration-500 w-full max-w-[250px]"
                                src="/profilepic.jpeg"
                            />

                        <div className="text-center bg-gradient-to-r from-purple-700 to-red  text-white font-bold p-2 my-7 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800">
                            <div className='h-7 w-20 bg-deep-blue rounded-xl'><a target='_black' href='https://www.linkedin.com/in/ranvijay-kumar-825457255/' className=''> Resume</a></div>
                        </div>
                        </div>
                    )
                }
            </div>

            {/* Greeting message part of the landing page */}

            <div className='z-30 basis-2/5 mt-5 md:mt-32'>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:1}}
                    variants={{
                        hidden: { opacity: 0, x:-50},
                        visible: { opacity: 1 ,x:0},
                    }}
                    >
                        <p className='text-3xl font-playfair z-10 text-center md:text-start md:text-5xl'>
                            Ranvijay {" "}
                            <span
                                className="xs:relative xs:text- xs:font-bold z-20  text-purple-300
                                before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                                >
                                Kumar
                            </span>
                        </p>
                        <h3 className=' text-1xl mt-5 mb-5  text-sm text-center md:text-start'>
                         <Type/>
                        </h3>
                        <p className="mt-2 mb-7  bg-[rgba(45, 17, 79, 0.429)] text-sm text-center md:text-start">
                           <br/>
                           I’m Ranvijay Kumar, a Computer Science Engineer from the Indian Institute of Technology, Nagpur. 
                           I’m excited to have you here and can’t wait to share my journey, projects, and passions with you.
                            From innovative tech solutions to creative problem-solving, this site offers a glimpse into my work and what drives me.

                           </p>
                        <p className="mt-4 mb-7 text-sm text-center md:text-start">  
                        </p>
                    </motion.div>
                    
                    <motion.div
                        className='flex justify-center mt-5 md:justify-start'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,amount:0.5}}
                        transition={{delay:0.5,ration:2}}
                        variants={{
                            hidden: { opacity: 0, x:-50},
                            visible: { opacity: 1 ,x:0},
                        }}
                    >
                        <AnchorLink
                            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold mr-2
                          hover:bg-blue hover:text-white hover:scale-110 transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                        >
                            Hire Me
                        </AnchorLink>
                        <AnchorLink
                          className='rounded-r-md bg-gradient-rainblue py-0.5 pr-0.5'
                          onClick={()=>setSelectedPage("contact")}
                          href="#contact"
                        >
                            <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center
                            font-playfair px-10'>
                                Contact Me
                            </div>
                        </AnchorLink>
                    </motion.div>
                    <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <SocialMedia/>
        </motion.div>
                 </div>
        </section>
    )
}

export default LandingPage;



// 1.28 hour 