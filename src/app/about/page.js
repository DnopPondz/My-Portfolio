import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full h-[800px] flex flex-row bg-[#43275b] gap-4 pt-10">
      <div className="w-full  flex flex-col gap-12 ml-20 ">
        <h1 className="text-5xl text-white ">
          About <span className="text-[#fcda68]">Me</span>
        </h1>
        <p className="text-white text-3xl leading-normal max-w-full ">
          I am a passionate web developer seeking a junior role in a software
          development agency where
          <span className="text-[#fcda68]">
            {" "}
            I can grow my skills and contribute to impactful projects.
          </span>
          I have experience working with{" "}
          <span className="text-[#fcda68]">React, JavaScript,</span> and modern
          front-end development tools. While my primary expertise lies in web
          development, I am open to exploring and adapting to any tech stack as
          required. I am eager to collaborate with a talented team, continually
          learn, and contribute to delivering high-quality software solutions
          that meet user needs and business goals.
        </p>
      </div>

      <div className="w-full  flex flex-col items-center gap-16 mt-4">
        <h1 className="text-5xl text-white">
          My <span className="text-[#fcda68]">Specialities</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-10">
          {/* row 1 */}
          <div className="flex flex-wrap gap-12">
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px] "
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                width={500}
                height={500}
                alt="HTML"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
               src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                width={500}
                height={500}
                alt="CSS"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                width={500}
                height={500}
                alt="TailwindCSS"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                width={500}
                height={500}
                alt="JaVAScript"
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="flex gap-12">
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                width={500}
                height={500}
                alt="NodeJS"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                width={500}
                height={500}
                alt="Express"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                width={500}
                height={500}
                alt="React"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                width={500}
                height={500}
                alt="NextJS"
              />
            </div>
          </div>
          {/* row 3 */}
          <div className="flex gap-12">
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://vitejs.dev/logo.svg"
                width={500}
                height={500}
                alt="ViteJS"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                width={500}
                height={500}
                alt="VueJS"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                width={500}
                height={500}
                alt="Angular"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg" 
                width={500}
                height={500}
                alt="DaisyUI"
              />
            </div>
          </div>
          {/* row 4 */}
          <div className="flex gap-12">
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                width={500}
                height={500}
                alt="PostgreSQL"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                width={500}
                height={500}
                alt="MongoDB"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                width={500}
                height={500}
                alt="GitHub"
              />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-white border-2 border-[#fcda68] ">
              <Image
                className="w-[50px] h-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
                width={500}
                height={500}
                alt="Figma"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
