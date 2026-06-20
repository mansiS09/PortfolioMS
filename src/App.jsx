import React,{useState,useEffect} from 'react';
import Navbar from "./sections/decorate/Navbar";
import Hero from '/src/sections/Hero';
import About from '/src/sections/About';
import Project from '/src/sections/Project';
import Contact from '/src/sections/Contact';
import GridDistortion from '/src/sections/decorate/GridDistortion';
import layer4a from '/src/assets/layer4a.jpg';

export default function App() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen w-full relative overflow-hidden">
        
      <div className="relative flex min-h-screen flex-col items-center mb-4 justify-center overflow-hidden">
        <Navbar/>
        <Hero/>
        <Project/>
        <About/>
        <Contact/>
      </div>

      </div>
    );
  }


  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 z-0 h-full w-full">
        <GridDistortion
          imageSrc={layer4a}
          grid={15}
          mouse={0.10}
          strength={0.15}
          relaxation={0.9}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="absolute top-1/2 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

      <div className="z-10 w-full max-w-md rounded-2xl border border-white/10 font-smooch-sans-my bg-white/5 p-10 text-center text-white shadow-2xl backdrop-blur-md m-4">
        <h2 className="mb-2 text-7xl font-extrabold tracking-tight">
          Hi there!
        </h2>
        <p className="mb-6 text-2xl font-bold text-white">
          Before we begin...what's your name?
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name goes here!"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xl text-white placeholder-slate-200 outline-none transition-all duration-200 "
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full rounded-xl border 
            bg-linear-to-r from-purple-600/60 to-orange-400/60 border-none shadow-xl/20 py-3 font-extrabold text-2xl text-white transition-all duration-200 hover:bg-linear-to-l from-purple-600 to-orange-400 
            shadow-lg shadow-purple-500/40 hover:shadow-white/70 hover:scale-105
            active:scale-[0.98] ">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
