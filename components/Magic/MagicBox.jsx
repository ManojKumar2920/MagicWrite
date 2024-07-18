"use client";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Toaster, toast } from "sonner";
import { ClipboardText } from "@phosphor-icons/react";
import Image from "next/image";
import MagicWriteLogo from "@/assets/logo.png";
import "../../app/globals.css";

const MagicBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select Magic Tone ✨");
  const [inputText, setInputText] = useState("");
  const [paraphrasedText, setParaphrasedText] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = "AIzaSyBZq1zjYbgsnvRyHs6_wEGDpdHQsjCDbmk";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "The job of this model is to paraphrase the input text provided by users in simple, fluent, engaging, professional, formal these types. I strongly restrict you to serve other messages or queries. Paraphrase the text according to the value type only like if professional paraphrase it professionally and don't add anything just paraphrase for the input and give result.",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleParaphrase = async () => {
    setLoading(true);
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(
        `${selectedValue}: ${inputText}`
      );
      setParaphrasedText(await result.response.text());
      setLoading(false);
    } catch (error) {
      console.error("Error paraphrasing text:", error);
      // Handle error, show a message, etc.
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(paraphrasedText)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Unable to copy the text!");
      });
  };

  return (
    <div className=" h-[80%] flex items-center justify-center">
      <div className=" w-[90%] md:w-[80%] bg-white dark:bg-[#121212] dark:text-[#f2f8fc] shadow-lg rounded-xl p-6 z-0">
        <div className="flex md:flex-col md:gap-4">
          <div className="w-full mr-4 border-r md:border-b md:border-none">
            <div className="border-b pb-4 mr-4">
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center w-52 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-[#121212] dark:text-gray-400 dark:border-gray-600 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                {selectedValue}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div
                  className="mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none absolute left-20 right-0"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={() => handleOptionClick("Simple")}
                    >
                      Simple 👍
                    </div>
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                      onClick={() => handleOptionClick("Fluent")}
                    >
                      Fluent 😎
                    </div>
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                      onClick={() => handleOptionClick("Engaging")}
                    >
                      Engaging 👥
                    </div>
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                      onClick={() => handleOptionClick("Formal")}
                    >
                      Formal 👔
                    </div>
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                      onClick={() => handleOptionClick("Professional")}
                    >
                      Professional 👩🏻‍💼
                    </div>
                  </div>
                </div>
              )}
              <p className=" text-[12px] text-slate-600 dark:text-slate-400 pt-1">
                Tone of Words
              </p>
            </div>
            <div className="mt-4">
              <textarea
                value={inputText}
                onChange={handleInputChange}
                className="w-full h-full border-none ring-none outline-none text-base font-medium px-3 py-2 resize-none"
                placeholder="To rewrite text, enter or paste it here and press 'Paraphrase'"
                rows="10"
              ></textarea>
              <button
                onClick={handleParaphrase}
                disabled={loading}
                className="mt-2 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-heart-500 to-purple-600 hover:to-purple-700 bg-white dark:bg-[#121212]"
              >
                Paraphrase
              </button>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0">
            <div className="font-semibold border-b py-4 text-center text-xl">
              Paraphrased Text
            </div>
            <div className="mt-2 flex items-center justify-center">
              {!paraphrasedText && (
                <div className=" ">
                  <Image
                    src={MagicWriteLogo}
                    width={200}
                    height={200}
                    className=" custom-spin"
                  />
                </div>
              )}
            </div>
            {paraphrasedText && (
              <div>
                <textarea
                  value={paraphrasedText}
                  className="w-full h-full border-none ring-none outline-none text-base font-medium px-3 py-2 resize-none bg-white dark:bg-[#121212]"
                  disabled
                  rows="10"
                ></textarea>
                <button
                  onClick={handleCopy}
                  className=" mt-2 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-heart-500 to-purple-600 hover:to-purple-700 gap-1 items-center"
                >
                  Copy Text <ClipboardText />
                </button>
              </div>
            )}
            <div></div>
          </div>
        </div>
      </div>
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default MagicBox;
