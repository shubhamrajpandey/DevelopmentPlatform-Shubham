import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const [form, inputForm] = useState({
    name: "",
    email: "",
    pass: "",
    conpass: ""
  })

  const handleForm = (e) => {
    const { name, value } = e.target;
    inputForm(prevs => ({
      ...prevs, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleForm}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleForm}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={form.pass}
            onChange={handleForm}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="conpass"
            placeholder="Confirm Password"
            value={form.conpass}
            onChange={handleForm}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition-colors"
          >
            SIGN UP
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink className="text-purple-600 hover:underline cursor-pointer" to= "/Login">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
