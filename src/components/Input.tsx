import React, { useState, type SetStateAction } from "react";

interface Note {
  id: string;
  title: string;
  status: string;
}
type Props = {
  setAllNotes: React.Dispatch<SetStateAction<Note[]>>;
};
function Input({ setAllNotes }: Props) {
  const [note, setNote] = useState<Note>({
    title: "",
    status: "active",
    id: "",
  });
  console.log(note, "new note");
  const handleSaveNote = (e) => {
    if (e.key === "Enter") {
      console.log("enter pressed, saving note");

      setAllNotes((prev) => [...prev, note]);

      setNote({ ...note, title: "", id: "" });
    }
  };

  return (
    <div className="bg-[color:var(--color-note)] flex flex-row items-center p-3 rounded transition-all duration-500 ease-in-out">
      <div className="rounded-full border w-6 h-6  border-[#494b6ab6]"></div>
      <input
        type="text"
        value={note.title}
        onKeyDown={handleSaveNote}
        placeholder="Create a new note..."
        onChange={(e) =>
          setNote({ ...note, id: crypto.randomUUID(), title: e.target.value })
        }
        className="w-full m-2 text-[color:var(--color-text)] transition-all duration-500 ease-in-out focus:outline-none"
      />
    </div>
  );
}

export default Input;
