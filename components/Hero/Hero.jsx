import React from "react";
import HeroPattern from "@/assets/hero-pattern.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="  z-10">
      <div className=" h-[70dvh] flex items-center justify-center ">
        <div className=" flex flex-col justify-center items-center gap-4 text-center">
          <h1 className=" font-bold text-4xl md:text-3xl">
            Free AI{" "}
            <span className=" bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Magic Writing Tool!
            </span>
          </h1>
          <p className=" w-[50%] md:w-[80%]">
            Rewrite sentences, paragraphs, essays, and entire articles in
            seconds with MagicWite free paraphrasing tool. Get 100% unique and
            plagiarism-free content.
          </p>
        </div>
      </div>
      <Image src={HeroPattern} className=" absolute top-10 z-0 opacity-50 dark:opacity-5 h-dvh"></Image>
    </div>
  );
};

export default Hero;
