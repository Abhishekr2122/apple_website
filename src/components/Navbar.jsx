import { appleImg, bagImg, searchImg } from "../utils";

export default function Navbar() {
  const navItems = ["Store", "Mac", "iPhone", "Support"];
  return (
    <header className="w-full     items-center    py-5 sm:px-10 px-5 flex   ">
      <nav className="flex w-full  screen-max-width  justify-between ">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex  flex-1 justify-center max-sm:hidden ">
          {navItems.map(function (citem) {
            return (
              <div
                key={citem}
                className="px-5 text-sm text-gray cursor-pointer hover:text-white transition-all"
              >
                {citem}
              </div>
            );
          })}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end  max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}
