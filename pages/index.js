import BookList from "../comps/BookList";
import BookForm from "../comps/BookForm";
import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const { documents: books } = useCollection("books");

  return (
    <div>
      <div className="flex justify-center text-3xl my-5">
        <h1>Homepage</h1>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-4">
        {books && <BookList books={books} />}
        <BookForm />
      </div>
    </div>
  );
}
