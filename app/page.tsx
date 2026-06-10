import Hero from "@/components/sections/Hero";
import Category from "@/components/sections/Category";
import New from "@/components/sections/New";
import Best from "@/components/sections/Best";
import Story from "@/components/sections/Story";
import Notice from "@/components/sections/Notice";
import Stores from "@/components/sections/Stores";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <New />
      <Best />
      <Story />
      <Notice />
      <Stores />
    </>
  );
}