import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#2a0945] to-[#3a0386] p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <h1 className="text-5xl text-white text-center">
          About <span className="text-[#fcda68]">Me</span>
        </h1>
        <p className="text-white text-lg md:text-2xl text-center max-w-4xl leading-relaxed">
          I am a passionate web developer seeking a junior role in a software
          development agency where I can grow my skills and contribute to
          impactful projects. I have experience working with
          <span className="text-[#fcda68]"> React, JavaScript,</span> and modern
          <span className="text-[#fcda68]"> front-end development tools.</span> I am eager to collaborate with a talented team,
          continually learn, and deliver high-quality software solutions that meet
          user needs and business goals.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          {/* My Interests */}
          <div>
            <h2 className="text-4xl text-white mb-6">
              My <span className="text-[#fcda68]">Interests</span>
            </h2>
            <div className="grid grid-cols-4 gap-6">
              {[
                { icon: "bxs-joystick", label: "Game" },
                { icon: "bx-headphone", label: "Music" },
                { icon: "bxs-plane-alt", label: "Travel" },
                { icon: "bx-code-alt", label: "Coding" },
                { icon: "bx-laptop", label: "Computer" },
                { icon: "bxs-video", label: "Movie" },
                { icon: "bxs-leaf", label: "Plant" },
                { icon: "bxs-cat", label: "Pet" },
              ].map((interest, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-lg border-2 border-[#fcda68] p-4"
                >
                  <i className={`bx ${interest.icon} text-3xl text-[#fcda68] mb-2`}></i>
                  <span className="text-black text-sm font-semibold">
                    {interest.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div>
            <h2 className="text-4xl text-white mb-6">
              <span className="text-[#fcda68]">Personal</span> Details
            </h2>
            <div className="flex flex-col gap-4 text-white">
              {[
                { label: "Birthdate", value: "20-02-2000" },
                { label: "Phone", value: "061-2674-523" },
                { label: "Email", value: "pondwachi.th@gmail.com" },
                { label: "Address", value: "Lamphun | Thailand" },
                { label: "Job Status", value: "FINDING A JOB", highlight: true },
              ].map((detail, index) => (
                <div key={index} className="flex justify-between">
                  <span>{detail.label}</span>
                  <span
                    className={
                      detail.highlight
                        ? "text-[#fcda68] bg-green-500 px-2 py-1 rounded"
                        : "text-[#fcda68]"
                    }
                  >
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center gap-12">
          {/* My Specialities */}
          <div>
            <h2 className="text-4xl text-white mb-6">
              My <span className="text-[#fcda68]">Specialities</span>
            </h2>
            <div className="grid grid-cols-4 gap-10">
              {[
                { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", alt: "HTML" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", alt: "CSS" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "TailwindCSS" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "NodeJS" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", alt: "Express" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", alt: "NextJS" },
                { src: "https://vitejs.dev/logo.svg", alt: "ViteJS" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", alt: "VueJS" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg", alt: "Angular" },
                { src: "https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg", alt: "DaisyUI" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", alt: "PostgreSQL" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", alt: "GitHub" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma" },
              ].map((speciality, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-white border-2 border-[#fcda68]"
                >
                  <Image
                    className="w-[50px] h-[50px]"
                    src={speciality.src}
                    width={500}
                    height={500}
                    alt={speciality.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;