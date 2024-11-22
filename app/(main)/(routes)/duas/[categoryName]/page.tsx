import React from "react";
// import DuaList from "./_components/dua/dualist";
// import { getDuasByCategoryId } from "@/actions/queries";
import Settings from "@/components/settings/settings";


const DuaPage = async ({ searchParams }: { searchParams: Promise<{ cat: string }> }) => {
  // const categories = getCategoriesWithSubCategories();
  const categoryId = ((await searchParams).cat); // Resolve the promise

  console.log(searchParams, categoryId);

  // const duas = getDuasByCategoryId(categoryId);
  return (
    <div className='w-full grid grid-cols-8 gap-x-4'>
      {/* <DuaList duas={duas} categories={categories}  /> */}
      Hi there
      <Settings />
    </div>
  );
};

export default DuaPage;
