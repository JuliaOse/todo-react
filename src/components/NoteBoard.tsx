import { useState, type SetStateAction } from "react";
import check from "../images/icon-check.svg";
import cancel from "../images/icon-cross.svg";
interface Note {
  id: string;
  title: string;
  status: string;
}

type Props = {
  note: Note[];
  setAllNotes: React.Dispatch<SetStateAction<Note[]>>;
};
function NoteBoard({ note, setAllNotes }: Props) {
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");
  const handleDelete = (id: string) => {
    setAllNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleCheck = (id: string) => {
    setAllNotes((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, status: n.status === "active" ? "done" : "active" }
          : n
      )
    );
  };

  const filteredNotes = note.filter((n) => {
    if (filter === "all") return true;
    return filter === n.status;
  });

  const handleClearDone = () => {
    setAllNotes((prev) => prev.filter((n) => n.status !== "done"));
  };

  return (
    <div className="shadow-sm rounded transform -translate-y-6 h-[80%] flex justify-between flex-col pt-6 pb-6 w-[90%] lg:w-1/3  mx-auto p-4 bg-[color:var(--color-note)] transition-all duration-500 ease-in-out">
      <div className="space-y-6 overflow-scroll">
        {filteredNotes.map((n) => (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <div
                onClick={() => handleCheck(n.id)}
                className={` rounded-full border transition-all duration-800 ease-in-out border-[#494b6ab6] w-6 h-6 p-1.5  flex items-center justify-center ${
                  n.status === "done"
                    ? "bg-gradient-to-t from-[#C36CEF] to-[#5DD6FE] "
                    : ""
                }`}
              >
                {n.status === "done" && (
                  <img
                    //className="bg-amber-700"
                    //className="opacity-0 animate-fadeIn"
                    src={check}
                    width={15}
                    height={15}
                  />
                )}
              </div>
              <span
                className={`font-normal text-lg transition-all duration-500 ease-in-out
                ${
                  n.status === "done"
                    ? "line-through text-[#9394A3] font-semibold"
                    : "text-[color:var(--color-text)]"
                }
                `}
              >
                {n.title.length > 36 ? n.title.slice(0, 36) + "..." : n.title}
              </span>
            </div>

            {/* <button
              className="bg-transparent"
              onClick={() => handleDelete(n.id)}
            > */}
            <img
              src={cancel}
              onClick={() => handleDelete(n.id)}
              alt="icon"
              width={10}
              height={10}
            />
            {/* </button> */}
          </div>
        ))}
      </div>
      <footer className="text-[#9394A3] text-xs flex flex-row  justify-between">
        <div>
          <span>{note.length} items left</span>
        </div>
        <div className=" flex gap-2  cursor-pointer">
          <span
            onClick={() => setFilter("all")}
            className={` hover:text-[color:var(--color-hover)] transition-all duration-600 ease-in-out ${
              filter === "all" ? "text-blue-500" : ""
            }`}
          >
            All
          </span>
          <span
            onClick={() => setFilter("active")}
            className={` hover:text-[color:var(--color-hover)] transition-all duration-600 ease-in-out ${
              filter === "active" ? "text-blue-500" : ""
            }`}
          >
            Active
          </span>
          <span
            onClick={() => setFilter("done")}
            className={` hover:text-[color:var(--color-hover)] transition-all duration-600 ease-in-out ${
              filter === "done" ? "text-blue-500" : ""
            }`}
          >
            Completed
          </span>
        </div>
        <span
          onClick={handleClearDone}
          className={` hover:text-[color:var(--color-hover)] transition-all duration-600 ease-in-out`}
        >
          Clear Completed
        </span>
      </footer>
    </div>
  );
}

export default NoteBoard;
