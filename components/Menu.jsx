import Link from "next/link";
import React from "react";
import { BsChevronDown, BsCart } from "react-icons/bs";

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  console.log(showCatMenu);
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
    <ul className="hidden md:flex  items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return item.url && !item.showSubMenu ? (
          <Link href={item.url} key={item.id}>
            <li>{item.name}</li>
          </Link>
        ) : (
          <>
            <li
              className="flex cursor-pointer gap-2 items-center relative"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item.name} <BsChevronDown size={14} className="mt-[2px]" />
              {showCatMenu && (
                <ul
                  className="absolute   top-6 min-w-[250px] left-0 shadow-lg p-1"
                  // style={{ border: "2px solid black" }}
                >
                  {subMenuData.map((data, index) => (
                    <Link key={index} href={"/"}>
                      <li className=" flex justify-between h-12 hover:bg-black/[0.03] rounded-md px-3 items-center">
                        <span>{data.name}</span>
                        <span className="text-sm opacity-50">
                          {data.doc_count}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Menu;
