"use client";
import React, { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { Toaster, toast } from "sonner";
import { ClipboardText } from "@phosphor-icons/react";



const MagicBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Simple");
  const [inputText, setInputText] = useState("");
  const [paraphrasedText, setParaphrasedText] = useState("");
  const apiKey = "AIzaSyBZq1zjYbgsnvRyHs6_wEGDpdHQsjCDbmk"; // Ensure your environment variable is set correctly
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "The job of this model is to paraphrase the input text provided by users in simple, fluent, natural, professional, formal these types. I strongly restrict you to serve other messages or queries. Paraphrase the text according to the value type only like if professional paraphrase it professionally and don't add anything just paraphrase for the input and give result.",
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
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(
        `${selectedValue}: ${inputText}`
      );
      setParaphrasedText(result.response.text());
    } catch (error) {
      console.error("Error paraphrasing text:", error);
      // Handle error, show a message, etc.
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(paraphrasedText)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        toast.error('Unable to copy the text!')
      });
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className=" w-[90%] md:w-[80%] bg-white dark:bg-[#121212] dark:text-[#f2f8fc] shadow-lg rounded-xl p-6 z-0">
        <div className="flex md:flex-col md:gap-4">
          <div className="w-full mr-4 border-r md:border-b md:border-none">
            <div className="border-b pb-4 mr-4">
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center w-40 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-[#121212] dark:text-gray-400 dark:border-gray-600 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
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
                      Simple
                    </div>
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                      onClick={() => handleOptionClick("Fluent")}
                    >
                      Fluent
                    </div>
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                      onClick={() => handleOptionClick("Natural")}
                    >
                      Natural
                    </div>
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                      onClick={() => handleOptionClick("Formal")}
                    >
                      Formal
                    </div>
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                      onClick={() => handleOptionClick("Professional")}
                    >
                      Professional
                    </div>
                  </div>
                </div>
              )}
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
                className="mt-2 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-heart-500 to-purple-600 hover:to-purple-700"
              >
                Paraphrase
              </button>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0">
            <div className="font-semibold border-b pb-3">Paraphrased Text</div>
            <div className="mt-2">
              <textarea
                value={paraphrasedText}
                className="w-full h-full border-none ring-none outline-none text-base font-medium px-3 py-2 resize-none bg-white"
                disabled
                rows="10"
              ></textarea>
            </div>
            {paraphrasedText && (
              <button
                onClick={handleCopy}
                className=" mt-2 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-heart-500 to-purple-600 hover:to-purple-700 gap-1 items-center"
              >
                Copy Text <ClipboardText />
              </button>
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