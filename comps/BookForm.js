import { useContext, useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await addDoc(collection(db, "books"), {
        title: title,
        author: author,
        rating: rating,
        comment: comment,
        uid: user.uid,
      });
      setTitle("");
      setAuthor("");
      setComment("");
      setRating("");
      router.push("/");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="border-solid border-2 w-10/12 text-xl p-5">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 mx-auto text-2xl"
      >
        <h1 className="text-center text-2xl font-bold">New Book</h1>

        <div className="my-5">
          <span>New book title:</span>
          <input
            type="text"
            className="w-full h-10 rounded p-2"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div>
          <span>Book author:</span>
          <input
            type="text"
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="w-full h-10 rounded p-2"
          />
        </div>

        <div className="my-5">
          <span>Review comment:</span>
          <textarea
            type="text"
            required
            rows="5"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="w-full rounded p-2"
          ></textarea>
        </div>

        <div>
          <span>Rating:</span>
          <input
            type="range"
            required
            min="0"
            max="10"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            className="mb-5 p-1 w-full"
          />
        </div>

        <div className="text-center mt-5">
          <button
            className="btn bg-slate-400 text-white inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
