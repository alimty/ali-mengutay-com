"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import "../styles.css";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}

export default function MarkdownEditor({
  value,
  onChange,
  isLoading,
}: MarkdownEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder:
          "Start typing... Use # for headings, **bold**, *italic*, - for lists",
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none min-h-screen p-12 text-lg leading-relaxed",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  // Update editor content when value changes externally
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#212224]">
        <p className="text-white/50">Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#212224] overflow-auto">
      <EditorContent editor={editor} />
    </div>
  );
}
