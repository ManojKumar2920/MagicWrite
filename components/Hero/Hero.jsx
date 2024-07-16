import React from "react";
import HeroPattern from "@/assets/hero-pattern.png";

const Hero = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center z-0 pt-10 md:pt-0">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 dark:opacity-10" style={{ backgroundImage: `url(${HeroPattern.src})` }}></div>
      <div className="relative z-10 flex flex-col justify-center items-center gap-4 text-center">
        <h1 className="font-bold text-4xl md:text-3xl">
          Free AI{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Magic Writing Tool!
          </span>
        </h1>
        <p className="w-[50%] md:w-[80%]">
          Rewrite sentences, paragraphs, essays, and entire articles in seconds
          with MagicWite free paraphrasing tool. Get 100% unique and plagiarism-free content.
        </p>
      </div>
    </div>
  );
};

export default Hero;
