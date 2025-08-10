<button ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center justify-center lg:w-60 lg:h-18 h-20 w-86 relative group border border-white rounded-full overflow-hidden">
    <div className="relative h-8 text-center text-xl md:text-3xl lg:text-xl z-10 overflow-hidden">
      <p ref={topTextRef} className="absolute lg:right-[32%] md:right-40 right-25 text-white">View all services</p>
      <p ref={bottomTextRef} className="absolute lg:right-[32%] md:right-40 right-25 ">View all services</p>
    </div>
    <div className="absolute left-0 bottom-[-100%] bg-white w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
</button>
