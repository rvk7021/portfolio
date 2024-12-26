import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import "../cssfiles/Skills.css";
import LineGradient from "./LineGradient";
import SkillsSet from "../effects/SkillSet";

const Skills = () => {
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className=" pt-10 pb-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-10">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-center font-playfair  text-4xl mb-5">
            MY <span className="text-amber-600">SKILLS</span>
          </p>
          <LineGradient />
          <p className="mt-10 mb-7 font-sans tracking-wide	word">
            I'm a full stack developer with expertise in a vast array of tech
            stacks, enabling me to handle both front-end and back-end
            development efficiently.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMedium ? (
            <div
              className="bg-blue relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src="/my-skills.jpeg" />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="/my-skills.jpeg" />
          )}
        </div>
      </div>

      {/* SKILLS*/}
      <div className="md:flex md:justify-between mt-16 gap-32 ">
        {/* innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair  text-5xl">01</p>
              <p className="font-playfair  text-3xl mt-3">
                Innovative
              </p>
            </div>
            {/*  */}
            <div className="skillone  w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
              <img
                src="/innovative.png"
                alt="innovative"
                className="opacity-[0.13]"
              />
            </div>
          </div>
          <p id="typingparagraph" className="mt-10 ">
            As a developer, I leverage my innovative thinking to design creative
            solutions and tackle complex problems. My approach focuses on
            exploring new technologies and methodologies to drive progress and
            deliver impactful results.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair  text-5xl">02</p>
              <p className="font-playfair  text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
              <img
                src="/imaginative.png"
                alt="innovative"
                className="opacity-[0.14]"
              />
            </div>
          </div>
          <p className="mt-10">
            My imaginative approach as a developer enables me to think outside
            the box and envision creative solutions for complex challenges in my
            work. I excel at conceptualizing innovative features and exploring
            unconventional methods to develop software that stands out and meets
            unique needs.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair  text-5xl">03</p>
              <p className="font-playfair  text-3xl mt-3">
                Collaborative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
              <img
                src="/collaborative.png"
                alt="innovative"
                className="opacity-[0.14]"
              />
            </div>
          </div>
          <p className="mt-5">
            As a developer, my collaborative approach fosters innovation and
            problem-solving. I thrive in team environments, leveraging diverse
            perspectives to create impactful solutions and drive success. My
            teamwork skills ensure effective communication and collective
            achievement of goals.
          </p>
        </motion.div>
      </div>
      <div className="skillset md:flex md:justify-between mt-16 gap-32 ">
        <SkillsSet />
      </div>
    </section>
  );
};

export default Skills;
