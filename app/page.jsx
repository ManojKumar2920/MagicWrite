import Hero from "@/components/Hero/Hero";
import Load from "@/components/Loader/Load";
import MagicBox from "@/components/Magic/MagicBox";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <MagicBox />

    </div>
  );
}
