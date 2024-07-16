import React from "react";
import { FaClipboard, FaMagic, FaPaperPlane, FaEdit } from "react-icons/fa";

const Work = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center p-10">
        <div className=" text-center">
          <h1 className=" text-4xl font-bold p-2">
            How Does{" "}
            <span className=" bg-gradient-to-r from-purple-heart-500 to-purple-600 bg-clip-text text-transparent">
              Paraphrasing Tool
            </span>{" "}
            Work?
          </h1>
          <p className=" text-slate-500 dark:text-slate-300">
            Tired of dull and repetitive content? Spice up your writing with our
            powerful paraphraser!
          </p>
        </div>
        <div className="  p-10">
          <div className="grid grid-cols-5 md:grid-cols-1 grid-rows-4 gap-4 p-4">
            <div className="col-span-3 md:col-span-1 row-span-2 md:row-span-1 border rounded-xl p-6 shadow-sm bg-white dark:bg-[#121212] dark:border-slate-800">
              <div className="flex flex-col items-start">
                <div className=" bg-blue-100 rounded-lg p-2">
                  <FaClipboard className="text-2xl text-blue-500" />
                </div>
                <div>
                  <h1 className="font-bold text-xl pt-3">Add your content</h1>
                  <p className=" pt-3">
                    Simply paste the text you want to rewrite into the AI
                    paraphrasing tool and you're all set!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 row-span-2 md:row-span-1 col-start-4 md:col-start-1 border rounded-xl p-6 shadow-sm bg-white dark:bg-[#121212] dark:border-slate-800">
              <div className="flex items-start flex-col">
                <div className=" bg-green-100 rounded-lg p-2">
                  <FaMagic className="text-2xl text-green-500" />
                </div>

                <div className=" pt-3">
                  <h1 className="font-bold text-lg">Select the details</h1>
                  <p className=" pt-3">
                    Ready to make your writing come alive? Let's choose the
                    perfect voice to add some magic!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 row-span-2 md:row-span-1 row-start-3 md:row-start-2 border rounded-xl p-6 shadow-sm bg-white dark:bg-[#121212] dark:border-slate-800">
              <div className="flex items-start flex-col">
                <div className=" bg-pink-100 rounded-lg p-2">
                  <FaPaperPlane className="text-2xl text-pink-500" />
                </div>

                <div className=" pt-3">
                  <h1 className="font-bold text-lg">Hit Paraphrase!</h1>
                  <p className=" pt-3">
                    Ready to see the magic of our paraphrase tool? Click
                    "paraphrase" and watch your content transform into something
                    new and exciting!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 row-span-2 md:row-span-1 col-start-3 md:col-start-1 border rounded-xl p-6 shadow-sm bg-white dark:bg-[#121212] dark:border-slate-800">
              <div className="flex items-start flex-col">
                <div className=" bg-purple-100 rounded-lg p-2">
                  <FaEdit className="text-2xl text-purple-600" />
                </div>

                <div className=" pt-3">
                  <h1 className="font-bold text-lg">Review and use</h1>
                  <p className=" pt-3">
                    Take a look at the rewritten text. Feel free to make any
                    changes you like, or try creating a new version to see what
                    other options are available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
