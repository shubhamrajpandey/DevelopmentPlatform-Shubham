import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {

  const navigate = useNavigate(false);
  const {register,handleSubmit, formState:{errors}} = useForm();
 /*  const [form, inputForm] = useState({
    name: "",
    email: "",
    pass: "",
    conpass: ""
  })
 */
/*   const handleForm = (e) => {
    const { name, value } = e.target;
    inputForm(prevs => ({
      ...prevs, [name]: value
    }))
  } */

  const handle = (e) => {
    console.log(e);
    navigate("/login")
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit
          (handle)
        } className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
             {...register("name",{required:true})}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <span className="text-shadow-red-700">This Field is Required</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
             {...register("email",{required:true})}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
            {errors.email  && <span className="text-shadow-red-700">This Field is Required</span>}


          <input
            type="password"
            name="pass"
            placeholder="Password"
           {...register("password",{required:true})}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password  && <span className="text-shadow-red-700">This Field is Required</span>}


          <input
            type="password"
            name="conpass"
            placeholder="Confirm Password"
            {...register("conpass",{required:true})}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.conpass  && <span className="text-shadow-red-700">This Field is Required</span>}

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
