import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function BookList({ books }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  console.log(books);

  const handleClick = async (id) => {
    await deleteDoc(doc(db, "books", id));
    router.push("/");
  };

  return (
    <div className="border-solid border-2 w-10/12 p-5">
      <h1 className="text-2xl font-bold ml-5">Book title</h1>

      {user && (
        <ol className="list-decimal list-inside">
          {books
            .filter((el) => el.uid === user.uid)
            .map((book) => (
              <li
                className="flex flex-row justify-between text-3xl m-5 border-b-2"
                key={book.id}
              >
                <div>
                  <Link
                    href={`/books/${book.id}`}
                    className="hover:text-cyan-600"
                  >
                    {book.title}
                  </Link>
                </div>
                <div className="inline-flex items-center">
                  <Image
                    onClick={() => handleClick(book.id)}
                    className="hover:skew-x-12 h-2/3 max-h-5"
                    src="/images/delete-icon.png"
                    width={20}
                    height={20}
                  />
                  <span className="text-xs">Delete</span>
                </div>
              </li>
            ))}
        </ol>
      )}
    </div>
  );
}
