import {
  FolderKanban,
} from "lucide-react";

const projects = [
  {
    name: "홈페이지 제작",
    progress: 70,
  },
  {
    name: "에어컨 설치",
    progress: 85,
  },
  {
    name: "사무실 청소",
    progress: 50,
  },
  {
    name: "인테리어 공사",
    progress: 30,
  },
];

export default function ProjectProgress() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <div
          className="
            w-12 h-12
            rounded-xl
            bg-indigo-100
            flex items-center justify-center
          "
        >
          <FolderKanban
            size={24}
            className="text-indigo-600"
          />
        </div>

        <div>

          <h2 className="font-bold text-xl">
            진행 현황
          </h2>

          <p className="text-sm text-slate-500">
            현재 진행 중인 프로젝트
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {projects.map((project) => (
          <div key={project.name}>

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                {project.name}
              </span>

              <span className="text-sm text-slate-500">
                {project.progress}%
              </span>

            </div>

            <div className="
              h-3
              bg-slate-200
              rounded-full
              overflow-hidden
            ">

              <div
                className="
                  h-full
                  bg-indigo-600
                  rounded-full
                "
                style={{
                  width: `${project.progress}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}