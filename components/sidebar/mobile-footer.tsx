"use client";

import useRoutes from "@/hooks/useRoute";
import MobileItem from "./mobile-item";
import { User } from "lucide-react";

const MobileFooter = () => {
  const routes = useRoutes();

  return (
    <div
      className='
    fixed
    h-20
    bottom-0
    z-40
    w-full
    bg-white
    flex
    items-center 
    justify-around
    px-4
    md:hidden
    border-t
    rounded-t-[3rem]
    drop-shadow-xl
    '
    >
      {routes.map((item, index) => (
        index % 2 == 0 && <MobileItem key={item.label} label={item.label} icon={item.icon} />
      ))}
      <MobileItem label={"Profile"} icon={User} />
    </div>
  );
};

export default MobileFooter;
