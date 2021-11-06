import SightWords from "./sightWords";
import Numbers from "./numbers";
import Colors from "./colors";
import Alphabets from "./alphabets";
import { useState } from "react";

export default function Home() {
  const [category, setcategory] = useState("SIGHTWORD");

  return (
    <div className="h-screen w-full bg-gray-900">
      <div className="w-full h-16 flex flex-wrap flex-row text-gray-200 font-mono text-2xl p-4">
        <div
          className="px-4 uppercase text-yellow-700 hover:text-yellow-500 hover:bg-gray-600 hover:rounded-lg"
          onClick={() => {
            setcategory((category) => (category = "SIGHTWORD"));
          }}
        >
          SightWords
        </div>
        <div
          className="px-4 uppercase text-yellow-700 hover:text-yellow-500 hover:bg-gray-600 hover:rounded-lg"
          onClick={() => {
            setcategory((category) => (category = "NUMBER"));
          }}
        >
          Numbers
        </div>
        <div
          className="px-4 uppercase text-yellow-700 hover:text-yellow-500 hover:bg-gray-600 hover:rounded-lg"
          onClick={() => {
            setcategory((category) => (category = "COLORS"));
          }}
        >
          Colors
        </div>
        <div
          className="px-4 uppercase text-yellow-700 hover:text-yellow-500 hover:bg-gray-600 hover:rounded-lg"
          onClick={() => {
            setcategory((category) => (category = "ALPHABET"));
          }}
        >
          Alphabets
        </div>
      </div>
      {category == "SIGHTWORD" && <SightWords />}
      {category == "NUMBER" && <Numbers />}
      {category == "COLORS" && <Colors />}
      {category == "ALPHABET" && <Alphabets />}
    </div>
  );
}
