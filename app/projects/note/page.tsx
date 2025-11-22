"use client";

import { useLocalStorage } from "./hooks/useLocalStorage";
import MarkdownEditor from "./components/MarkdownEditor";

export default function NotePage() {
  const [content, setContent, isLoading] = useLocalStorage<string>(
    "note-app-content",
    "", // Empty string - rely on placeholder
    500 // 500ms debounce for auto-save
  );

  return (
    <MarkdownEditor
      value={content}
      onChange={setContent}
      isLoading={isLoading}
    />
  );
}
