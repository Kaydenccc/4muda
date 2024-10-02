"use client";
import { ImgWithCaption } from "@/app/components/ImageThumbnail";
import Axios from "@/axios/axios";
import { getTokenCookie } from "@/cookie";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailPage = () => {
  const route = useRouter();
  const { id_property } = useParams();
  const [property, setProperty] = useState(null);
  console.log(id_property);

  const getProperty = async () => {
    try {
      const res = await Axios.get(`/property/${id_property}`, {
        headers: {
          Authorization: getTokenCookie(),
        },
      });
      console.log(res.data?.data);
      setProperty(res.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProperty();
  }, []);

  const deleteProperty = async () => {
    try {
      // Kirim request DELETE ke endpoint /property/{id}
      const response = await Axios.delete(`/property/${id_property}`, {
        headers: {
          Authorization: getTokenCookie(), // Masukkan token autentikasi
        },
      });

      // Jika berhasil
      console.log("Properti berhasil dihapus:", response.data);
      alert("Properti berhasil dihapus!");
      route.push("/admin");
    } catch (error) {
      // Jika gagal
      console.error("Error:", error.response?.data || error.message);
      alert("Terjadi kesalahan saat menghapus properti.");
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between">
        <Button
          onClick={() => route.back()}
          variant="outlined"
          className="flex items-center gap-2"
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
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Back to previous{" "}
        </Button>
        <div className="flex items-center gap-4">
          <Link
            href={`/admin/edit/${id_property}`}
            className="font-medium text-blue-500 hover:underline flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Edit
          </Link>
          <Button
            onClick={deleteProperty}
            variant="text"
            className="flex items-center gap-2 text-red-500"
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Delete{" "}
          </Button>
        </div>
      </div>
      {property && (
        <div>
          <div>
            <div
              className="flex items-center justify-between
            "
            >
              <Typography variant="h3" className="mt-8">
                {property?.nama}
              </Typography>
              <Typography variant="h6" className="mt-8">
                {property?.sertifikat}
              </Typography>
            </div>
            <div className="flex gap-4 max-h-fit border-y border-y-blue-gray-300 py-4">
              <ImgWithCaption
                src={property?.thumbnail}
                deskripsi={property?.deskripsi}
              />
              <div className="grid grid-cols-2 gap-2 max-h-full">
                {property?.images.map(({ file_path }, index) => (
                  <div key={index}>
                    <img
                      className="h-32 rounded-lg object-cover object-center"
                      src={file_path}
                      style={{
                        aspectRatio: 4 / 3,
                      }}
                      alt={file_path}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Typography variant="h5" className="my-2">
              Tipe
            </Typography>
            <Typography className="" variant="small">
              {property?.type}
            </Typography>
            <Typography variant="h5" className="my-2">
              Alamat
            </Typography>
            <Typography className="" variant="small">
              Jl. {property?.alamat}
            </Typography>
          </div>
          <div className="border-y border-y-blue-gray-300 my-4 pb-4">
            <Typography variant="h3" className="my-4">
              Rp. {property?.harga}
            </Typography>
            <div className="grid grid-cols-3">
              <Typography className="" variant="small">
                Garasi: {property?.garasi}
              </Typography>
              <Typography className="" variant="small">
                Gudang: {property?.gudang}
              </Typography>
              <Typography className="" variant="small">
                Jumlah dapur: {property?.jumlah_dapur}
              </Typography>
              <Typography className="" variant="small">
                Kamar mandi: {property?.jumlah_kamar_mandi}
              </Typography>
              <Typography className="" variant="small">
                Kamar tidur: {property?.jumlah_kamar_tidur}
              </Typography>
              <Typography className="" variant="small">
                Kolam renang: {property?.kolam_renang}
              </Typography>
              <Typography className="" variant="small">
                Listrik: {property?.listrik}
              </Typography>
              <Typography className="" variant="small">
                Luas bangunan: {property?.luas_bangunan}
              </Typography>
              <Typography className="" variant="small">
                Luas tanah: {property?.luas_tanah}
              </Typography>
              <Typography className="" variant="small">
                Tingkat: {property?.tingkat}
              </Typography>
            </div>
          </div>
          <div className="border-y border-y-blue-gray-300 my-4 pb-4">
            <iframe
              width="100%"
              height={340}
              frameBorder={0}
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen={true}
              scrolling="no"
              src={property?.vr}
            />
          </div>
          <div className="border-y border-y-blue-gray-300 my-4 pb-4">
            <iframe
              src={property?.lokasi}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
