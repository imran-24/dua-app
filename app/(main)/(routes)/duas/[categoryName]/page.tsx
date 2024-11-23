// import React, { Suspense } from "react";
// // import DuaList from "./_components/dua/dualist";
// // import { getCategoriesWithSubCategories, getDuasByCategoryId } from "@/actions/queries";
// import Settings from "@/components/settings/settings";

// const DuaPage = async ({
//   searchParams,
// }: {
//   searchParams: Promise<{ cat: string }>;
// }) => {
//   // const categories = getCategoriesWithSubCategories();
//   const categoryId = await searchParams; // Resolve the promise

//   console.log(searchParams, categoryId.cat);

//   // const duas = getDuasByCategoryId(categoryId);
//   return (
//     <div className='w-full grid grid-cols-8 gap-x-4'>
//       <Suspense>
//         {/* <DuaList duas={duas} categories={categories}  /> */}
//         Hi there
//         <Settings />
//       </Suspense>
//     </div>
//   );
// };

// export default DuaPage;


const DuaPage = () => {
  return (
    <div>DuaPage</div>
  )
}

export default DuaPage



