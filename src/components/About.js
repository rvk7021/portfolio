import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import AboutMeCard from '../effects/AboutMeCard.js';
import { Data } from '../constants/Data.js';

const About = () => {
  return (
    <div>
      <h1 className='text-center text-4xl my-2'>My Education Journey So Far</h1>
       <VerticalTimeline animate={false}>
      {Data.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgba(11, 8, 49, 0.402)', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(11, 8, 49, 0.402)' }}
          date={item.date}
          iconStyle={{ background: 'purple',color: 'white' }}
          icon={item.icon}
        >
          <AboutMeCard
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            marks={item.score}
          />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </div>
  );
};

export default About;
