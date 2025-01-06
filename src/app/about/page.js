import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center gap-10 mt-10 lg:mt-[90px] lg:mb-[90px]">
      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 pt-6">
        {/* Profile Image */}
        <div className="rounded-2xl overflow-hidden w-[300px] h-[250px] sm:w-[350px] sm:h-[300px] lg:w-[500px] lg:h-[px]">
          <Image
            src="/img/pond.png"
            alt="Profile Picture"
            width={500}
            height={400}
            className="object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="w-full max-w-[575px] flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl text-[#42A5F5] font-semibold">-Introduction-</h1>
          <h1 className="text-3xl sm:text-4xl font-medium ">Web Developer</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#42A5F5]">
            I am a web developer looking for a junior role in a software
            development agency. I am familiar with React and JavaScript.
            However, I am open to working on any tech stack and am eager to
            learn and contribute to high-quality software.
          </p>
        </div>
      </div>

      {/* Resume Download Button */}
      <a
        className="w-[300px] sm:w-[400px] h-[60px] sm:h-[70px] rounded-full flex justify-center items-center gap-2 bg-blue-700 text-white text-center transition-transform duration-300 hover:scale-105"
        href="/resume/Wachirodol Resume.pdf"
        download="Wachirodol_Thongnate_Resume.pdf"
        target="_blank"
      >
        <i className="bx bxs-cloud-download bx-tada text-3xl sm:text-4xl"></i>
        <button className="text-lg sm:text-2xl">Download My Resume!</button>
      </a>

      {/* Skills Section */}
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        <h1 className="text-xl sm:text-2xl text-[#42A5F5] font-semibold">-My Skills-</h1>
        <div className="w-full max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
  {[
    { name: "HTML", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "TailwindCSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "NodeJS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Express", src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "NextJS", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "Vite", src: "https://vitejs.dev/logo.svg" },
    { name: "Vue", src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { name: "Angular", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "DaisyUI", src: "https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg" },
    { name: "PostgreSQL", src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "MongoDB", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "Git/GitHub", src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
    { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  ].map((skill) => (
    <div
      key={skill.name}
      className="flex flex-col items-center justify-center gap-2 w-full max-w-[100px]"
    >
      <p className="text-sm sm:text-base font-semibold">{skill.name}</p>
      <img
        className="w-[50px] sm:w-[80px] md:w-[100px] h-[50px] sm:h-[80px] md:h-[100px]"
        src={skill.src}
        alt={`${skill.name} Logo`}
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default AboutPage;
