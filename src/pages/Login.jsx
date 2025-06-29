import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const { register, handleSubmit, formState: { errors } } = useForm();


  const handle = async (data) => {
    try {
      const response = await axios.post(`api/auth/login`, data);   
      localStorage.setItem("token", response.data.data.token);
      navigate("/home");
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit(handle)} className="space-y-4">
          {errors.email && <span className="text-red-700">This field is Required</span>}
          <input
            name="email"
            {...register("email", { required: true })}
            type="text"
            placeholder="Email"
            className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email && "border-red-500 focus:ring-red-400 text-red-800"}`}
          />

          {errors.password && <span className="text-red-700">This field is Required</span>}
          <input
            name="password"
            {...register("password", { required: true })}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password && "border-red-500 focus:ring-red-400 text-red-800"}`}
          />

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => setShowPassword((prev) => !prev)}
              />
              Show Password
            </label>
            <NavLink to="/forget" className="text-purple-600 hover:underline">
              Forgot Password?
            </NavLink>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition-colors"
          >
            LOGIN
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <NavLink
              to="/signup"
              className="text-purple-600 hover:underline cursor-pointer"
            >
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
