import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPost, categoryColors } from "@/lib/research";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Psitta`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#F5F4F0]">

      {/* Top nav */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-10">
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-[#1C1C1E]/45 hover:text-[#0D1B2A] text-sm font-medium transition-colors"
        >
          <ArrowLeft size={14} />
          Research & Learn
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-10 pb-32">

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
            {post.category}
          </span>
          <span className="text-[#1C1C1E]/40 text-sm">{post.displayDate}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight mb-5">
          {post.title}
        </h1>

        {/* Description */}
        <p className="text-[#1C1C1E]/55 text-lg leading-relaxed mb-10 pb-10 border-b border-[#0D1B2A]/10">
          {post.description}
        </p>

        {/* Markdown body */}
        <div className="prose-research">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-[#0D1B2A] mt-12 mb-4 leading-snug">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-bold text-[#0D1B2A] mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-[#1C1C1E]/75 leading-relaxed mb-5 text-base">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 mb-5 ml-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="space-y-2 mb-5 ml-4 list-decimal">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-[#1C1C1E]/75 text-base leading-relaxed flex gap-2">
                  <span className="text-[#7FD67F] mt-1.5 flex-shrink-0">•</span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-[#0D1B2A]">{children}</strong>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#7FD67F] pl-5 my-6 text-[#1C1C1E]/60 italic">
                  {children}
                </blockquote>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.includes("language-");
                return isBlock ? (
                  <code className="block bg-[#0D1B2A] text-[#7FD67F] rounded-xl p-5 text-sm font-mono overflow-x-auto my-6 whitespace-pre">
                    {children}
                  </code>
                ) : (
                  <code className="bg-[#0D1B2A]/8 text-[#1A6B3A] px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => <>{children}</>,
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-sm border-collapse">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="bg-[#0D1B2A]/6 text-[#0D1B2A] font-semibold px-4 py-2 text-left border border-[#0D1B2A]/10">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2 border border-[#0D1B2A]/10 text-[#1C1C1E]/70">
                  {children}
                </td>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-[#1A6B3A] underline underline-offset-2 hover:text-[#7FD67F] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-[#0D1B2A]/10">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-[#1C1C1E]/45 hover:text-[#0D1B2A] text-sm font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            목록으로 돌아가기
          </Link>
        </div>

      </article>
    </main>
  );
}
