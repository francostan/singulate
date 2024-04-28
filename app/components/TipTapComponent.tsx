"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const Tiptap = ({ onChange, content }: any) => {
   const handleChange = (newContent: string) => {
      const updatedContent = newContent.replace(/\n/g, "<br />");
      onChange(updatedContent);
    };
    const editor = useEditor({
      extensions: [StarterKit, Underline],
      content: content,
      editorProps: {
        attributes: {
          class:
            "w-full h-full border-none outline-none p-4 text-lg resize-none white-space-pre-wrap",
        },
      },
      onUpdate: ({ editor }) => {
        handleChange(editor.getHTML());
      },
    });
  
    return (
      <div className="w-full px-4">
        <EditorContent style={{ whiteSpace: "pre-line", overflowWrap: "break-word" }} editor={editor} />
      </div>
    );
  };
  
export default Tiptap;
