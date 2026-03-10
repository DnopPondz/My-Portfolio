import Image from "next/image";

const projects = [
  {
    title: "My Profile",
    imageUrl: "https://image.thum.io/get/width/800/crop/600/https://my-portfolio-pi-jet-94.vercel.app/",
    githubUrl: "",
    liveUrl: "",
    techs: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "NextJS", "DaisyUI"],
    status: "Done",
  },
  {
    title: "Education web layout",
    imageUrl: "https://image.thum.io/get/width/800/crop/600/https://educateweb.vercel.app/",
    githubUrl: "https://github.com/DnopPondz/Educateweb",
    liveUrl: "https://educateweb.vercel.app/",
    techs: ["HTML", "CSS"],
    status: "Done",
  },
  {
    title: "Login layout",
    imageUrl: "https://image.thum.io/get/width/800/crop/600/https://login-layout-three.vercel.app/",
    githubUrl: "https://github.com/DnopPondz/login-layout",
    liveUrl: "https://login-layout-three.vercel.app/",
    techs: ["HTML", "CSS", "JavaScript"],
    status: "Done",
  },
  {
    title: "Login with API Swagger",
    imageUrl: "https://image.thum.io/get/width/800/crop/600/https://angular-login-smoky.vercel.app/login",
    githubUrl: "https://github.com/DnopPondz/Angular-login",
    liveUrl: "https://angular-login-smoky.vercel.app/login",
    techs: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Angular", "Swagger"],
    status: "Done",
  },
  {
    title: "BookNest",
    imageUrl: "https://image.thum.io/get/width/800/crop/600/https://my-portfolio-pi-jet-94.vercel.app/",
    githubUrl: "https://github.com/DnopPondz/My-Portfolio",
    liveUrl: "https://my-portfolio-pi-jet-94.vercel.app/",
    techs: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "NextJS", "DaisyUI"],
    status: "Working",
  },
];

const Project = () => {
  return (
    <div className="w-full min-h-[800px] h-auto flex flex-col items-center justify-start bg-[#2a0945]">
      <div className="mt-7">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
          My <span className="text-[#fcda68]">Collection</span>
        </h1>
      </div>

      <div className="mt-20">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-[290px] h-[320px] bg-blue-950 rounded-lg shadow-2xl shadow-blue-900"
            >
              <div className="flex flex-col items-center">
                <div className="group w-[250px] h-[120px] mt-2 rounded-md transition-transform duration-300 hover:scale-105 hover:-translate-y-[5px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#fcda68] opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>

                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={300}
                    height={150}
                    unoptimized
                    className="object-cover rounded-md z-0 w-full h-full"
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl"
                      >
                        <i className="bx bx-show-alt"></i>
                      </a>
                    )}
                  </div>
                </div>

                <h1 className="text-white mt-2 self-start ml-5">{project.title}</h1>

                <div className="flex flex-wrap gap-3 text-white mx-4 mt-4 mb-2">
                  {project.techs.map((tech) => (
                    <p key={tech} className="p-1 border-2 rounded-lg bg-blue-900">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              <p className="text-start py-2 pl-4 text-white">
                Work status:
                <span className="ml-2 text-[#fcda68]">{project.status}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;