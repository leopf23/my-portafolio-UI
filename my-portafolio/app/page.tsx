"use client"; // Marca el componente como Cliente
import { useEffect } from "react";
import HeaderUi from "./headerUi";
import 'animate.css';
import Banner from "./banner";
import About from "./about";
import Skill from "./skill";
import CardPortafolio from "./cardPortafolio";


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
    <main className=" bg-white dark:bg-blueDark">
      <HeaderUi />
      <div>
        <div className="scroll-snap-container h-screen">
          {/* Img Banner Text */}
          <div id="banner">
           <Banner />
          </div>

          {/* About me */}
          <div id="about" className="scroll-snap-item h-screen py-[113px] px-[25px]  md:p-10 lg:p-[12rem] 2xl:p-[19rem] animate-on-scroll ">
            <About/>
          </div>

          {/* Skill */}
          <div id="skill" className="scroll-snap-item h-screen py-[85px] px-[21px] md:p-10 lg:p-[12rem] 2xl:p-[19rem] animate-on-scroll ">
             <Skill/>
          </div>

          {/* Portafolio */}
          <div id="portafolio" className="content-center scroll-snap-item h-screen py-[83px] px-[19px] md:p-10 lg:p-[12rem] 2xl:p-[19rem] animate-on-scroll">
          <p className="text-[1.5rem] mb-10 text-blue font-semibold dark:text-blueText ">Portafolio</p>
             <CardPortafolio 
              title={"MarketShop"}
              category={"Sistema Web"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              imageSrc={"/2mockup.jpg"} projectUrl={"https://www.example.com/project"}
              align="left" 
              />
          </div>

          <div className="content-center scroll-snap-item h-screen p-8 md:p-10 lg:p-[10rem] 2xl:p-[32rem] animate-on-scroll">
             <CardPortafolio 
              title={"Bitacoras"}
              category={"App movil"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              imageSrc={"/mockup.svg"} projectUrl={"https://www.example.com/project"}
              align="right" 
              />
          </div>

          <div className="content-center scroll-snap-item h-screen p-8 md:p-10 lg:p-[12rem] 2xl:p-[19rem] animate-on-scroll">
             <CardPortafolio 
              title={"Banco Eterna"}
              category={"Sistema Web"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              imageSrc={"/mockup.svg"} projectUrl={"https://www.example.com/project"}
              align="left" // O "left"
              />
          </div>
        </div>
      </div>
    </main>
  );
}
