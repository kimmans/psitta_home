import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPosts, categoryColors, type Category } from "@/lib/research";

export const metadata = {
  title: "Research & Learn — Psitta",
  description: "농업 AI, 스마트팜, 계량분석 분야의 연구 결과와 논문 리뷰를 공유합니다.",
};

const allCategories: Category[] = ["인공지능", "스마트팜", "데이터", "기타"];

export default function ResearchPage() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);

  return (
    <main className="min-h-screen bg-[#F5F4F0]">

      {/* Top nav */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1C1C1E]/45 hover:text-[#0D1B2A] text-sm font-medium transition-colors"
        >
          <ArrowLeft size={14} />
          홈으로
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-32">

        {/* Header */}
        <div className="pt-12 pb-14 border-b border-[#0D1B2A]/10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[#7FD67F]" />
            <span className="text-[#7FD67F] text-sm font-semibold tracking-[0.2em] uppercase">
              Research & Learn
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#0D1B2A] leading-tight mb-4">
            Research & Learn
          </h1>
          <p className="text-[#1C1C1E]/55 text-lg max-w-2xl leading-relaxed">
            농업 AI, 스마트팜, 계량분석 분야의 연구 결과와 논문 리뷰를 공유합니다.
          </p>
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {allCategories.map((cat) => (
              <span
                key={cat}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[cat]}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Featured cards */}
        {featured.length > 0 && (
          <div className="pt-12 pb-4">
            <p className="text-xs font-semibold text-[#1C1C1E]/30 tracking-[0.15em] uppercase mb-6">
              New Articles
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/research/${post.slug}`}
                  className="group flex flex-col justify-between p-8 rounded-2xl bg-[#0D1B2A] hover:bg-[#0f2235] transition-colors min-h-[220px]"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="text-white/30 text-xs">{post.displayDate}</span>
                    </div>
                    <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#7FD67F] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-[#7FD67F] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    읽기 <ArrowUpRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Full publications list */}
        <div className="pt-10">
          <p className="text-xs font-semibold text-[#1C1C1E]/30 tracking-[0.15em] uppercase mb-2">
            All Articles
          </p>
          <div className="border-t border-[#0D1B2A]/10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/research/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-6 border-b border-[#0D1B2A]/10 hover:bg-white/60 -mx-4 px-4 rounded-lg transition-colors"
              >
                <span className="text-[#1C1C1E]/35 text-sm tabular-nums whitespace-nowrap pt-0.5 sm:w-20 flex-shrink-0">
                  {post.displayDate}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start sm:w-24 text-center flex-shrink-0 ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[#0D1B2A] font-semibold text-base group-hover:text-[#1A6B3A] transition-colors leading-snug mb-1">
                    {post.title}
                  </p>
                  <p className="text-[#1C1C1E]/50 text-sm leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#0D1B2A]/20 group-hover:text-[#7FD67F] transition-colors flex-shrink-0 mt-1 hidden sm:block"
                />
              </Link>
            ))}
            {posts.length === 0 && (
              <p className="py-12 text-center text-[#1C1C1E]/35 text-sm">
                아직 게시된 글이 없습니다.
              </p>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
