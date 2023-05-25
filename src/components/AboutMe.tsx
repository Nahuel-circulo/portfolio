import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="min-h-screen font-poppins text-my-white">

      <div className="border-opacity-20 border-y border-my-purple selection:bg-purple-400">


        <div className="grid items-baseline justify-center max-w-4xl gap-8 py-8 mx-auto font-medium md:grid-cols-3 ">

          <div className="flex flex-col items-center self-center justify-center w-56 mx-auto border aspect-square rounded-xl border-my-purple">
            <Image src='/images/about/CodeIcon.svg' width={100} height={100} alt='code icon' />
            <p className="text-sm font-normal">+2 años como</p>
            <h4 className="text-xl">Programador</h4>
          </div>
          <div className="flex flex-col items-center justify-center w-56 mx-auto rounded-xl bg-my-purple bg-opacity-10 aspect-square">
            <Image src='/images/about/ProjectsIcon.svg' width={100} height={100} alt='projects icon' />
            <p className="text-sm font-normal">participacion en +7</p>
            <h4 className="text-xl">Proyectos Exitosos</h4>
          </div>
          <div className="flex flex-col items-center justify-center w-56 mx-auto border aspect-square rounded-xl border-my-purple">
            <Image src='/images/about/CodeIcon.svg' width={100} height={100} alt='code icon' />
            <p className="text-sm font-normal">+2 años como</p>
            <h4 className="text-xl">Programador</h4>
          </div>

          <div className="grid max-w-xs gap-4 p-8 mt-4 text-center rounded-lg md:max-w-none md:mt-0 text-my-purple md:col-span-3 md:grid-cols-3 bg-my-purple bg-opacity-10">
            <div>
              <p className="text-sm font-normal">bla bla bla</p>
              <h4 className="text-2xl font-bold">Full Stack</h4>
            </div>
            <div>
              <p className="text-sm font-normal">bla bla bla</p>
              <h4 className="text-2xl font-bold">Full Stack</h4>
            </div>
            <div>
              <p className="text-sm font-normal">bla bla bla</p>
              <h4 className="text-2xl font-bold">Full Stack</h4>
            </div>
          </div>

        </div>
        <div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;
