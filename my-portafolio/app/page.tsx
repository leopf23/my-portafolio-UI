import HeaderUi from "./headerUi";
import 'animate.css';
import Banner from "./banner";


export default function Home() {
  return (
    <main>
      <HeaderUi/>
      <div>
    <div className="scroll-snap-container h-screen">
      {/* Img Banner Text */}   
       <Banner/>

        {/* About me*/}
        <div className="scroll-snap-item h-screen p-36">
          <p className="text-[50px] font-semibold">About me</p>
        </div>

         {/* Skill*/}
         <div className="scroll-snap-item h-screen p-36">
          <p className="text-[50px] font-semibold">Skill</p>
        </div>

         {/*Portafolio*/}
        <div className="scroll-snap-item h-screen p-36">
          <p className="text-[50px] font-semibold">Portafolio</p>
        </div>
    </div>
      </div>
    </main>
  );
}
