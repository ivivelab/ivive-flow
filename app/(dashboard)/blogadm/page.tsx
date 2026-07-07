"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PenTool, CheckCircle, Trash2, Image as ImageIcon, Eye, X, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function BlogManagementPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [aiDraft, setAiDraft] = useState({ title: "", content: "", imageUrl: "" });

  const loadBlogs = async () => {
    const { data } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
    setBlogs(data || []);
  };

  useEffect(() => { loadBlogs(); }, []);

const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  // 1. 파일명에서 한글/공백 제거 및 고유 이름 생성
  const fileExt = file.name.split(".").pop();
  const safeFileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;

  // 2. Supabase 스토리지에 업로드
  const { error: uploadError } = await supabase.storage
    .from("blog-images")
    .upload(safeFileName, file);

  if (uploadError) {
    alert("업로드 실패: " + uploadError.message);
    return;
  }

  // 3. 업로드된 파일의 공개 URL 가져오기
  const { data } = supabase.storage
    .from("blog-images")
    .getPublicUrl(safeFileName);

  // 4. 상태 업데이트
  setAiDraft({ ...aiDraft, imageUrl: data.publicUrl });
  alert("이미지 업로드 성공!");
};

  // 2. 게시 및 수정 로직 (하나로 통합)
  const handlePublish = async () => {
    if (!aiDraft.title.trim() || !aiDraft.content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    setIsPublishing(true);

    const dataToSave = {
      title: aiDraft.title,
      content: aiDraft.content,
      image_url: aiDraft.imageUrl || null,
      published: true,
    };

    let error;
    if (editingId) {
      const result = await supabase.from("blogs").update(dataToSave).eq("id", editingId);
      error = result.error;
    } else {
      const result = await supabase.from("blogs").insert(dataToSave);
      error = result.error;
    }

    setIsPublishing(false);

    if (error) {
      console.error(error);
      alert("저장 실패: " + error.message);
      return;
    }

    alert(editingId ? "수정 완료!" : "게시 완료!");
    setEditingId(null);
    setAiDraft({ title: "", content: "", imageUrl: "" });
    loadBlogs();
  };

  const deleteBlog = async (id: number) => {
    if (!confirm("정말 삭제할까요?")) return;
    await supabase.from("blogs").delete().eq("id", id);
    loadBlogs();
  };

  return (
    <div className="w-full px-6 py-10 bg-zinc-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <div className="bg-white rounded-3xl border p-8 shadow-sm">
            <h2 className="text-2xl font-black mb-6">{editingId ? "블로그 수정하기" : "새 블로그 작성"}</h2>
            
            <input 
              value={aiDraft.title} 
              onChange={(e) => setAiDraft({...aiDraft, title: e.target.value})} 
              className="w-full border-b-2 border-zinc-200 py-3 text-lg font-bold mb-6 focus:border-indigo-600 outline-none" 
              placeholder="제목을 입력하세요" 
            />

<div className="mb-4 border-2 border-dashed rounded-xl h-40 flex flex-col items-center justify-center text-zinc-400 cursor-pointer hover:border-indigo-400">
  <label className="flex flex-col items-center cursor-pointer w-full h-full justify-center">
    <ImageIcon size={28} />
    <span className="text-sm mt-2">이미지 업로드</span>
    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
  </label>
</div>

            <textarea 
              value={aiDraft.content} 
              onChange={(e) => setAiDraft({...aiDraft, content: e.target.value})} 
              className="w-full h-80 border rounded-2xl p-6 text-zinc-700 leading-relaxed outline-none focus:ring-2 ring-indigo-50" 
              placeholder="내용을 입력하세요..." 
            />
            
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsPreviewOpen(true)} className="px-6 py-3 rounded-2xl border font-bold hover:bg-zinc-50">미리보기</button>
              <button onClick={handlePublish} disabled={isPublishing} className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700">
                {isPublishing ? "저장중..." : editingId ? "수정하기" : "게시하기"}
              </button>
            </div>
          </div>
        </div>

<div>
  <div className="bg-white rounded-3xl border p-6 shadow-sm sticky top-10">
    <h2 className="text-xl font-black mb-6">
      발행 내역 ({blogs.length})
    </h2>

    <div className="space-y-4 max-h-[700px] overflow-y-auto">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="border border-zinc-100 rounded-2xl p-5 hover:bg-zinc-50 transition"
        >
          <Link href={`/blog?id=${blog.id}`}>
            <div className="cursor-pointer">
              {blog.image_url && (
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-32 object-cover rounded-xl mb-3"
                />
              )}

              <h3 className="font-bold text-zinc-900 mb-2 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-xs text-zinc-400 font-medium mb-4">
                {new Date(blog.created_at).toLocaleDateString()}
              </p>
            </div>
          </Link>

          <div className="flex justify-end gap-2 border-t pt-3">
            <button
              onClick={() => {
                setEditingId(blog.id);
                setAiDraft({
                  title: blog.title,
                  content: blog.content,
                  imageUrl: blog.image_url || "",
                });
              }}
              className="p-2 rounded-lg hover:bg-zinc-200"
            >
              <PenTool size={16} />
            </button>

            <button
              onClick={() => deleteBlog(blog.id)}
              className="p-2 rounded-lg hover:bg-red-50 text-red-500"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-10 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black">미리보기</h3>
              <button onClick={() => setIsPreviewOpen(false)}><X size={24} /></button>
            </div>
            {aiDraft.imageUrl && <img src={aiDraft.imageUrl} className="w-full rounded-2xl mb-8" />}
            <h1 className="text-3xl font-black mb-6">{aiDraft.title}</h1>
            <p className="text-zinc-600 leading-relaxed whitespace-pre-line">{aiDraft.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}