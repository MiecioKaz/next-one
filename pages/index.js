import BookList from "../comps/BookList";
import BookForm from "../comps/BookForm";
// import { useCollection } from "../hooks/useCollection";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export async function getStaticProps() {
  const firebaseData = {};
  const querySnapshot = await getDocs(collection(db, "books"));
  querySnapshot.forEach((doc) => {
    firebaseData[doc.id] = doc.data();
  });
  return {
    props: {
      firebaseData,
    },
  };
}

export default function Home({ firebaseData }) {
  // const { documents: books } = useCollection("books");

  return (
    <div>
      <div className="flex justify-center text-3xl my-5">
        <h1>Homepage</h1>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-4">
        {firebaseData && <BookList books={firebaseData} />}
        <BookForm />
      </div>
    </div>
  );
}
