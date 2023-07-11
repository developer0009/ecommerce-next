import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { useEffect } from "react";
import Image from "next/image";
import { logo } from "@/public";
import Link from "next/link";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white z-20 sticky top-0 transition-transform duration-300 flex justify-center items-center ${show} `}
      // style={{ border: "2px solid black" }}
    >
      <Wrapper className={"flex items-center justify-between "}>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="ecommerce shoes store"
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MobileMenu
            mobileMenu={mobileMenu}
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <div className="flex items-center gap-2 text-black ">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              50
            </div>
          </div>
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
            // style={{ border: "2px solid black" }}
          >
            <BsCart className="text-[15px] md:text-[20px] cursor-pointer" />

            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              5
            </div>
          </div>

          {/* Mobile Icon */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                onClick={() => setMobileMenu(false)}
                className="text-[16px]"
              />
            ) : (
              <BiMenuAltRight
                onClick={() => setMobileMenu(true)}
                className="text-[20px]"
              />
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
