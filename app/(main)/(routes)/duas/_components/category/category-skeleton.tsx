"use client";

import React from "react";
import { CategoryCardSkeleton } from "./category-card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const CategorySkeleton = () => {
  return (
    <div
      className='
      h-full
      xl:h-auto
      lg:bg-white
      lg:border-[1px]
      shadow-sm
      rounded-lg
      overflow-y-auto
      relative
    '
    >
      <div className='sticky top-0 inset-x-0  py-4 mb-3  bg-[#1fa45b]'>
        <h2 className='text-xl text-center text-white font-semibold'>
          Category
        </h2>
      </div>
      <div className='flex flex-col pb-4 space-y-3 '>
        <div className='lg:flex items-center relative px-3 hidden'>
          <Input
            type='text'
            className='pl-10 h-10 focus-visible:ring-[#1fa45b] placeholder:text-sm placeholder:font-light'
            placeholder='Search by dua name'
          />
          <div
            role='button'
            className='z-20 h-9 w-9 absolute left-4 flex items-center justify-center transition rounded-lg '
          >
            <Search className='h-4 w-4 text-neutral-500 ' />
          </div>
        </div>
        <div className='min-h-[420px] lg:h-[420px] space-y-2 overflow-y-auto px-2 pl-3'>
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
