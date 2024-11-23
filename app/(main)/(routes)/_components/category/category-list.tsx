"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CategoryCard from "./category-card";
import SubCategoryList from "./sub-category-list";
import { CategoryWithSubCategory } from "@/type";
import { cn, makeUrl } from "@/lib/utils";
import CategorySkeleton from "./category-skeleton";
import { useOrigin } from "@/hooks/use-origin";

interface CategoryListProps {
  categories: CategoryWithSubCategory[];
}
export const CategoryList = ({ categories }: CategoryListProps) => {
  const params = useSearchParams();
  const categoryId = params.get("cat");
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<string | null>(categoryId || "1");
  const router = useRouter();
  const origin = useOrigin();

  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredCategories, setFilteredCategories] = useState(categories); // State for filtered categories

  // Function to handle search query changes
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredCategories(categories); // Reset if query is empty
      return;
    }

    // Filter categories based on relevance (match in category name)
    const filtered = categories
      .map((category) => ({
        ...category,
        relevance: category.cat_name_en
          .toLowerCase()
          .indexOf(query.toLowerCase()),
      }))
      .filter((category) => category.relevance !== -1) // Remove non-matching items
      .sort((a, b) => a.relevance - b.relevance); // Sort by relevance

    setFilteredCategories(filtered);
  };

  useEffect(() => {
    if (!categoryId) {
      const catname = categories[0].cat_name_en;
      const url = makeUrl(origin, catname, 1);
      return router.push(url)
    }; // Only run if there is a cat parameter
    if (categoryId !== selected) {
      setSelected(categoryId); // Update selected if it differs
      // Scroll to the selected category
      if (scrollRef.current) {
        // const categoryIndex = categories.findIndex(
        //   (category) => category.cat_id.toString() === categoryId
        // );
        if (Number(categoryId) >= 0) {
          const catElement = scrollRef.current.children[
            Number(categoryId)
          ] as HTMLDivElement;
          setTimeout(() => {
            catElement?.scrollIntoView({
              behavior: "smooth",
              block: "center", // Align the element at the start of the view
            });
          }, 300);
          
        }
      }
    }
  }, [categoryId]);

  if (categories.length === 0) {
    return <CategorySkeleton />;
  }

  return (
    <div
      className='
        h-full
        xl:h-auto
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
            placeholder='Search categories'
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className='pl-10 h-10 focus-visible:ring-[#1fa45b] placeholder:text-sm placeholder:font-light'
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
          <>
            {!searchQuery
              ? categories.map((category) => (
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
                        selected === category.cat_id.toString()
                          ? "block"
                          : "hidden"
                      )}
                    >
                      <SubCategoryList
                        id={category.cat_id}
                        subcategories={category.subCategories}
                      />
                    </div>
                  </div>
                ))
              : filteredCategories.map((category) => (
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
                        selected === category.cat_id.toString()
                          ? "block"
                          : "hidden"
                      )}
                    >
                      <SubCategoryList
                        id={category.cat_id}
                        subcategories={category.subCategories}
                      />
                    </div>
                  </div>
                ))}
          </>
        </div>
      </div>
    </div>
  );
};
