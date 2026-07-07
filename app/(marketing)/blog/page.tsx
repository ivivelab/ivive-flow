"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // URL 파라미터 읽기
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function BlogPostPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // URL에서 id 가져오기
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single(); // 특정 ID 하나만 가져오기

      if (error) {
        console.error("게시글 불러오기 실패:", error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) return <main className="py-20 text-center">불러오는 중...</main>;
  if (!post) return <main className="py-20 text-center">게시글을 찾을 수 없습니다.</main>;

  return (
    <main className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* 헤더 섹션 */}
        <div className="mb-12">
          <div className="text-sm font-semibold text-blue-600 mb-4">Storytelling</div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-950 leading-tight">
            {post.title}
          </h1>
          <div className="mt-8 flex items-center gap-4 text-zinc-500">
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
        </div>

        {/* 메인 이미지 (DB에 저장된 URL 사용) */}
        {post.image_url && (
          <div className="mb-16 overflow-hidden rounded-[40px]">
            <img 
              src={post.image_url} 
              alt={post.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        {/* 본문 텍스트 (줄바꿈이 적용되도록 whitespace-pre-line 사용) */}
        <article className="prose prose-lg prose-zinc max-w-none">
          <p className="whitespace-pre-line leading-relaxed text-zinc-700">
            {post.content}
          </p>
        </article>

        {/* 하단 네비게이션 */}
        <div className="mt-20 border-t pt-12 flex justify-between items-center">
          <Link href="/blog" className="text-zinc-500 hover:text-black transition">
            ← 목록으로 돌아가기
          </Link>
        </div>

      </div>
    </main>
  );
}