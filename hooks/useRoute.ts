'use client'

import {useMemo} from 'react'
import { BookMarked, BookOpen, Home, LayoutGrid, LibraryBig, Lightbulb, PackagePlus } from 'lucide-react';



const useRoutes = () =>{
    const routes = useMemo(
      () => [
        {
          label: "Home",
          icon: Home,
        },
        {
          label: "All Duas",
          icon: LayoutGrid,
        },
        {
          label: "Memorize",
          icon: Lightbulb,
        },
        {
          label: "Bookmark",
          icon: BookMarked,
        },
        {
          label: "Ruqyah",
          icon: PackagePlus,
        },
        {
          label: "Dua Info",
          icon: LibraryBig,
        },
        {
          label: "Books",
          icon: BookOpen,
        },
      ],
      []
    );

    return routes;
}

export default useRoutes;