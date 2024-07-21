"use client"; // Marca el componente como Cliente
import { useEffect } from "react";
import HeaderUi from "./headerUi";
import 'animate.css';
import Banner from "./banner";
import About from "./about";

export default function Home() {
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
    <main>
      <HeaderUi />
      <div>
        <div className="scroll-snap-container h-screen">
          {/* Img Banner Text */}
          <Banner />

          {/* About me */}
          <div className="scroll-snap-item h-screen md:p-36 p-10 animate-on-scroll ">
            <About/>
          </div>

          {/* Skill */}
          <div className="scroll-snap-item h-screen md:p-36 p-10 animate-on-scroll">
            <p className="text-[50px] font-semibold">Skill</p>
          </div>

          {/* Portafolio */}
          <div className="scroll-snap-item h-screen md:p-36 p-10 animate-on-scroll">
            <p className="text-[50px] font-semibold">Portafolio</p>
          </div>
        </div>
      </div>
    </main>
  );
}
