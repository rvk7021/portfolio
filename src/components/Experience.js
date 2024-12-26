import React from "react";
import "../cssfiles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { JobData } from "../constants/Data";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <section id="experience" className="mt-20 mb-10">
    <motion.div
        className="flex items-center justify-center text-purple-500 mb-14 font-extrabold text-[30px] sm:text-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}
    >
        Experience
    </motion.div>
      <VerticalTimeline animate={false}>
        {JobData.map((Job, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "transparent",
              color: "white",
              padding: 0,
            }}
            date={Job.duration}
            dateClassName="datechange"
            iconStyle={{ background: "purple", color: "white" }}
          >
            <div className="bg-[rgba(108, 26, 152, 0.805)] rounded-md p-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className=" text-2xl sm:text-3xl text-center text-white font-bold p-2">
                  {Job.position}
                </h1>
                <h1 className="text-[18px]  sm:text-[24px] text-center text-white my-3">
                  @{Job.company}
                </h1>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ul className="workdone rounded-md p-4  mx-2 mt-4 list-disc list-inside">
                  {Job.points.map((point, index) => (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <li
                        key={index}
                        className="sm:text-[18px] font-sans my-2"
                      >
                        {point}
                      </li>
                    </motion.div>
                  ))}
                </ul>
              </motion.div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      </section>
  );
};

export default Experience;
