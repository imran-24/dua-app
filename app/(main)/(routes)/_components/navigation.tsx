"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, SettingsIcon } from "lucide-react";

const Navigation = () => {
  return (
    <div
      className='
    flex 
    items-center 
    text-black 
    justify-between 
    h-16
    px-4
    lg:px-0
    md:bg-transparent
    md:shadow-none
    md:border-none
    sticky top-0
    border-b
    shadow-sm
    '
    >
      <div className='flex-1'>
        <h2 className='text-lg lg:text-2xl  text-neutral-900 font-sans  '>
          Duas Page
        </h2>
      </div>
      <div
        className='
          lg:mr-52
          mr-3
          hidden
          lg:flex 
          items-center 
          relative
          h-10
          '
      >
        <Input
          type='text'
          className='pr-10 w-[300px]  focus-visible:ring-[#1fa45b] h-full bg-white border-none ring-0 shadow-sm outline-none  placeholder:text-sm placeholder:font-light'
          placeholder='Search by dua name'
        />
        <div
          role='button'
          className='Z-20 bg-gray-200 h-9 w-12 absolute right-[2.5px] flex items-center justify-center transition rounded-lg hover:bg-gray-200'
        >
          <Search className='h-4 w-4 text-neutral-500 ' />
        </div>
      </div>
      <div className="space-x-4 flex items-center">
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div
          role='button'
        >
          <SettingsIcon className='h-6 w-6 fill-[#1fa45b]  text-green-500 ' />
      </div>
      </div>
    </div>
  );
};

export default Navigation;
