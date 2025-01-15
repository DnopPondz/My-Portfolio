export default function Home() {
  return (
    <div className="h-[800px]  flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-gradient-to-r from-[#2a0945] to-[#3a0386]  lg:px-20 ">
      <div className="flex flex-col lg:flex-row items-center lg:gap-56">
        <div className="text-white flex flex-col items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl">Hello, My name is</h1>
          <p className="text-2xl lg:text-6xl">
            Pond <span className="text-[#fcda68]">Wachirodol Thongnate</span>,
          </p>
          <p className="text-xl lg:text-6xl">I'm a FrontEnd Developer.</p>
          <a
            className="w-[180px] sm:w-[210px] lg:w-[230px] h-[50px] sm:h-[60px] lg:h-[70px] rounded-full mt-4 flex justify-center items-center gap-2 bg-[#fcda68] text-white text-center transition-transform duration-300 hover:scale-105"
            href="/resume/Wachirodol%20Resume.pdf"
            download="Wachirodol_Thongnate_Resume.pdf"
            target="_blank"
          >
            <i className="bx bxs-cloud-download bx-tada text-2xl sm:text-3xl lg:text-4xl"></i>
            <button className="text-base sm:text-lg lg:text-2xl">Download CV</button>
          </a>
        </div>
        <div className="group relative mt-6 lg:mt-0">
          <i className="bx bx-code-alt text-[#fcda68] text-[200px] sm:text-[300px] lg:text-[500px]"></i>
        </div>
      </div>
    </div>
  );
}
