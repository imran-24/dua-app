"use client";

import useRoutes from "@/hooks/useRoute";
import DesktopItem from "./desktop-item";
import Image from "next/image";

const DesktopSidebar = () => {
  const routes = useRoutes();

  return (
    <>
      <div
        className='
      hidden
      lg:fixed
      lg:top-4
      lg:left-4
      lg:z-40
      lg:w-20
      lg:h-[608px]
      lg:bg-white
      lg:border-[1px]
      shadow-sm
      rounded-lg
      lg:flex
      lg:flex-col
      lg:justify-evenly
      
      '
      >
        <nav
          className='
        flex
        items-center 
        justify-center
        '
        >
          <div
            className='
          relative
          overflow-hidden
          h-8
          w-8
          md:h-10
          md:w-10
          rounded-md
          cursor-pointer
          '
          >
            <Image
              fill
              className='shrink-0'
              src={"/dua-logo.svg"}
              alt='user'
            />
          </div>
        </nav>

        <nav
          className='
          flex
          flex-col 
          justify-between
          '
        >
          <ul role='list' className='flex flex-col items-center space-y-4'>
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </ul>
        </nav>

        <nav
          className='
        flex
        items-center 
        justify-center
        '
        >
          <div
            className='
          relative
          overflow-hidden
          h-8
          w-8
          md:h-10
          md:w-10
          cursor-pointer
          rounded-md
          bg-[#1fa45b]
          
          '
          >
            <Image fill src={"/hand-logo.svg"} alt='user' className="p-1.5" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
