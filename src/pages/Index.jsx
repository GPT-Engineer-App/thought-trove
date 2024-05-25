import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, noteText]);
      setNoteText("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="min-h-screen bg-gray-500 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Note Taking App</h1>
        <div className="flex mb-4">
          <input type="text" className="flex-grow p-2 border border-gray-300 rounded-l-md" placeholder="Enter your note here..." value={noteText} onChange={(e) => setNoteText(e.target.value)} />
          <button className="bg-blue-500 text-white p-2 rounded-r-md" onClick={addNote}>
            <FaPlus />
          </button>
        </div>
        <div className="space-y-4">
          {notes.map((note, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-white shadow-md rounded-md">
              <span>{note}</span>
              <button className="text-red-500" onClick={() => deleteNote(index)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
