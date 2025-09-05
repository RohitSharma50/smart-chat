import React, { useState } from "react";

export const ChatWindow = () => {
  const [summary, setSummary] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "Ava",
      text: "Morning team! Are you ready?",
      time: "09:10",
    },
    { id: 2, author: "You", text: "yes everyone is ready", time: "09:11" },
    {
      id: 3,
      author: "Ava",
      text: "Assigned tasks for everyone today.",
      time: "09:24",
    },
  ]);

  const [input, setInput] = useState("");

  const aiSuggestions = [
    "Please keep updating if any issues.",
    "Can you clarify the timeline?",
    "I'll take this and circle back.",
  ];
  const SummarizeThread = () => {
    const conclusion =
      "Everyone gather on morning and Ava Assigned tasks for everyone today. Now they are working on their tasks.";
    setSummary(conclusion);
  };

  const SmartReplySuggestion = () => {
    const suggestion = "Can you clarify the timeline?";
    setInput(suggestion);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), author: "You", text: input, time: "Now" },
    ]);
    setInput("");
  };

  return (
    <section className="flex flex-col h-screen border rounded-lg bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <button className="text-blue-600">← Back</button>
      </header>

      <div className="flex gap-3 p-4 border-b">
        <button
          className="px-3 py-1 text-2xl rounded bg-gray-100 hover:bg-gray-200 text-black"
          onClick={() => {
            SummarizeThread();
          }}
        >
          Summarize Thread
        </button>
        <button
          className="px-3 py-1 text-2xl rounded bg-gray-100 hover:bg-gray-200 text-black"
          onClick={() => SmartReplySuggestion()}
        >
          Smart Reply Suggestion
        </button>
      </div>

      {summary.length != 0 && (
        <p className=" mx-3 p-2 px-3  text-black bg-green-100">{summary}</p>
      )}
      <div className="flex-1 overflow-y-auto p-4 ">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.author === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                msg.author === "You"
                  ? "bg-blue-900 text-white text-right"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="block text-xs opacity-70 mt-1">
                {msg.author} • {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-b bg-gray-50">
        <p className="text-xs text-gray-500 mb-2">
          AI suggestions (placeholder):
        </p>
        <div className="flex flex-wrap gap-2">
          {aiSuggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => setInput(s)}
              className="px-3 py-1 text-sm rounded-full bg-gray-200 text-black hover:bg-gray-300"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <footer className="flex items-center p-4  gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border text- rounded-lg bg-gray-200 text-black"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
        >
          Send
        </button>
      </footer>
    </section>
  );
};
