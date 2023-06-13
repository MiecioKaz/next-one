import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useRouter } from "next/router";

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

const Book = ({ books }) => {
  const router = useRouter();
  const { slug } = router.query;

  const book = books.find((el) => el.id === slug);

  return (
    <div>
      <h1 className="text-center text-2xl mt-20">{`"${book.title}" details`}</h1>
      <div className="w-8/12 border-2 mx-auto mt-10 text-3xl p-5 bg-red-50">
        <div>
          <span className="text-green-400">Author:</span>
          <p className="font-bold">{book.author}</p>
        </div>
        <div className="my-5">
          <span className="text-green-400">Review:</span>
          <p className="font-bold">{book.comment}</p>
        </div>
        <div>
          <span className="text-green-400">Rating:</span>
          <p className="font-bold">{book.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
