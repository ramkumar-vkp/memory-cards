import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Home() {
  const sightWords = useSelector((state: RootState) => state.cards.sightWords);
  let [index, setIndex] = useState(0);

  return (
    <div className="h-full w-full bg-gray-900 flex justify-center items-center">
      <div className="h-1/2 w-1/2">
        <div className="flex h-full justify-center items-center bg-gray-500 font-mono text-9xl text-yellow-400">
          {sightWords[index]}
        </div>
        <div
          className="flex justify-end py-8 uppercase font-mono text-2xl font-bold text-yellow-600"
          onClick={() => {
            if (!sightWords[index + 1]) {
              setIndex((index) => (index = 0));
            } else {
              setIndex((index) => (index = index + 1));
            }
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}
