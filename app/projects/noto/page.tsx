"use client";
import { useState, useEffect } from "react";

export default function Noto() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNote = localStorage.getItem("noto-content");
    if (savedNote) setNote(savedNote);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value;
    setNote(newNote);
    localStorage.setItem("noto-content", newNote);
  };

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-3xl mx-auto">
        <textarea
          value={note}
          onChange={handleChange}
          className="w-full min-h-[80vh] bg-transparent text-white
            text-lg resize-none outline-none border-none
            placeholder-gray-500 font-mono leading-relaxed"
          placeholder="Start typing..."
          autoFocus
          spellCheck="false"
        />
      </div>
    </main>
  );
}
