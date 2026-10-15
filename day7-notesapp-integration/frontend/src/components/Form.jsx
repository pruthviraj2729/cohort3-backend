import React from "react";
import { useForm } from "react-hook-form";
import { noteCreateApi } from "../api/notesApi";

const NoteForm = ({ onNoteCreated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handelNoteSubmit = async (data) => {
    try {
      console.log(data);

      await noteCreateApi(data);

      reset();

      onNoteCreated();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">

        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-violet-400">
            Create a new note
          </p>

          <h1 className="text-3xl font-bold text-white">
            Add Note
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Write down your thoughts and keep them organized.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handelNoteSubmit)}
          className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl"
        >
          {/* Title */}
          <div className="mb-5">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Title
            </label>

            <input
              {...register("title", {
                required: "Title is required",
              })}
              type="text"
              id="title"
              placeholder="Enter note title"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />

            {errors.title && (
              <p className="mt-1 text-sm text-red-400">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Description
            </label>

            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              id="description"
              placeholder="Write your note here..."
              rows="6"
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm leading-6 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />

            {errors.description && (
              <p className="mt-1 text-sm text-red-400">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 active:scale-[0.98]"
          >
            Create Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;

// import React from "react";
// import { useForm } from "react-hook-form"
// import { noteCreateApi } from "../api/notesApi";

// const NoteForm = () => {

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: {errors},
//     } = useForm(
//        { mode: 'onChange',}
//     )

//     const handelNoteSubmit =async (data) => {
//         console.log(data)

//         await noteCreateApi(data)
//     }
//   return (
//     <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-lg">
//         {/* Header */}
//         <div className="mb-6">
//           <p className="text-sm font-medium text-violet-400 mb-2">
//             Create a new note
//           </p>

//           <h1 className="text-3xl font-bold text-white">
//             Add Note
//           </h1>

//           <p className="mt-2 text-sm text-slate-400">
//             Write down your thoughts and keep them organized.
//           </p>
//         </div>

//         {/* Form Card */}
//         <form onSubmit={handleSubmit(handelNoteSubmit)} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl">
//           {/* Title */}
//           <div className="mb-5">
//             <label
//               htmlFor="title"
//               className="mb-2 block text-sm font-medium text-slate-200"
//             >
//               Title
//             </label>

//             <input
//             {...register('title',
//                     {
//                         required: true,
//                     }
//                 )
//             }
//               type="text"
//               id="title"
//             //   value={(e) => e.target.value}
//             // onChange={(e) => e.target.value}
//               placeholder="Enter note title"
//               className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
//             />
//           </div>

//           {/* Description */}
//           <div className="mb-6">
//             <label
//               htmlFor="description"
//               className="mb-2 block text-sm font-medium text-slate-200"
//             >
//               Description
//             </label>

//             <textarea
//               {...register('description', {
//                 required: true,
//                 minLength: 10,
//               })}
//               id="description"
//               placeholder="Write your note here..."
//               rows="6"
//               className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm leading-6 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 active:scale-[0.98]"
//           >
//             Create Note
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NoteForm;