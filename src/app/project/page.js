import Image from "next/image";

const Project = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto h-full flex flex-col items-center justify-center gap-10 mt-10 lg:mt-[90px] lg:mb-[90px] px-4">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="text-[20px] font-semibold">-PORTFOLIO-</h1>
        <h1 className="text-2xl md:text-4xl font-semibold">My Project</h1>
        <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-7 max-w-3xl">
          I specialize in developing highly customizable web and mobile
          applications to cater to diverse needs, ranging from e-commerce
          platforms to data visualization dashboards, leveraging cutting-edge
          technologies and agile methodologies to deliver exceptional user
          experiences.
        </p>
      </div>

      {/* Frontend */}
      <div className="flex flex-col  items-center gap-6">
        <h1 className="w-[100px] h-[40px] rounded-lg flex justify-center items-center bg-blue-600 text-white">
          <i className="bx bx-desktop pr-1 " undefined></i>FrontEnd
        </h1>

        {/* card */}
        <div className=" flex flex-wrap flex-row justify-center items-center gap-4">
          <div className="w-[270px] h-[360px] bg-blue-950 rounded-lg shadow-2xl shadow-blue-900">
            <div className=" flex flex-col items-center">
              <div className="w-[250px] h-[150px] mt-2 pt-3 rounded-md transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]">
                <Image 
                  src="/assets/img/Myprofile.png"
                  alt="Profile Picture"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>

              <h1 className="text-white mt-2 mr-[160px]">My Profile</h1>
              <div className="flex flex-row flex-wrap gap-3 text-white mx-4 mt-4 mb-2 ">
                <p className="p-1 border-2 rounded-lg bg-blue-900">HTML</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">CSS</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">
                  Tailwind CSS
                </p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">
                  JavaScript
                </p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">NextJS</p>
              </div>
              <div className="flex flex-row gap-1 mt-1 ">
                <a href="https://github.com/DnopPondz/My-Portfolio" target="_blank"><button className="bg-blue-800 w-[125px] h-[45px] border-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]">
                  <i className="bx bxl-github text-2xl text-white"></i>
                </button></a>
                <a href="https://my-portfolio-pi-jet-94.vercel.app/" target="_blank"></a><button className="bg-blue-800 w-[125px] h-[45px] border-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]">
                  <i className="bx bx-show-alt text-2xl text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backend */}
      <div className="flex flex-col items-center  gap-6">
        <h1 className="w-[100px] h-[40px] rounded-lg flex justify-center items-center bg-blue-600 text-white">
          <i className="bx bx-server pr-1"></i>Backend
        </h1>

        {/* card */}
        {/* <div className=" flex flex-wrap flex-row justify-center items-center gap-4">
          <div className="w-[270px] h-[360px] bg-blue-950 rounded-md">
            <div className=" flex flex-col items-center">
              <Image
                className="w-[250px] h-[150px] mt-2 rounded-md  "
                src=""
                art="project picture"
              />
              <h1 className="text-white mt-2 mr-[120px]">Project Name</h1>
              <div className="flex flex-row flex-wrap gap-3 text-white mx-4 mt-4 mb-2 ">
                <p className="p-1 border-2 rounded-lg bg-blue-900">HTML</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">CSS</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">Tailwind CSS</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">JavaScript</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">NextJs</p>
              </div>
              <div className="flex flex-row gap-1 mt-1 ">
                <button className="bg-blue-800 w-[125px] h-[45px] border-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]">
                  <i className="bx bxl-github text-2xl text-white"></i>
                </button>
                <button className="bg-blue-800 w-[125px] h-[45px] border-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]">
                  <i className="bx bx-show-alt text-2xl text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* FullStack */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="w-[100px] h-[40px] rounded-lg flex justify-center items-center bg-blue-600 text-white">
          <i className="bx bx-code-block pr-1"></i>FullStack
        </h1>

        {/* card */}
        {/* <div className=" flex flex-wrap flex-row justify-center items-center gap-4">
          <div className="w-[270px] h-[360px] bg-blue-950 rounded-md">
            <div className=" flex flex-col items-center">
              <Image
                className="w-[250px] h-[150px] mt-2 rounded-md  "
                src=""
                art="project picture"
              />
              <h1 className="text-white mt-2 mr-[120px]">Project Name</h1>
              <div className="flex flex-row flex-wrap gap-3 text-white mx-4 mt-4 mb-2 ">
                <p className="p-1 border-2 rounded-lg bg-blue-900">HTML</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">CSS</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">Tailwind CSS</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">JavaScript</p>
                <p className="p-1 border-2 rounded-lg bg-blue-900">NextJs</p>
              </div>
              <div className="flex flex-row gap-1 mt-1 ">
                <button className="bg-blue-800 w-[125px] h-[45px] border-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]">
                  <i className="bx bxl-github text-2xl text-white"></i>
                </button>
                <button className="bg-blue-800 w-[125px] h-[45px] border-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]">
                  <i className="bx bx-show-alt text-2xl text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
