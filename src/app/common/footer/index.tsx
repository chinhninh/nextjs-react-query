import Image from "next/image";
import React, { ReactNode } from "react";
import LogoBct from "public/images/logo-bct.svg";
import {
  BsTelephone,
  BsFillGeoAltFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

interface Item {
  id: number;
  name: string;
  link: string;
  icon: ReactNode;
}

const contacts = [
  { id: 1, name: "CÔNG TY TNHH TERRALIFE", link: "", icon: "" },
  {
    id: 2,
    name: "Giấy chứng nhận kinh doanh số 0316771376",
    link: "",
    icon: "",
  },
  { id: 3, name: "Do sở KH&ĐT TP.HCM cấp ngày 18/11/2021", link: "", icon: "" },
  {
    id: 4,
    name: "41 đường số 19, P. An Phú, Q.2, TPHCM",
    link: "",
    icon: <BsFillGeoAltFill className="text-white text-lg" />,
  },
  {
    id: 5,
    name: "(+84) 8.2796.3388",
    link: "tel:(+84) 8.2796.3388",
    icon: <BsTelephone className="text-white text-lg" />,
  },
  {
    id: 6,
    name: "info@terralife.vn",
    link: "mailto:info@terralife.vn",
    icon: <BsFillEnvelopeFill className="text-white text-lg" />,
  },
];

const Footer = () => {
  const renderTitle = (name: string) => {
    return <h4 className="text-white my-7">{name}</h4>;
  };

  const renderItem = (item: Item) => {
    const { name, link, icon } = item;
    return (
      <a href={link ? link : undefined} className="mb-2 flex items-center">
        {icon && icon}
        <div className={`text-white ${icon && "ml-2"}`}>{name}</div>
      </a>
    );
  };

  return (
    <div className="bg-[url('/images/background-header-footer.png')] bg-repeat bg-cover py-10">
      <div className="container md:mx-auto">
        <Image src={LogoBct} width={150} height={57} alt="logo-bct" />
        <div className="grid grid-cols-4 gap-4">
          <div>
            {renderTitle("LIÊN HỆ")}
            {contacts.map((item) => (
              <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
            ))}
          </div>
          <div>
            {renderTitle("HỖ TRỢ KHÁCH HÀNG")}
            {contacts.map((item) => (
              <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
            ))}
          </div>
          <div>{renderTitle("VỀ TERRALIFE")}</div>
          <div>{renderTitle("KÊNH")}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
