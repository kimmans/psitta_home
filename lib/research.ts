import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Category, PostMeta } from "@/lib/research-config";

export type { Category, PostMeta } from "@/lib/research-config";
export { categoryColors } from "@/lib/research-config";

export interface Post extends PostMeta {
  content: string;
}

const postsDir = path.join(process.cwd(), "content/research");

function formatDisplayDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}. ${d.getMonth() + 1}.`;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        displayDate: formatDisplayDate(data.date ?? ""),
        category: (data.category ?? "기타") as Category,
        description: data.description ?? "",
        featured: data.featured ?? false,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    displayDate: formatDisplayDate(data.date ?? ""),
    category: (data.category ?? "기타") as Category,
    description: data.description ?? "",
    featured: data.featured ?? false,
    content,
  };
}
