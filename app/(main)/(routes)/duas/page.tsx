'use client';

import { useSearchParams } from "next/navigation";
import DualistSkeleton from "./[categoryName]/_components/dua/dualist-skeleton";

const DuasPage = () => {
  const categoryId = useSearchParams().get('cat');
//   console.log(categoryId);
  if(categoryId == null){
    return (
        <DualistSkeleton />
    )
  }
//   return;
}

export default DuasPage