"use client";

import { useOrigin } from "@/hooks/use-origin";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CategoryCardProps {
  id: number;
  icon: string;
  category: string;
  subcategory: number;
  duas: number;
  // onExpand: () => void;
}

const CategoryCard = ({
  // onExpand,
  duas,
  icon,
  id,
  category,
  subcategory,
}: CategoryCardProps) => {
  
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("cat")
  const isActive = id.toString() === categoryId;
  const origin = useOrigin();
  const url = `${origin}duas/${category}?cat=${id}`;
  const decodedUrl = decodeURIComponent(url);
  const updatedUrl = decodedUrl.replace(/\s/g, "-").toLowerCase();

  return (
    <>
      <Link
        href={updatedUrl}
        role='button'
        // onClick={onExpand}
        className='w-full'
      >
        <div
          className={clsx(
            `flex items-center justify-between  p-2 space-x-2  rounded-lg hover:bg-neutral-200 transition duration-100 ease-out`,
            isActive && "bg-neutral-200"
          )}
        >
          <div className='flex items-center space-x-2 flex-1 '>
            <div className='h-14 w-14 bg-white flex items-center justify-center rounded-lg'>
              <Image
                src={`/category/${icon}.svg`}
                width={30}
                height={30}
                className='shrink-0'
                alt='icon'
              />
            </div>
            <div>
              <p className='text-black text-base font-semibold'>{category}</p>
              <span className='text-xs text-neutral-400'>
                Subcategory: {subcategory}
              </span>
            </div>
          </div>
          <div className='flex lg:hidden border-l p-2 text-sm text-center'>
            <p>{duas}</p>
            <p className='text-xs text-neutral-500'>Duas</p>
          </div>
          <div></div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
