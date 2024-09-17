"use client";
import Axios from "@/axios/axios";
import { saveTokenToCookie } from "@/cookie";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PageLogin() {
  const route = useRouter();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [erorrMessage, setErorrMessage] = useState("");

  const handleUserData = (e) => {
    setUserData({ ...userData, [e.target?.name]: e.target?.value });
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Axios.post("/login", userData);
      console.log(res);
      if (res.data?.token) {
        saveTokenToCookie(res.data?.token);
        route.push("/admin");
      }
    } catch (err) {
      console.log(err);
      if (err.status === 401) {
        setErorrMessage(err.response.data?.errors?.message[0]);
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-full flex justify-center pt-16">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your username and password.
        </Typography>
        <form
          onSubmit={loginHandle}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              onChange={handleUserData}
              name="username"
              placeholder="Inset your username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              size="lg"
              name="password"
              onChange={handleUserData}
              placeholder="Inset your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          {loading ? (
            <Button
              type="submit"
              className="mt-6 flex justify-center items-center"
              loading={loading}
              fullWidth
            >
              Loading..
            </Button>
          ) : (
            <Button type="submit" className="mt-6 " fullWidth>
              Login
            </Button>
          )}

          <Typography color="red" className="-mb-3 text-sm font-semibold mt-3">
            {erorrMessage}
          </Typography>
        </form>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Kembali ke halaman properti ?{" "}
          <Link href="/" className="font-medium text-gray-900 underline">
            Kembali
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
