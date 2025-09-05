import React from "react";
import { chatData } from "../utils/constant";

export const ChatList = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl p-2 mb-4 flex justify-center bg-gray-300 text-black rounded-2xl w-1/2 text-center">
        ChatList
      </h1>

      <section className="bg-white rounded-lg w-1/2 shadow-lg">
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="flex justify-between items-center p-3 border-b hover:bg-gray-100 cursor-pointer border-black"
          >
            <div>
              <h2 className="font-semibold text-black">
                {chat.name || chat.author}
              </h2>
              <p className="text-gray-600 text-sm">
                {chat.lastMessage || chat.text}
              </p>
            </div>
            <time className="text-xs text-gray-400">
              {chat.time || chat.at}
            </time>
          </div>
        ))}
      </section>
    </div>
  );
};
