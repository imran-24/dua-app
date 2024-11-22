import React from "react";
import DuaList from "./_components/dua/dualist";
import { getCategoriesWithSubCategories, getDuasByCategoryId } from "@/actions/queries";
import Settings from "@/components/settings/settings";


const DuaPage = async ({ searchParams }: { searchParams: Promise<{ cat: string }> }) => {
  const categories = getCategoriesWithSubCategories();
  const categoryId = await searchParams; // Resolve the promise

  console.log(searchParams);

  const duas = getDuasByCategoryId(categoryId.cat);
  return (
    <div className='w-full grid grid-cols-8 gap-x-4'>
      <DuaList duas={duas} categories={categories}  />
      <Settings />
    </div>
  );
};

export default DuaPage;
