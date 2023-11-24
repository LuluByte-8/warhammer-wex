export interface ICategory {
  name: string;
  categoryId: string;
  bannerURL: string;
}

const categories: ICategory[] = [
  {
    name: "Space Marines",
    categoryId: "e072ddf3-849b-47ce-b647-8f3bd2597994",
    bannerURL: "/images/SpaceMarineBanner.png",
  },
  {
    name: "Armies of the Imperium",
    categoryId: "21a5f23c-7a83-47b6-b3e4-5a23dee45c1f",
    bannerURL: "/images/ImperiumBanner.png",
  },
  {
    name: "Forces of Chaos",
    categoryId: "396ecb66-003e-497e-860b-04fda171f2b7",
    bannerURL: "/images/ChaosBanner.png",
  },
  {
    name: "Xeno's Armies",
    categoryId: "699952b4-b50a-4204-ba7e-fdc637f18d25",
    bannerURL: "/images/XenosBanner.png",
  },
];

export const getCategories = () => {
  return categories;
};

export const getCategoryById = (categoryId: string): ICategory | undefined => {
  return categories.find((category) => category.categoryId === categoryId);
};
