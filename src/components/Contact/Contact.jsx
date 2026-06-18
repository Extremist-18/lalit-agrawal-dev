import "./Contact.scss"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import HoverText from "../HoverText/HoverText"
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode,SiCodeforces } from "react-icons/si";
import { MdEmail} from "react-icons/md";

const Contact=()=>{
    const [form,setForm]=useState({
        name:"",
        email:"",
        subject:"",
        message:"",
    });
    const [loading, setLoading] = useState(false);
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };
    const sendEmail = async(e)=>{
        e.preventDefault();
        setLoading(true);
        // console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        // console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
        // console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        try{
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            toast.success("Message Sent succesfully!!\n Lalit will revert you back soon!");
            setForm({
                name:"",
                email:"",
                subject:"",
                message:""
            });
        }catch(error){
            console.error(error);
            toast.error("Falied to send your message!");
        }
        setLoading(false);
    };
    return(
        <section className="contact">
            <div className="wrapper">
                <h2><HoverText>Lets Connect</HoverText> </h2>
                <h3 style={{color:"white"}}>I’m actively seeking opportunities with leading tech companies where I can contribute building large-scale, high-impact systems. 
                    <br/>
                    If you're working on ambitious challenges and believe I'd be a strong fit, 
                    I'd love to connect and explore opportunities.
                </h3>

                <div className="curr">
                    <a href="mailto:lalitagrawal680@gmail.com" ><MdEmail/></a>
                    <a href="https://www.linkedin.com/in/lalit-agrawal1808/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/> </a>
                    <a href="https://github.com/Extremist-18" target="_blank" rel="noopener noreferrer"><FaGithub /> </a>
                    {/* <a href="https://leetcode.com/u/Lalit__Agrawal/" target="_blank" rel="noopener noreferrer"><SiLeetcode/></a> */}
                    <a href="https://codeforces.com/profile/Lalit_Agrawal" target="_blank" rel="noopener noreferrer"><SiCodeforces/></a>
                    <a href="tel:+919408389271" ><FaPhoneAlt/></a>
                </div>

                <div className="container">
                    <form onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required/>
                        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
                        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
                        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required/>

                        <button type="Submit" disabled={loading}>{loading?"Sending":"Send Message"}</button>
                    </form>   
                <div className="map">
                <iframe
                    title="location"
                    src="https://maps.google.com/maps?q=SVNIT+Surat&z=16&output=embed"
                    loading="lazy"
                />
                </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
