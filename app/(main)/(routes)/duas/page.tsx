'use client';

// import { useSearchParams } from "next/navigation";
import DualistSkeleton from "./[categoryName]/_components/dua/dualist-skeleton";

const DuasPage = () => {
    // const fullUrl = typeof window !== "undefined" ? window.location.href : "";

    // console.log(fullUrl)
//   const categoryId = useSearchParams().get('cat');
//   console.log(categoryId);
    return (
        <DualistSkeleton />
    )
//   }
//   return;
}

export default DuasPage