"use client"; // Marca el componente como Cliente
import { useEffect } from "react";
import HeaderUi from "./headerUi";
import 'animate.css';
import Banner from "./banner";
import About from "./about";
import Skill from "./skill";
import Portafolio from "./portafolio";


export default function Home() {
function toggleDarkMode() {
  const html = document.querySelector('html')
  const current = localStorage.getItem("theme")
  if (!current) {
    localStorage.setItem("theme", "dark")  
    html?.classList.add("dark")
  } else {
    localStorage.removeItem("theme")  
    html?.classList.remove("dark")
  }
}

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.1,
    });

    const items = document.querySelectorAll(".scroll-snap-item");
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <main className=" bg-white dark:bg-blueDark">
      <HeaderUi />
      <button onClick={toggleDarkMode}>CHANGE THEME</button>
      <div>
        <div className="scroll-snap-container h-screen">
          {/* Img Banner Text */}
          <Banner />

          {/* About me */}
          <div className="scroll-snap-item h-screen p-8 md:p-10 lg:p-32 animate-on-scroll ">
            <About/>
          </div>

          {/* Skill */}
          <div className="scroll-snap-item h-screen p-8 md:p-10 lg:p-32 animate-on-scroll ">
             <Skill/>
          </div>

          {/* Portafolio */}
          <div className="scroll-snap-item h-screen p-8 md:p-10 lg:p-32 animate-on-scroll">
              <Portafolio/>
          </div>
        </div>
      </div>
    </main>
  );
}
