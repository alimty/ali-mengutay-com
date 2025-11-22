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

/**
 * Check if the current selection is inside a code block
 */
function isInCodeBlock($from: {
  depth: number;
  node: (depth: number) => { type: { name: string } };
}): boolean {
  let depth = $from.depth;
  while (depth > 0) {
    if ($from.node(depth).type.name === "codeBlock") {
      return true;
    }
    depth--;
  }
  return false;
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
      onChange(editor.getHTML());
      setTimeout(() => {
        isUpdatingFromEditor.current = false;
      }, 0);
    },
  });

  // Fix Enter key in code blocks on mobile browsers
  // Mobile browsers (Chrome/Brave) sometimes bypass ProseMirror's event system
  useEffect(() => {
    if (!editor) return;

    const editorElement = editor.view.dom;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        const { state } = editor.view;
        const { $from } = state.selection;

        if (isInCodeBlock($from)) {
          const { tr } = state;
          tr.insertText("\n");
          editor.view.dispatch(tr);
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    editorElement.addEventListener("keydown", handleKeyDown, true);
    return () => {
      editorElement.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [editor]);

  // Sync external value changes to editor
  useEffect(() => {
    if (editor && !isUpdatingFromEditor.current) {
      const currentContent = editor.getHTML();
      if (value !== currentContent) {
        if (value && value.trim() !== "") {
          editor.commands.setContent(value, { emitUpdate: false });
        } else {
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
