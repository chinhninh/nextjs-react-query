import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephone, BsSearch, BsCartPlus } from "react-icons/bs";

const menus = [
  { id: 1, name: "GIỚI THIỆU", link: "/" },
  { id: 2, name: "CHƯƠNG TRÌNH", link: "/campaign" },
  { id: 3, name: "CỬA HÀNG", link: "/cua-hang" },
  { id: 4, name: "TIN TỨC", link: "/tin-tuc" },
  { id: 5, name: "LIÊN HỆ", link: "/contact" },
];

const Header = () => {
  const renderMenus = (name: string, link: string) => {
    return (
      <Link className="text-base font-bold text-white px-2 py-1" href={link}>
        {name}
      </Link>
    );
  };

  return (
    <div className="h-16 bg-[url('/images/background-header-footer.png')] bg-repeat bg-cover sticky top-0 z-50">
      <div className="container md:mx-auto h-16 items-center flex justify-between">
        <Image
          src="/images/logo-header.png"
          alt="logo-header"
          width={40}
          height={50}
        />
        <div>
          {menus.map(({ name, link, id }) => (
            <React.Fragment key={id}>{renderMenus(name, link)}</React.Fragment>
          ))}
        </div>
        <div className="flex items-center">
          <a href="tel:: +848.2796.3388" className="flex items-center py-2">
            <BsTelephone className="text-white text-lg" />
            <span className="text-white ml-1">: +848.2796.3388</span>
          </a>
          <div className="cursor-pointer px-2 py-2 ml-3 mr-1">
            <BsSearch className="text-white text-lg" />
          </div>
          <div className="relative cursor-pointer px-2 py-2">
            <div className="inline-flex items-center justify-center px-1 py-[2px] text-[10px] text-white leading-none text-red-100 bg-green-light rounded-full absolute top-0 left-0 z-50">
              9
            </div>
            <BsCartPlus className="text-white text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
