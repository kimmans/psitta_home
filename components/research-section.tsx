"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PostMeta } from "@/lib/research-config";
import { categoryColors } from "@/lib/research-config";

interface Props {
  posts: PostMeta[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ResearchSection({ posts }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#F5F4F0] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-0.5 bg-[#7FD67F]" />
          <span className="text-[#7FD67F] text-sm font-semibold tracking-[0.2em] uppercase">
            Research & Learn
          </span>
        </motion.div>

        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight mb-3">
              Research & Learn
            </h2>
            <p className="text-[#1C1C1E]/55 text-base lg:text-lg max-w-xl leading-relaxed">
              농업 AI, 스마트팜, 계량분석 분야의 연구 결과와 논문 리뷰를 공유합니다.
            </p>
          </div>
          <Link
            href="/research"
            className="group inline-flex items-center gap-2 text-[#0D1B2A] font-semibold text-sm hover:text-[#1A6B3A] transition-colors whitespace-nowrap"
          >
            모든 글 보기
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Post list */}
        {posts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#1C1C1E]/40 text-sm"
          >
            아직 게시된 글이 없습니다.
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border-t border-[#0D1B2A]/10"
          >
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Link
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
                    className="text-[#0D1B2A]/25 group-hover:text-[#7FD67F] transition-colors flex-shrink-0 mt-1 hidden sm:block"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/research"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0D1B2A]/15 bg-white hover:bg-[#0D1B2A] hover:border-[#0D1B2A] text-[#0D1B2A] hover:text-white font-semibold text-sm transition-all"
          >
            전체 글 보기
            <ArrowUpRight size={14} className="group-hover:text-[#7FD67F] transition-colors" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
