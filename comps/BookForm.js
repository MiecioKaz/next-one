import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function BookForm() {
  const [newBook, setNewBook] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "books"), {
      title: newBook,
    });

    setNewBook("");
  };
  // prettier-ignore
  return (
    <div className="border-solid border-2 w-9/12 text-xl text-center p-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">New Book Title</h2>
        
        <input 
          type="text" 
          placeholder="Add a new book title" 
          onChange={(e) => setNewBook(e.target.value)} 
          value={newBook}
          className="my-5 p-3 w-11/12" 
          />

        <div className="mt-5">
          <button className="btn 
                            bg-slate-400 
                            text-white 
                            inline-block 
                            hover:shadow-inner 
                            transform 
                            hover:scale-125 
                            hover:bg-opacity-50 
                            transition ease-out 
                            duration-300" 
                  type="submit">
                    Submit
          </button>
        </div>
      </form>
    </div>
  );
}
