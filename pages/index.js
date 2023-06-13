import BookList from "../comps/BookList";
import BookForm from "../comps/BookForm";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export async function getServerSideProps() {
  let ref = collection(db, "books");
  let results = [];

  const querySnapshot = await getDocs(ref);
  querySnapshot.forEach((doc) => {
    results.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: { books: results },
  };
}

export default function Home({ books }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-center text-3xl my-10">
        {user ? (
          <h1 className="text-rose-700">{`${user.displayName}'s Reading List`}</h1>
        ) : (
          <h2 className="bg-red-600 text-white">
            You have to log in first in order to see your reading list
          </h2>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4">
        {books && <BookList books={books} />}
        <BookForm />
      </div>
    </>
  );
}
