"use client";
import Axios from "@/axios/axios";
import { getTokenCookie } from "@/cookie";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["Nama", "Tipe", "Harga", "Gambar", "Action"];

const TABLE_ROWS = [
  {
    nama: "John Michael",
    type: "Rumah",
    harga: "862,561,331",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nama: "John Michael",
    type: "Rumah",
    harga: "862,561,331",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nama: "John Michael",
    type: "Rumah",
    harga: "862,561,331",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nama: "John Michael",
    type: "Rumah",
    harga: "862,561,331",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nama: "John Michael",
    type: "Rumah",
    harga: "862,561,331",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nama: "John Michael",
    type: "Rumah",
    harga: "862,561,331",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nama: "John Michael",
    type: "Rumah",
    harga: "862,561,331",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nama: "John Michael",
    type: "Rumah",
    harga: "862,561,331",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TableWithStripedColumns() {
  const [dataProperties, setDataProperties] = useState([]);

  const handlGetData = async () => {
    const token = getTokenCookie();
    try {
      const res = await Axios.get("/property", {
        headers: {
          Authorization: token,
        },
      });

      setDataProperties(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handlGetData();
  }, []);

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-fixed text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataProperties.map(({ id, nama, type, harga, thumbnail }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {nama}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {type}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {harga}
                  </Typography>
                </td>
                <td className={`${classes} relative  bg-blue-gray-50/50`}>
                  <Image
                    fill
                    style={{
                      aspectRatio: 4 / 3,
                    }}
                    className="max-w-[250px] object-contain"
                    src={thumbnail}
                    alt="gambar thumbnail"
                  />
                </td>
                <td className={`${classes}`}>
                  <Link
                    href={`/admin/detail/${id}`}
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
