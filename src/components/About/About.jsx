import HoverText from '../HoverText/HoverText';
import './About.scss'

const About = ()=>{
    return (
        <section className="About-wrapper">
            <div className="AboutCard">
                <div className="About-heading">
                    <h1><HoverText>About Me</HoverText></h1>
                </div>
                <div className="About-content">
                    <div className="About-left">
                        <p>
                            I'm Software Engineer, NIT Surat graduate with a strong interest in backend engineering, distributed systems, and scalable software architecture. <br/>
                            I enjoy designing systems that are fast, reliable, and efficient. Whether it's reducing latency, improving throughput, optimizing infrastructure costs, or simplifying user workflows, I'm constantly looking for ways to make software perform better and save users valuable time.
                            My experience spans concurrent systems, low-latency platforms, secure backend services, AI applications, and full-stack development. I combine strong problem-solving skills with a focus on building production-ready solutions that scale.
                        <ul className="points">
                            <li>CodeForces: Specialist (Max:1583) &amp; AtCoder: 4Kyu (Max:1232) </li>
                            <li>CodeChecf: 3 Star (Max:1719) &amp; Leetcode: Knight (Max:1966) </li>
                            <li>AIR 24 in CodeSmash 4.0 organized by Mercer|Mettl among 1.2 Million participants</li>
                        </ul>
                        </p>
                    </div>
                    <div className="About-right">
                        <div className="Resume">
                            <h2><HoverText>My Resume</HoverText></h2>
                            <h2><HoverText>Template</HoverText></h2>

                        <div className="click">
                            CLICK HERE TO VIEW
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;