


import { Category, CategoryWithSubCategory, Dua, SubCategory } from "@/type";
import Database from "better-sqlite3";

  const db = new Database("dua_main.sqlite");



// const getDuas = (callback) => {
//   const sql = `SELECT  * FROM  dua`;
//   db.all(sql, [], callback);
// };

export const getDuasByCategoryId = (id: string) => {
  const rows = db
    .prepare(`SELECT * FROM dua WHERE cat_id=${id} ORDER BY dua_id ASC`)
    .all() as Dua[];
  return rows;
};

export const getCategorirs = () => {
  const rows = db.prepare(`SELECT  * FROM  category`).all() as Category[];
  return rows;
};

export const getCategoriesWithSubCategories = (): CategoryWithSubCategory[] => {
  const categoryWithSubCategory: CategoryWithSubCategory[] = [];
  const rows = db.prepare(`SELECT * FROM category`).all() as Category[];

  rows.forEach((row) => {
    categoryWithSubCategory.push({
      ...row,
      subCategories: getSubCategoriesById(row.cat_id), // Ensure this returns SubCategory[]
    });
  });

  return categoryWithSubCategory;
};

export const getSubCategoriesById = (id: number) => {
    const rows = db
      .prepare(`SELECT * FROM sub_category WHERE cat_id=${id}`)
      .all() as SubCategory[];
    return rows;

};
