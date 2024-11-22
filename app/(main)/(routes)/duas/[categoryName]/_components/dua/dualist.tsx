"use client";

import React, { useEffect, useRef } from "react";
import DuaCard from "./dua-card";
import { CategoryWithSubCategory, Dua } from "@/type";
import Loading from "@/app/(main)/(routes)/loading";
import { usePathname, useSearchParams } from "next/navigation";
import { AlignJustify } from "lucide-react";
import { SheetSidebar } from "./sheet-sidebar";
import DualistSkeleton from "./dualist-skeleton";

interface DuaListProps {
  duas: Dua[];
  categories: CategoryWithSubCategory[];
}

const DuaList = ({ duas, categories }: DuaListProps) => {
  const subCatId = useSearchParams().get("sub");
  const pathname = usePathname();
  const category = pathname.replace("/duas/", "").replace(/-/g, " ");

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (subCatId) {

      // Scroll to the selected category
      if (scrollRef.current) {
        // Find the category index based on `categoryId`
        const categoryIndex = duas.findIndex(
          (dua) => dua.subcat_id.toString() === subCatId
        );

        if (categoryIndex !== -1) {
          const catElement = scrollRef.current.children[
            categoryIndex
          ] as HTMLDivElement;

          setTimeout(() => {
            catElement?.scrollIntoView({
              behavior: "smooth",
              block: "start", // Align the element at the start of the view
            });
          }, 300);
        }
      }
    }
  }, [subCatId]);


  if (duas.length === 0) {
    return (
     <DualistSkeleton />
    );
  }
  return (
    <div
      style={{ height: "calc(100vh - 4rem)" }}
      className='
    pb-12
    pt-2
    md:p-0
    col-span-8
    xl:col-span-6
    overflow-y-auto
    '
    >
      <div
        ref={scrollRef}
        className='scroll-smooth md:h-full flex flex-col gap-y-2 '
      >
        <div
          className='
          flex 
          lg:hidden
          border-[1px]
          shadow-sm
          bg-white
          font-semibold
          items-center
          rounded-lg p-4'
        >
          <SheetSidebar categories={categories}>
            <button>
              <AlignJustify className='h-5 w-5 mr-2' />
            </button>
          </SheetSidebar>
          <span className='text-black font-semibold capitalize'>
            {category}
          </span>
        </div>
        {duas.length == 0 ? (
          <Loading large />
        ) : (
          duas.map((dua, index) => (
            <DuaCard
              key={index}
              serial={dua.dua_id}
              referenceEn={dua.refference_en}
              duaName={dua.dua_name_en}
              topEn={dua.top_en}
              duaAradic={dua.dua_arabic}
              transliterationEn={dua.transliteration_en}
              translationEn={dua.translation_en}
              audio={dua.audio}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DuaList;
