import HeaderUi from "./headerUi";


export default function Home() {
  return (
    <main>
      <HeaderUi/>
      <div>
{/* Img Banner Text */}
        <div className="bg-[url('/../back.svg')] bg-no-repeat bg-[length:86%_auto]  bg-[position:-34px_80px]">
          <div className="w-full text-center p-5 md:p-40 h-[900px]">
            <img alt="" src="../Text-home.svg" className="mx-auto h-[250px] w-auto" />
            <img alt="" src="../scroll-down-icon.svg" className="relative top-28 mx-auto h-[40px] w-auto" />
          </div>
        </div>
{/* description info*/}
        <div className="p-36">
          <p>leonardo</p>
        </div>
      </div>
    </main>
  );
}
