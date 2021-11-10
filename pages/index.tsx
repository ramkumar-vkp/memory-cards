import SightWords from "./sightWords";
import Numbers from "./numbers";
import Colors from "./colors";
import Alphabets from "./alphabets";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSightWords,
  addAlphabets,
  addNumbers,
} from "../store/features/cardsSlice";

export default function Home() {
  const [category, setcategory] = useState("SIGHTWORD");
  const dispatch = useDispatch();

  async function callAPI() {
    console.log("Inside the callAPI function");
    const sightWords = await fetch(
      process.env.API_BASE_URI + "cards?cardType=sightWords"
    );
    let res = await sightWords.json();
    console.log(`Response : ${res[0].sightWords}`);
    dispatch(addSightWords(res[0].sightWords));

    const numbers = await fetch(
      process.env.API_BASE_URI + "cards?cardType=numbers"
    );
    res = await numbers.json();
    console.log(`Response : ${res[0].numbers}`);
    dispatch(addNumbers(res[0].numbers));

    const alphabets = await fetch(
      process.env.API_BASE_URI + "cards?cardType=alphabets"
    );
    res = await alphabets.json();
    console.log(`Response : ${res[0].alphabets}`);
    dispatch(addAlphabets(res[0].alphabets));
  }

  useEffect(() => {
    console.log("Inside the useEffect hook");
    callAPI();
  }, []);

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
