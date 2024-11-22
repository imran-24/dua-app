
import Sidebar from "@/components/sidebar/sidebar";
import Navigation from "./_components/navigation";
import { getCategoriesWithSubCategories } from "@/actions/queries";
import { CategoryList } from "@/app/(main)/(routes)/_components/category/category-list";

export const revalidate = false; // Ensures the page is statically generated

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = getCategoriesWithSubCategories();

  return (
    <Sidebar>
      <div className='h-full'>
        <Navigation />
        <div className='grid grid-cols-12 gap-x-4 h-full'>
          <div
            className='hidden
              lg:block 
              lg:col-span-3'
          >
            <CategoryList categories={data} />
          </div>
          <div className='col-span-12 lg:col-span-9'>{children}</div>
        </div>
      </div>
    </Sidebar>
  );
}
