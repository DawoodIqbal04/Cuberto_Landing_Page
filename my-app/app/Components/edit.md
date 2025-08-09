<button ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center justify-center w-max px-4 lg:h-10 md:h-14 h-10 relative group border border-white rounded-full overflow-hidden">
    <div className="relative h-8 text-center text-base md:text-2xl lg:text-base font-medium  z-10 overflow-hidden">
      <p ref={topTextRef} className="absolute lg:right-[32%] md:right-40 right-25 text-white">What we do</p>
      <p ref={bottomTextRef} className="absolute lg:right-[32%] md:right-40 right-25 ">What we do</p>
    </div>
    <div className="absolute left-0 bottom-[-100%] bg-white w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
</button>
