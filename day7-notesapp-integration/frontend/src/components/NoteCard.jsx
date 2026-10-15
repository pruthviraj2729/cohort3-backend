const NoteCard = ({ note }) => {
  return (
    <div className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-violet-500/10">

      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="line-clamp-2 text-lg font-semibold text-white">
          {note?.title}
        </h2>

        <button
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          ⋮
        </button>
      </div>

      <p className="mb-6 line-clamp-4 text-sm leading-6 text-slate-400">
        {note?.description}
      </p>

      <div className="flex items-center justify-between border-t border-slate-800 pt-4">
        <span className="text-xs text-slate-500">
          Note
        </span>

        <button
          type="button"
          className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
        >
          View →
        </button>
      </div>
    </div>
  );
};

export default NoteCard;

// const NoteCard = ({ note }) => {
//   return (
//     <div className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-violet-500/10">
//       {/* Top */}
//       <div className="mb-4 flex items-start justify-between gap-4">
//         <h2 className="line-clamp-2 text-lg font-semibold text-white">
//           {note?.title}
//         </h2>

//         {/* More button */}
//         <button
//           type="button"
//           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
//         >
//           ⋮
//         </button>
//       </div>

//       {/* Description */}
//       <p className="mb-6 line-clamp-4 text-sm leading-6 text-slate-400">
//         {note?.description}
//       </p>

//       {/* Bottom */}
//       <div className="flex items-center justify-between border-t border-slate-800 pt-4">
//         <span className="text-xs text-slate-500">
//           Note
//         </span>

//         <button
//           type="button"
//           className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
//         >
//           View →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NoteCard;