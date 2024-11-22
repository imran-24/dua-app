"use client";

import { CategoryList } from "@/app/(main)/(routes)/_components/category/category-list";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CategoryWithSubCategory } from "@/type";

interface SheetSidebarProps{
    children: React.ReactNode;
    categories: CategoryWithSubCategory[]
}

export function SheetSidebar({children, categories}: SheetSidebarProps) {
    
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side={"left"}  className="w-full p-0">
        <CategoryList categories={categories} />
      </SheetContent>
    </Sheet>
  )
}
