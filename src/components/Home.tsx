import Image from "next/image";
import GIthubIcon from "./icons/GIthubIcon";
import LinkInIcon from "./icons/LinkInIcon";

const HomeComponent = () => {
  return (
    <section className="container grid min-h-screen pt-20 mx-auto lg:grid-cols-2 place-items-center font-poppins">

      <div className="flex flex-col px-4 mx-auto ">
        <h2 className="text-2xl font-bold uppercase md:text-3xl xl:text-5xl text-my-white"> Hi, I'm  Nahuel Pedroso</h2>
        <h1 className="text-4xl font-bold uppercase lg:my-2 md:text-5xl xl:text-7xl text-my-purple">Web Developer</h1>
        <div className="flex items-center gap-4 mt-2">
          <button className="w-24 py-2 text-xs transition-transform rounded md:text-sm hover:scale-105 text-my-white bg-my-purple">Contact</button>
          <button className="transition-transform hover:scale-105 " aria-label="to github page"><GIthubIcon/></button>
          <button className="transition-transform hover:scale-105" aria-label="to linkin page"><LinkInIcon/></button>
        </div>
      </div>
      <div className="max-w-md px-4 md:px-8 lg:max-w-none ">
        <Image src='/images/home.svg' alt="developer" width={600} height={600} />
      </div>
    </section>
  );
}

export default HomeComponent;
