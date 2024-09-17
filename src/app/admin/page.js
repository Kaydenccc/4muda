"use client";
import React from "react";
import { TableWithStripedColumns } from "../components/Tabel";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { getTokenCookie } from "@/cookie";
import Axios from "@/axios/axios";

const HalamanAdmin = () => {
  const route = useRouter();

  const logoutHandle = async () => {
    try {
      // Kirim data menggunakan axios
      const response = await Axios.delete("/logout", {
        headers: {
          Authorization: getTokenCookie(),
        },
      });

      // Jika berhasil
      route.push("/login");
    } catch (error) {
      // Jika gagal
      console.error("Error:", error.response?.data || error.message);
      alert("Terjadi kesalahan.");
    }
  };
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h2" className="">
          Halaman Daftar Properti
        </Typography>
        <span className="flex items-center">
          <Button
            onClick={() => route.push("/admin/add")}
            className="ml-4 flex items-center gap-2"
          >
            Tambah{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Button>
          <Button
            onClick={logoutHandle}
            variant="outlined"
            className="mx-4 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>{" "}
            Logout
          </Button>
        </span>
      </div>
      <TableWithStripedColumns />
    </div>
  );
};

export default HalamanAdmin;
