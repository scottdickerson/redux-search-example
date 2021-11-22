import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLetter } from "../countriesSlice";

const alphabetLetters = ["A"];
for (let i = 1; i < 26; i++) {
  alphabetLetters[i] = String.fromCharCode(alphabetLetters[0].charCodeAt() + i);
  console.log(String.fromCharCode(alphabetLetters[0].charCodeAt() + i));
}

console.log("show letters", alphabetLetters);

const AlphabetSelector = () => {
  const selectedLetter = useSelector(
    (state) => state.countriesPage?.selectedLetter
  );
  const dispatch = useDispatch();
  console.log("selected Letter", selectedLetter);
  return (
    <div style={{ display: "flex", flexFlow: "row" }}>
      {alphabetLetters.map((letter) => (
        <button
          style={{ color: letter === selectedLetter ? "red" : "black" }}
          key={letter}
          onClick={() => dispatch(selectLetter(letter))}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetSelector;
