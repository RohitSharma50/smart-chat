import React from "react";
import { useState } from "react";

export const NewChat = () => {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <section className=" m-2 p-2 ">
        {" "}
        <header className="grid  justify-center text-3xl m-0 p-0">
          Smart ChatBot
        </header>
        <form
          className="flex flex-col w-9/12 justify-center"
          onSubmit={handleSubmit}
        >
          <label className="text-left mb-2 font-semibold">
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            placeholder=" Your name"
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          <label className="text-left mb-2 font-semibold">
            type your message here:
          </label>
          <input
            type="text"
            value={name}
            placeholder="Enter you chat here ..."
            className="border border-gray-300 h-40 rounded-md p-2"
          />
          <section>
            <button
              type="submit"
              className="text-white p-2 rounded-md bg-purple-500"
            >
              Start Chat
            </button>
            <button
              type="submit"
              className="text-white p-2 m-2 rounded-md bg-purple-500"
            >
              Generate IceBreakers
            </button>
          </section>
        </form>
      </section>
    </>
  );
};
