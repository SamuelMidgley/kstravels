import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  useCurrentEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "../ui/button";

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

function SaveEdit() {
  const { editor } = useCurrentEditor();

  return <Button onClick={() => console.log(editor?.getHTML())}>Save</Button>;
}

export default function Tiptap() {
  return (
    <EditorProvider extensions={extensions} content={content}>
      <FloatingMenu>This is the floating menu</FloatingMenu>
      <BubbleMenu>This is the bubble menu</BubbleMenu>
      <SaveEdit />
    </EditorProvider>
  );
}
