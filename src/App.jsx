import React, { useState } from "react";
import { ChatList } from "./components/ChatList";
import { ChatWindow } from "./components/ChatWindow";
import { NewChat } from "./components/NewChat";

const App = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("list")}
          className={`px-4 py-2 rounded ${
            activeTab === "list"
              ? "bg-black text-white"
              : "bg-gray-200 text-black text-semi-bold"
          }`}
        >
          Chat List
        </button>
        <button
          onClick={() => setActiveTab("window")}
          className={`px-4 py-2 rounded ${
            activeTab === "window"
              ? "bg-black text-white"
              : "bg-gray-200 text-black text-semi-bold"
          }`}
        >
          Chat Window
        </button>
        <button
          onClick={() => setActiveTab("new")}
          className={`px-4 py-2 rounded ${
            activeTab === "new"
              ? "bg-black text-white"
              : "bg-gray-200 text-black text-semi-bold"
          }`}
        >
          New Chat
        </button>
      </nav>

      <main>
        {activeTab === "list" && <ChatList />}
        {activeTab === "window" && <ChatWindow />}
        {activeTab === "new" && <NewChat />}
      </main>
    </div>
  );
};

export default App;
