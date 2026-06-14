import './Home.scss'
import HoverText from '../HoverText/HoverText';
import profile from "../../assets/profile.jpeg";

const Home =()=>{
    return (
        <section className="home">
            <div className="glassCard">
                <div className="content" style={{alignItems:"flex-start"}}>
                    <h2 style={{alignItems:"left", display:"flex"}}><HoverText>Hi, i'm</HoverText> </h2>
                    <h1>
                        <HoverText>Lalit Agrawal</HoverText>
                    </h1>
                    <h2><HoverText>Software Engineer</HoverText></h2>
                    <p style={{color:"white", fontSize:"20px"}}> <HoverText>Developer || Programmer || Curious Mind</HoverText> </p>
                    <p style={{color:"white", fontSize:"20px"}}> <HoverText>Passinate about solving complex problems </HoverText> </p>
                
                
                </div>

                <div className="image">
                    <div className="inner">
                        <img src={profile} alt="profile"/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;