'use client'

import { SubCategory } from "@/type"
import Link from "next/link"
import { usePathname } from "next/navigation";

interface SubCategoryListProps{
  id: number;
  subcategories: SubCategory[];
}
                 
const SubCategoryList = ({id, subcategories}: SubCategoryListProps) => {
  const pathname = usePathname()
  return (
    <div className="pl-8 py-3 transition-all ease-in-out duration-300">
      <ul className="pl-[.8rem] border-l border-[#1fa45b] border-dotted space-y-4 ">
        {
          subcategories.map((sub: SubCategory) => (
            <li key={`${sub.cat_id}-${sub.subcat_id}`} className="list-disc text-[#1fa45b]">
                <Link href={`${pathname}?cat=${id}&sub=${sub?.subcat_id}`}>
                  <span className="text-[13px] text-neutral-800 font-semibold">{sub.subcat_name_en}</span>
                </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SubCategoryList