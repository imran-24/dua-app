"use client";

import { useRef } from "react";
// import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Loading from "../../loading";
import CategoryCard from "./category-card";
import SubCategoryList from "./sub-category-list";
import { CategoryWithSubCategory } from "@/type";
import { cn } from "@/lib/utils";

interface CategoryListProps {
  categories: CategoryWithSubCategory[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  // const params = useSearchParams();
  // const categoryId = params.get("cat");
  const scrollRef = useRef<HTMLDivElement>(null);

  // const [selected, setSelected] = useState<string | null>("1");
  // const router = useRouter();

  // useEffect(() => {
  //   if (!categoryId) return; // Only run if there is a `cat` parameter
  //   if (categoryId !== selected) {
  //     setSelected(categoryId); // Update selected if it differs
  //     // Scroll to the selected category
  //     // if (scrollRef.current) {
  //     //   // const categoryIndex = categories.findIndex(
  //     //   //   (category) => category.cat_id.toString() === categoryId
  //     //   // );
  //     //   if (Number(categoryId) >= 0) {
  //     //     const catElement = scrollRef.current.children[
  //     //       Number(categoryId)
  //     //     ] as HTMLDivElement;
  //     //     catElement?.scrollIntoView({
  //     //       behavior: "smooth",
  //     //       block: "start", // Center the element in view
  //     //     });
  //     //   }
  //     // }
  //   }
  // }, [categoryId]);

  return (
    <div
      className='
        h-full
        lg:bg-white
        lg:border-[1px]
        shadow-sm
        rounded-lg
        overflow-y-auto
        relative
      '
    >
      <div className='sticky top-0 inset-x-0  py-4 mb-3  bg-[#1fa45b]'>
        <h2 className='text-xl text-center text-white font-semibold'>
          Category
        </h2>
      </div>
      <div className='flex flex-col pb-4 space-y-3 '>
        <div className='lg:flex items-center relative px-3 hidden'>
          <Input
            type='text'
            className='pl-10 h-10 focus-visible:ring-[#1fa45b] placeholder:text-sm placeholder:font-light'
            placeholder='Search by dua name'
          />
          <div
            role='button'
            className='z-20 h-9 w-9 absolute left-4 flex items-center justify-center transition rounded-lg '
          >
            <Search className='h-4 w-4 text-neutral-500 ' />
          </div>
        </div>
        <div
          ref={scrollRef}
          className='min-h-[420px] lg:h-[420px] space-y-2 overflow-y-auto px-2 pl-3'
        >
          {categories.length === 0 ? (
            <Loading />
          ) : (
            categories.map((category) => (
              <div key={category.cat_id.toString()}>
                <div>
                  <CategoryCard
                    id={category.cat_id}
                    category={category.cat_name_en}
                    icon={category.cat_icon}
                    duas={category.no_of_dua}
                    subcategory={category.no_of_subcat}
                  />
                </div>
                <div
                  className={cn(
                    // selected === category.cat_id.toString() ? "block" : "hidden"
                  )}
                >
                  <SubCategoryList
                    id={category.cat_id}
                    subcategories={category.subCategories}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};


