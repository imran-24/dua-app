"use client";

import React, { useRef } from "react";
import DuaCard from "./dua-card";
import { CategoryWithSubCategory, Dua } from "@/type";
import Loading from "@/app/(main)/(routes)/loading";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import { SheetSidebar } from "./sheet-sidebar";
import DualistSkeleton from "./dualist-skeleton";

interface DuaListProps {
  duas: Dua[];
  categories: CategoryWithSubCategory[];
}

const DuaList = ({ duas, categories }: DuaListProps) => {
  const pathname = usePathname();
  const category = pathname.replace("/duas/", "").replace(/-/g, " ");

  const scrollRef = useRef<HTMLDivElement>(null);
  // const [duas, setDuas] = useState<Dua[]>([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setDuas([])
  //       const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/duas/${categoryId}`);
  //       setDuas(response.data);
  //       scrollRef.current?.scrollTop

  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle error state or log the error as needed
  //     }
  //   };

  //   fetchData();
  // }, [categoryId]);

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
