import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="min-h-[800px] flex flex-col items-center justify-center bg-[#43275b] px-6 py-10">
      <div className="flex flex-col items-center gap-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-white">
          Contact
          <span className="text-[#fcda68]">
            Me <i className="bx bxs-hand-left bx-fade-right text-[#fcda68]"></i>
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-center gap-4 p-4 bg-[#5c3d73] rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-110">
            <i className="bx bxl-gmail text-5xl sm:text-6xl text-[#fcda68]"></i>
            <h1 className="text-lg sm:text-xl text-center text-white">pondwachi.th@gmail.com</h1>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 bg-[#5c3d73] rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-110">
            <i className="bx bxs-phone text-5xl sm:text-6xl text-[#fcda68]"></i>
            <h1 className="text-lg sm:text-xl text-center text-white flex flex-row items-center gap-3">
              <Image
                src="/Thai.png"
                width={20}
                height={20}
                alt="Thai flag"
              />
              061-2674-523
            </h1>
          </div>

          <a
            href="https://www.facebook.com/pond.wachirodol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-4 bg-[#5c3d73] rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
          >
            <i className="bx bxl-facebook text-5xl sm:text-6xl text-[#fcda68]"></i>
            <h1 className="text-lg sm:text-xl text-center text-white">Facebook</h1>
          </a>

          <div className="flex flex-col items-center gap-4 p-4 bg-[#5c3d73] rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-110">
            <FontAwesomeIcon
              icon={faLine}
              className="text-5xl sm:text-6xl text-[#fcda68]"
            />
            <h1 className="text-lg sm:text-xl text-center text-white">pondwachirodol</h1>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 bg-[#5c3d73] rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-110">
            <i className="bx bxs-map text-5xl sm:text-6xl text-[#fcda68]"></i>
            <h1 className="text-lg sm:text-xl text-center text-white">Lamphun-Thailand</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;