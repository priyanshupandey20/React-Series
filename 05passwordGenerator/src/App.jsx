import React, { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  
// useRef hook
const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); 
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, charAllowed]); 

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
   window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  text-orange-500 bg-gray-700">
        <h1 className="text-white text-center py-2 text-2xl my-3">
          Password Generator
        </h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full outline-none py-2 px-3"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          {/*********************/}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))} 
            />
            <label>Length: {length}</label>
          </div>

          {/* Number Allowed Checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed} 
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          {/* Character Allowed Checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setcharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
        <button className="w-full text-center outline-none bg-blue-700 text-white px-3  shrink-0 mt-9 py-2 rounded-md"
        onClick={passwordGenerator}
        >Regenerate</button>
        
      </div>
      </div>
    </>
  );
}
