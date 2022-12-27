import BookList from "../comps/BookList";
import BookForm from "../comps/BookForm";
import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const { documents: books } = useCollection("books");

  return (
    <div>
      <h1>Homepage</h1>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
