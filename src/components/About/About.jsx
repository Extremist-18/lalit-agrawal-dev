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

                        <ul className="points">
                            <li><a href="https://codeforces.com/profile/Lalit_Agrawal" target="_blank" className="anchor">CodeChef</a>: Expert (Max:1661) &amp; <a href="https://atcoder.jp/users/Lalit18" target="_blank" className="anchor">AtCoder</a>: 4Kyu (Max:1232) </li>
                            <li> <a href="https://www.codechef.com/users/lalit_agrawal" target="_blank" className="anchor">CodeChef</a>: 4 Star (Max:1800) &amp; <a href="https://leetcode.com/u/Lalit__Agrawal/" target="_blank" className="anchor">Leetcode</a>: Knight (Max:1968) </li>
                            <li>AIR 24 in CodeSmash 4.0 organized by Mercer|Mettl among 1.2 Million participants</li>
                        </ul>
                        </p>
                    </div>
                    <div className="About-right">
                        <div className="Resume">
                            <h2><HoverText>My Resume</HoverText></h2>
                            <h2><HoverText>Template</HoverText></h2>

                            <div className="click">
                                <a href="https://drive.google.com/file/d/1m3eyt1dD_uk1tcVfERmfEf2zv6xfva9S/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color:"white", textDecoration:"None"}}>CLICK HERE TO VIEW</a>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
