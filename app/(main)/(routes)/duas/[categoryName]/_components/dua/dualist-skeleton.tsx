"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { AlignJustify } from "lucide-react";
import React from "react";
import { DuaCardSkeleton } from "./dua-card";

const DualistSkeleton = () => {
  return (
    <div
      style={{ height: "calc(100vh - 4rem)" }}
      className='
          p-3 
          pb-12
          pt-2
          md:p-0
          col-span-8
          xl:col-span-6
          overflow-y-auto
          '
    >
      <div className='scroll-smooth md:h-full flex flex-col space-y-2 '>
        <div
          className='
          flex 
          lg:hidden
          border-[1px]
          shadow-sm
          bg-white
          font-semibold
          items-center
          rounded-lg p-4 space-x-2'
        >
          <button>
            <AlignJustify className='h-5 w-5 mr-2' />
          </button>
          <Skeleton className='h-4 w-40' />
        </div>
        <div className="space-y-2">
            <DuaCardSkeleton />
            <DuaCardSkeleton />
            <DuaCardSkeleton />

        </div>
      </div>
    </div>
  );
};

export default DualistSkeleton;
