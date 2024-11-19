import React, { useCallback, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Our Approach" },
  { path: "/products/", label: "Products" },
  { path: "/projects/", label: "Projects" },
  { path: "/corporate/", label: "Corporate" },
  { path: "/blog/", label: "Blog" },
  { path: "/news/", label: "News" },
];

const Header: React.FC = () => {
  const location = useLocation();

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");
        if (!sidebar?.classList.contains("translate-x-full")) {
          sidebar?.classList.add("translate-x-full");
          overlay?.classList.add("hidden");
        }
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  // Handle body scroll lock when sidebar is open
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          document.body.style.overflow = sidebar?.classList.contains(
            "translate-x-full"
          )
            ? "auto"
            : "hidden";
        }
      });
    });

    if (sidebar) {
      observer.observe(sidebar, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);

  const toggleSidebar = useCallback(() => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar?.classList.toggle("translate-x-full");
    overlay?.classList.toggle("hidden");
  }, []);

  const NavLink: React.FC<NavItem> = ({ path, label }) => {
    const isActive = location.pathname === path;
    return (
      <Link
        to={path}
        className={`font-semibold 2xl:text-2xl xl:text-xl text-lg transition-colors duration-200 ${
          isActive ? "text-[#05B6C7]" : "text-[#53575A] hover:text-[#05B6C7]"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="w-full bg-white shadow-md" role="banner">
      <header className="max-w-[1920px] mx-auto flex items-center justify-between xl:py-7 py-5 md:px-10 px-6 xl:px-20 text-[#53575A]">
        <div className="flex items-center space-x-2">
          <Link to="/" aria-label="Go to homepage" className="">
            <StaticImage
              src="../../assets/images/parkolay_slogan.svg"
              alt=""
              className=""
              placeholder="blurred"
              loading="eager"
              width={126}
              height={46}
              aria-hidden="true"
            />
          </Link>
        </div>

        <nav
          className="hidden xl:space-x-8 space-x-4 lg:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden px-5 2xl:py-4 md:py-3 py-2 text-white bg-[#05B6C7] rounded-full xl:text-xl text-lg font-semibold lg:flex justify-center items-center gap-2 group hover:bg-[#049DAC] transition-colors duration-200"
          aria-label="Contact us"
        >
          <span>Direct Contact</span>
          <StaticImage
            src="../../assets/images/right_arrow.svg"
            alt=""
            className="h-3 group-hover:brightness-0 group-hover:invert-[1] transition-all duration-200"
            width={8}
            height={12}
            aria-hidden="true"
          />
        </Link>

        <button
          className="lg:hidden focus:outline-none p-2"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          aria-expanded="false"
          aria-controls="sidebar"
        >
          <StaticImage
            src="../../assets/images/burger_menu.svg"
            alt=""
            className="h-6 w-6"
            width={24}
            height={24}
            aria-hidden="true"
          />
        </button>
      </header>

      <div
        id="overlay"
        className="fixed inset-0 bg-black bg-opacity-50 hidden lg:hidden"
        onClick={toggleSidebar}
        role="presentation"
      />

      <aside
        id="sidebar"
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-md transform translate-x-full transition-transform duration-300 xl:hidden z-50"
        role="dialog"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
          <div className="flex items-center space-x-2">
            <Link to="/" aria-label="Go to homepage">
              <StaticImage
                src="../../assets/images/logo/parkolay.svg"
                alt=""
                className="h-8"
                placeholder="blurred"
                width={120}
                height={32}
                aria-hidden="true"
              />
            </Link>
          </div>
          <button
            className="focus:outline-none p-2"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <StaticImage
              src="../../assets/images/cross.svg"
              alt=""
              className="h-6 w-6"
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="px-6">
          <nav
            className="flex flex-col mt-4 gap-2"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold text-lg transition-colors duration-200 py-2 ${
                    isActive
                      ? "text-black"
                      : "text-[#53575A] hover:text-gray-900"
                  }`}
                  onClick={toggleSidebar}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            to="/contact"
            className="mt-6 py-2 text-white bg-[#05B6C7] rounded-full text-xl font-semibold flex justify-center items-center gap-2 group hover:bg-[#049DAC] transition-colors duration-200"
            onClick={toggleSidebar}
          >
            <span>Direct Contact</span>
            <StaticImage
              src="../../assets/images/right_arrow.svg"
              alt=""
              className="h-3 group-hover:brightness-0 group-hover:invert-[1] transition-all duration-200"
              width={8}
              height={12}
              aria-hidden="true"
            />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Header;
