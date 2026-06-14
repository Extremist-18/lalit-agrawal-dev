import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from './components/Loader/Loader.jsx';
import Layout from './Layout.jsx';
import LandingPage from './LandingPage.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import './App.css'

function App() {
    const [Loading, setLoading] = useState(true);
    useEffect(()=>{
      setLoading(true);
      const time = setTimeout(()=>{
        setLoading(false);
      },1500);

      return ()=>clearTimeout(time);
    },[]);

    if(Loading){
      return <Loader/>
    }
    return(
      <>
        <Toaster position='top-right' />
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      </>
    );
}

export default App
