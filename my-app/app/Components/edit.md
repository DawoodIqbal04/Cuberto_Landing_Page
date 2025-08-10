<button ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center justify-center w-max px-4 lg:px-8 h-20 lg:h-28 relative group border border-white rounded-full overflow-hidden">
    <div className="relative h-20 text-xl md:text-3xl lg:text-xl z-10 overflow-hidden">
      <p ref={topTextRef} className="absolute lg:right- md:right- right- text-white">View all services</p>
      <p ref={bottomTextRef} className="absolute lg:right- md:right- right- ">View all services</p>
    </div>
    <div className="absolute left-0 bottom-[-100%] bg-white w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
</button>
