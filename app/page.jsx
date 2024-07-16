import Hero from "@/components/Hero/Hero";
import MagicBox from "@/components/Magic/MagicBox";
import Work from "@/components/Working/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" bg-gradient-to-r md:bg-gradient-to-b from-purple-500 to-cyan-900 dark:from-slate-700 dark:to-slate-900 pb-10">
        <Hero/>
        <MagicBox />
      </div>
      <Work />
    </div>
  );
}
