const Contact = () => {
  return (
    <div className="h-[800px] flex flex-col items-center justify-center bg-[#43275b] ">
      <div className="flex flex-col items-center gap-40 ">
        <h1 className="text-7xl">
          Contact <span className="text-[#fcda68] ">Me<i className='bx bxs-hand-left bx-fade-right text-[#fcda68]' ></i></span>
          
        </h1>
        <div className="flex flex-row justify-around gap-64">
          <div className="flex flex-col items-center gap-4">
            <i className="bx bxl-gmail text-7xl text-[#fcda68] transition-transform duration-300  hover:animate-shake"></i>
            <h1 className="text-xl text-white">pondwachi.th@gmail.com</h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <i className="bx bxs-phone text-7xl text-[#fcda68] transition-transform duration-300  hover:animate-shake"></i>
            <h1 className="text-xl text-white">+66 061-2674-523</h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <i className="bx bxs-map text-7xl text-[#fcda68] transition-transform duration-300  hover:animate-shake"></i>
            <h1 className="text-xl text-white">Lamphun-Thailand</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
