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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Book Title</label>
          <input type="text" placeholder="Add a new book title" onChange={(e) => setNewBook(e.target.value)} value={newBook} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
