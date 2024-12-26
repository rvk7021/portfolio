import { motion } from 'framer-motion';
import '../cssfiles/Project.css';

const ProjectCard = ({ Data, image }) => {
    return (
        <motion.div
            className="information md:mt-10 p-2 rounded-[10px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        > 
            <div
                className="ProjectCard"
                style={{
                    backgroundImage: `url("${image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="overlay">
                    <div>
                        <span className="text-white text-2xl font-bolder">Tech Stack</span>
                        <ul className="text-[10px] tech-stack">
                            {Data.techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="projectbox">
                <h3>{Data.title}</h3>
                <p className="text-center text-[17px] h-20">{Data.description}</p>
                <p className="mt-3 text-center">
                    <a href={Data.projectLink} target="_blank" rel="noreferrer" className="button cursor-pointer">Live Demo</a>
                    <a href={Data.codeLink} target="_blank" rel="noreferrer" className="button button-github cursor-pointer">GitHub</a>
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
