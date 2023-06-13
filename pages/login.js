import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-6/12 border-2 mx-auto mt-20">
      <h1 className="text-center text-3xl font-bold mt-5">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="w-9/12 mx-auto text-2xl"
      >
        <div className="my-5">
          <span>Email:</span>
          <input
            className="w-full h-10 rounded p-2"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <span>Password:</span>
          <input
            className="w-full h-10 rounded p-2"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn bg-slate-400 text-white inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 mb-5"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
