import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Alphabets() {
  const alphabets = useSelector((state: RootState) => state.cards.alphabets);
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full w-full bg-gray-900 flex flex-col justify-center items-center">
      <div className="w-1/2 h-1/2">
        <div className="flex h-full justify-center items-center bg-gray-500 font-mono text-9xl text-yellow-400">
          {alphabets[index]}
        </div>
        <div
          className="flex justify-end py-8 uppercase font-mono text-2xl font-bold text-yellow-600 hover:text-yellow-400"
          onClick={() => {
            if (!alphabets[index + 1]) {
              setIndex((index) => (index = 0));
              console.log(`Reinitialize`);
            } else {
              setIndex((index) => (index = index + 1));
            }
            console.log(`Index : ${index}, Alphabet : ${alphabets[index]}`);
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}
