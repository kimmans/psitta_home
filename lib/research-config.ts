export type Category = "인공지능" | "스마트팜" | "데이터" | "기타";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: Category;
  description: string;
  featured: boolean;
}

export const categoryColors: Record<Category, string> = {
  "인공지능": "bg-emerald-500/15 text-emerald-500",
  "스마트팜": "bg-sky-500/15 text-sky-500",
  "데이터":   "bg-violet-500/15 text-violet-500",
  "기타":     "bg-amber-500/15 text-amber-500",
};
