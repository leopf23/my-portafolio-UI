import HeaderUi from "./headerUi";
import 'animate.css';


export default function Home() {
  return (
    <main>
      <HeaderUi/>
      <div>
    <div className="scroll-snap-container h-screen">
      {/* Img Banner Text */}   
        <div className="scroll-snap-item"> 
        <div className="bg-[url('/../back.svg')] bg-no-repeat bg-[length:86%_auto]  bg-[position:-34px_80px]">
            <div className="w-full text-center p-5 md:p-40 h-[900px]">
              <div className= "mx-auto h-[250px] w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="250" viewBox="0 0 986 281">
                <g id="Grupo_2" data-name="Grupo 2" transform="translate(105.5 71.945)">
                  <text className="tracking-in-expand" id="DESIGNER" transform="translate(-104.5 146.055)" fill="#fff" stroke="#03249c" stroke-width="1" font-size="192" font-family="BMWMotorrad-Bold, BMW Motorrad" font-weight="700" opacity="0.18"><tspan x="0" y="0">DESIGNER</tspan></text>
                  <text className="animate__animated animate__fadeIn" id="Designer-2" data-name="Designer" transform="translate(353 145.555)" fill="#03249c" font-size="126" font-family="BMWMotorrad-Bold, BMW Motorrad" font-weight="700" letter-spacing="0.059em"><tspan x="-348.705" y="0">DESIGNER</tspan></text>
                  <text className="animate__animated  animate__fadeIn" id="UI_UX" data-name="UI/UX" transform="translate(8 30.555)" fill="#03249c" font-size="11" font-family="DREAMS"><tspan x="0" y="0">UI/UX</tspan></text>
                  <text className="tracking-in-contract" id="Leonardo_Perez_Figueroa"  data-name="Leonardo Perez Figueroa" transform="translate(702 194.555)" fill="#03249c" font-size="28" font-family="OpenSans-Medium, Open Sans" font-weight="500"><tspan x="-331.174" y="0">Leonardo Perez Figueroa</tspan></text>
                </g>
              </svg>
              </div>
              <img alt="" src="../scroll-down-icon.svg" className="relative top-28 mx-auto h-[40px] w-auto" />
            </div>
          </div>
        </div>

        {/* Skill*/}
        <div className="scroll-snap-item h-screen p-36">
          <p className="text-2xl">Skill</p>
        </div>

         {/*Portafolio*/}
        <div className="scroll-snap-item h-screen p-36">
          <p className="text-2xl">Portafolio</p>
        </div>
    </div>
      </div>
    </main>
  );
}
