"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().min(3).required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^[A-Za-z0-9]{4,8}$/,
      "Password must be 4-8 characters long and contain only letters and numbers"
    )
    .required("Password is required"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  phone: yup
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const res = await axios.post(
        `http://localhost:3300/users/signUp`,
        values,
        {
          headers: {
            redirectLink: "http://localhost:3000/confirm/",
          },
        }
      );
      if (res) toast.success(res.data.msg || "Created");
    } catch (error) {
      toast.error(error?.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-4 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[75%]">
        <form
          className="flex flex-wrap justify-around"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-5/12">
            <label>Name</label>
            <input
              type="text"
              {...register("name")}
              className="border-b border-gray-400 outline-none my-5 w-full bg-transparent focus:border-b-2 focus:border-black"
            />
            <p className="text-pink-600">{errors.name?.message}</p>
          </div>

          <div className="w-5/12">
            <label>Email</label>
            <input className="mt-2 mb-3" type="email" {...register("email")} />
            <p className="text-pink-600">{errors.email?.message}</p>
          </div>

          <div className="w-5/12">
            <label>Password</label>
            <input
              className="mt-2 mb-3"
              type="password"
              {...register("password")}
            />
            <p className="text-pink-600">{errors.password?.message}</p>
          </div>

          <div className="w-5/12">
            <label>Confirm Password</label>
            <input
              className="mt-2 mb-3"
              type="password"
              {...register("rePassword")}
            />
            <p className="text-pink-600">{errors.rePassword?.message}</p>
          </div>

          <div className="w-full ps-10">
            <label>Phone</label>
            <input
              {...register("phone")}
              className="block w-5/12 border-b border-gray-400 outline-none mt-2 mb-3 bg-transparent focus:border-b-2 focus:border-black"
            />
            <p className="text-pink-600 w-5/12">{errors.phone?.message}</p>
          </div>

          <button
            type="submit"
            className="my-5 flex w-[50%] justify-center rounded-md bg-pink-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
