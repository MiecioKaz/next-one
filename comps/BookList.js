import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    await deleteDoc(doc(db, "books", id));
  };

  return (
    <div className="border-solid border-2 w-9/12 p-5">
      <h2 className="text-2xl font-bold ml-5">Book title</h2>

      <ol className="list-decimal list-inside">
        {books.map((book) => (
          <li className=" text-xl hover:text-red-600 m-5" key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ol>
    </div>
  );
}
