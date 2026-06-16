import Hero from "@/components/sections/Hero";
import WorkflowBar from "@/components/sections/WorkflowBar";
import New from "@/components/sections/New";
import Category from "@/components/sections/Category";
import Problem from "@/components/sections/Problem";
import Process from "@/components/sections/Process";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkflowBar />
      <New />
      <Category />
      <Problem />
      <Process />
      <Story />
    </>
  );
}