import Image from "next/image";

const Project = () => {
  return (
    <div className="w-full min-h-[800px] h-auto flex flex-col items-center justify-start  bg-[#2a0945]">
      <div className="mt-7">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
          My <span className="text-[#fcda68]">Collection</span>
        </h1>
      </div>
      <div className="mt-20">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* 1 */}
          <div className="w-[290px] h-[320px] bg-blue-950 rounded-lg shadow-2xl shadow-blue-900">
            <div className="flex flex-col items-center">
              <div className="group w-[250px] h-[120px] mt-2 rounded-md transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#fcda68] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <Image
                  src="/Profile.PNG"
                  alt="Profile Picture"
                  width={300}
                  height={150}
                  className="object-cover rounded-md z-0"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a
                    href="https://github.com/DnopPondz/My-Portfolio"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                  <a
                    href="https://my-portfolio-pi-jet-94.vercel.app/"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bx-show-alt"></i>
                  </a>
                </div>
              </div>

              <h1 className="text-white mt-2 self-start ml-5">My Profilio</h1>

              <div className="flex flex-wrap gap-3 text-white mx-4 mt-4 mb-2">
                {[
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "JavaScript",
                  "NextJS",
                  "DaisyUI",
                ].map((tech) => (
                  <p key={tech} className="p-1 border-2 rounded-lg bg-blue-900">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-start py-2 pl-4 text-white">
              Work status: <span className=" ml-2  text-[#fcda68]">Done</span>
            </p>
          </div>

          {/* 2 */}
          <div className="w-[290px] h-[320px] bg-blue-950 rounded-lg shadow-2xl shadow-blue-900">
            <div className="flex flex-col items-center">
              <div className="group w-[250px] h-[120px] mt-2 rounded-md transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#fcda68] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <Image
                  src="/1.PNG"
                  alt="Profile Picture"
                  width={300}
                  height={150}
                  className="object-cover rounded-md z-0"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a
                    href="https://github.com/DnopPondz/Educateweb"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                  <a
                    href="https://educateweb.vercel.app/"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bx-show-alt"></i>
                  </a>
                </div>
              </div>

              <h1 className="text-white mt-2 self-start ml-5">
                Education web layout
              </h1>

              <div className="flex flex-wrap gap-3 text-white mx-4 mt-4 mb-2">
                {["HTML", "CSS"].map((tech) => (
                  <p key={tech} className="p-1 border-2 rounded-lg bg-blue-900">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-start py-2 pl-4 mt-12 text-white">
              Work status: <span className=" ml-2  text-[#fcda68]">Done</span>
            </p>
          </div>

          {/* 3 */}
          <div className="w-[290px] h-[320px] bg-blue-950 rounded-lg shadow-2xl shadow-blue-900">
            <div className="flex flex-col items-center">
              <div className="group w-[250px] h-[120px] mt-2 rounded-md transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#fcda68] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <Image
                  src="/2.PNG"
                  alt="Profile Picture"
                  width={300}
                  height={150}
                  className="object-cover rounded-md z-0"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a
                    href="https://github.com/DnopPondz/login-layout"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                  <a
                    href="https://login-layout-three.vercel.app/"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bx-show-alt"></i>
                  </a>
                </div>
              </div>

              <h1 className="text-white mt-2 self-start ml-5">Login layout</h1>

              <div className="flex flex-wrap gap-3 text-white mx-4 mt-4 mb-2">
                {["HTML", "CSS", "JavaScript"].map((tech) => (
                  <p key={tech} className="p-1 border-2 rounded-lg bg-blue-900">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-start py-2 pl-4 mt-12 text-white">
              Work status: <span className=" ml-2  text-[#fcda68]">Done</span>
            </p>
          </div>

          {/* 4 */}
          <div className="w-[290px] h-[320px] bg-blue-950 rounded-lg shadow-2xl shadow-blue-900">
            <div className="flex flex-col items-center">
              <div className="group w-[250px] h-[120px] mt-2 rounded-md transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#fcda68] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <Image
                  src="/3.PNG"
                  alt="Profile Picture"
                  width={300}
                  height={150}
                  className="object-cover rounded-md z-0"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a
                    href="https://github.com/DnopPondz/Angular-login"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                  <a
                    href="https://angular-login-smoky.vercel.app/login"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bx-show-alt"></i>
                  </a>
                </div>
              </div>

              <h1 className="text-white mt-2 self-start ml-5">
                Login with API Swagger
              </h1>

              <div className="flex flex-wrap gap-3 text-white mx-4 mt-4 mb-2">
                {[
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "JavaScript",
                  "Angular",
                  "Swagger",
                ].map((tech) => (
                  <p key={tech} className="p-1 border-2 rounded-lg bg-blue-900">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-start py-2 pl-4 text-white">
              Work status: <span className=" ml-2  text-[#fcda68]">Done</span>
            </p>
          </div>

          {/* 5 */}
          <div className="w-[290px] h-[320px] bg-blue-950 rounded-lg shadow-2xl shadow-blue-900">
            <div className="flex flex-col items-center">
              <div className="group w-[250px] h-[120px] mt-2 rounded-md transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#fcda68] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <Image
                  src="/4.PNG"
                  alt="Profile Picture"
                  width={300}
                  height={150}
                  className="object-cover rounded-md z-0"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a
                    href="https://github.com/DnopPondz/My-Portfolio"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                  <a
                    href="https://my-portfolio-pi-jet-94.vercel.app/"
                    target="_blank"
                    className="text-white text-xl"
                  >
                    <i className="bx bx-show-alt"></i>
                  </a>
                </div>
              </div>

              <h1 className="text-white mt-2 self-start ml-5">BookNest</h1>

              <div className="flex flex-wrap gap-3 text-white mx-4 mt-4 mb-2">
                {[
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "JavaScript",
                  "NextJS",
                  "DaisyUI",
                ].map((tech) => (
                  <p key={tech} className="p-1 border-2 rounded-lg bg-blue-900">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-start py-2 pl-4 text-white">
              Work status:{" "}
              <span className=" ml-2  text-[#fcda68]">Working</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
