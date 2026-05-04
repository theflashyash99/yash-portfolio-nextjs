import Link from "next/link";
//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="p-8 xl:py-12 text-white  ">
      <div className="container mx-auto flex justify-between items-center ">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold ">
            Yash<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*desktop-nav*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <button className="bg-accent text-black px-4 py-2 rounded-4xl font-medium cursor-pointer">Hire me</button>
          </Link>
        </div>

        {/* mobile nav*/}

        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
