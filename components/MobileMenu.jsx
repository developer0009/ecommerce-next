import Link from "next/link";
import React from "react";
import { BsChevronDown, BsCart } from "react-icons/bs";

const MobileMenu = ({
  showCatMenu,
  setShowCatMenu,
  MobileMenu,
  setMobileMenu,
}) => {
  // console.log(showCatMenu);
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
  ];
  return (
    <ul
      //   className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white  text-black"
      className="md:hidden font-bold flex flex-col items-center w-full text-black absolute top-[50px] left-0 "
      //   style={{ border: "2px solid black" }}
    >
      {data.map((item) => {
        return item.url && !item.showSubMenu ? (
          <Link
            href={item.url}
            key={item.id}
            className="flex cursor-pointer gap-2 items-center relative h-12 py-4 px-5 border-b w-full"
            onClick={() => setMobileMenu(false)}
          >
            <li>{item.name}</li>
          </Link>
        ) : (
          <>
            <div
              className=" cursor-pointer   relative   border-b flex flex-col   w-full"
              //   onMouseEnter={() => setShowCatMenu(true)}
              //   style={{ border: "2px solid black" }}
              //   onMouseLeave={() => setShowCatMenu(false)}
              onClick={() => setShowCatMenu(!showCatMenu)}
            >
              <div className="flex items-center justify-between py-4 px-5">
                <span> {item.name}</span>{" "}
                <span className="text-black">
                  {" "}
                  <BsChevronDown size={14} className="mt-[2px]" />
                </span>
              </div>
              {showCatMenu && (
                <ul
                  className="bg-black/[0.05] w-full  "
                  //   style={{ border: "2px solid black" }}
                >
                  {subMenuData.map((data, index) => (
                    <Link
                      key={index}
                      href={"/about"}
                      className="w-full border-b  relative"
                      onClick={() => {
                        setMobileMenu(false);
                        setShowCatMenu(false);
                      }}
                      //   style={{ border: "2px solid black" }}
                    >
                      <li
                        className=" flex justify-between h-12   hover:bg-black/[0.03] rounded-md px-8 items-center border-b"
                        // style={{ border: "2px solid black" }}
                      >
                        <span>{data.name}</span>
                        <span className="text-sm opacity-50">
                          {data.doc_count}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
