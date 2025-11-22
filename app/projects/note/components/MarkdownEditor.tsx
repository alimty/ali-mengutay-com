"use client";

import { useEffect, useRef } from "react";
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
  const isUpdatingFromEditor = useRef(false);

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
        class: "markdown-editor",
      },
    },
    onUpdate: ({ editor }) => {
      isUpdatingFromEditor.current = true;
      const html = editor.getHTML();
      onChange(html);
      // Reset flag after a short delay
      setTimeout(() => {
        isUpdatingFromEditor.current = false;
      }, 0);
    },
  });

  // Update editor content when value changes externally (not from user typing)
  useEffect(() => {
    if (editor && !isUpdatingFromEditor.current) {
      // Only update if change came from outside (not from editor's onUpdate)
      const currentContent = editor.getHTML();
      if (value !== currentContent) {
        if (value && value.trim() !== "") {
          editor.commands.setContent(value, { emitUpdate: false });
        } else if (!value || value.trim() === "") {
          // Clear editor to show placeholder
          editor.commands.clearContent();
        }
      }
    }
  }, [value, editor]);

  if (isLoading) {
    return (
      <div className="loading">
        <p className="loading__text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="note-editor-wrapper">
      <EditorContent editor={editor} />
    </div>
  );
}
