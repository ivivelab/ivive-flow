"use client";

import { useState } from "react";

// 초기 데이터 구조
const initialTasks = [
  { id: 1, title: "서울시청 웹사이트 제작", status: "수정요청반영중" },
  { id: 2, title: "강남 아파트 인테리어", status: "진행중" },
];

export default function ProgressManagementPage() {
  const [tasks, setTasks] = useState(initialTasks);

  // 상태 업데이트 핸들러
  const updateStatus = (id: number, newStatus: string) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  // 제목 업데이트 핸들러
  const updateTitle = (id: number, newTitle: string) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, title: newTitle } : t)));
  };

  return (
    <div className="w-full lg:w-[96%] mx-auto px-6 py-10">
      {/* 제목 및 설명 영역 */}
      <div className="mb-8">
        <h1 className="text-2xl font-black text-zinc-950">진행 관리</h1>
        <p className="text-zinc-400 mt-2 text-xs sm:text-sm font-medium">
          진행 중인 프로젝트의 상태를 한눈에 관리합니다.
        </p>
      </div>

      {/* 프로젝트 리스트 */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className="bg-white p-5 border border-zinc-200 rounded-xl flex items-center justify-between shadow-sm"
          >
            {/* 제목 수정 가능하도록 input 적용 */}
            <input
              type="text"
              value={task.title}
              onChange={(e) => updateTitle(task.id, e.target.value)}
              className="font-bold text-lg text-zinc-800 w-full max-w-[50%] focus:outline-none focus:border-b-2 focus:border-indigo-500"
            />
            
            <div className="flex items-center gap-3">
              {/* 상태 셀렉트박스 */}
              <select 
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
                className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-bold border-none cursor-pointer hover:bg-indigo-100 transition"
              >
                <option value="진행중">진행중</option>
                <option value="수정요청반영중">수정요청반영중</option>
                <option value="검수대기">검수대기</option>
              </select>

              {/* 완료 버튼 */}
              <button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition shadow-sm"
                onClick={() => console.log(`${task.title} 완료 처리`)}
              >
                완료
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}