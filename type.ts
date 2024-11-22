export type Category = {
        id: number,
        cat_id: number,
        cat_name_bn: string,
        cat_name_en: string,
        no_of_subcat: number,
        no_of_dua: number,
        cat_icon: string
}

export type SubCategory = {
        id: number,
        cat_id: number,
        subcat_id: number,
        subcat_name_bn: string,
        subcat_name_en: string,
        no_of_dua: number
}

export type CategoryWithSubCategory = Category & {
  subCategories: SubCategory[];
};
export type Dua = {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string;
  top_en: string;
  dua_arabic: string;
  dua_indopak: string;
  clean_arabic: string;
  transliteration_bn: string;
  transliteration_en: string;
  translation_bn: string;
  translation_en: string;
  bottom_bn: string;
  bottom_en: string;
  refference_bn: string;
  refference_en: string;
  audio: string;
};