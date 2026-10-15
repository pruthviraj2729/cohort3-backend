// import React, { useEffect, useState } from 'react'
// import { getNotes } from '../api/notesApi'
// import NoteForm from '../components/Form'
// import NoteCard from '../components/NoteCard'

// const NotePage = () => {

//     const [notes, setNotes] = useState([])

//     const fetchNotes = async() => {
//         const data = await getNotes();
//         setNotes(data)
//     }

//     useEffect(() => {
//         fetchNotes()
//     },[])
//   return (
//     <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//         {
//             notes.map((val) => {
//                 return <NoteCard key={val.id} note={val}/>
//             })
//         }
//     </div>
//   )
// }

// export default NotePage

import React, { useEffect, useState } from "react";
import { getNotes } from "../api/notesApi";
import NoteForm from "../components/Form";
import NoteCard from "../components/NoteCard";

const NotePage = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      {/* Form */}
      <NoteForm onNoteCreated={fetchNotes} />

      {/* Notes */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
          />
        ))}
      </div>
    </div>
  );
};

export default NotePage;