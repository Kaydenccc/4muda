"use client";
import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CardProducDetail from "../../../components/CardProducDetail";
import Map from "../../../components/Map";
import { useParams } from "next/navigation";
import Axios from "@/axios/axios";

const DetailPage = () => {
  const { id } = useParams();
  const [thumbnail, setThumbnail] = useState(null);
  const [properti, setProperti] = useState(null);

  const getProperty = async () => {
    try {
      const res = await Axios.get(`/property/${id}`);
      //   console.log(res.data?.data);
      setProperti(res.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProperty();
  }, []);

  console.log(properti);

  return (
    <section className="p-4 md:px-[6.5rem] font-['Squada_One']">
      <div className="mb-2 flex justify-between items-center">
        <Button
          variant="text"
          className="flex gap-4 items-center py-2 px-4 sm:py-3 sm:px-6"
        >
          <div style={{ width: "12px" }} className="sm:!w-[12px] !w-[8px]">
            <Image
              src="/iconKembali.svg"
              alt="chevron"
              height={20}
              width={20}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <Link
            href="/"
            className="font-['Squada_One'] text-[#D1AE6C] capitalize text-base"
          >
            Kembali Ke Properti
          </Link>
        </Button>
        <span className="flex items-center gap-2">
          <span className="text-[#D1AE6C]">
            {properti?.baru ? "Baru" : "Bekas"}
          </span>
          <div style={{ width: "12px" }}>
            <Image
              src="/official.svg"
              alt="official"
              height={20}
              width={20}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <Typography
            variant="lead"
            className="font-['Squada_One'] sm:text-xl text-sm"
          >
            {properti?.sertifikat}
          </Typography>
        </span>
      </div>
      <div>
        <div className="w-full px-[1.5]">
          <div className="flex flex-col sm:flex-row sm:h-[30.438rem] md:h-[35.438rem] gap-4 md:gap-8 ">
            <div className="flex-1 h-full">
              <Card className="h-full">
                <div
                  style={{
                    width: "calc(100%-30.438rem)",
                    height: "100%",
                    aspectRatio: 4 / 3,
                  }}
                  className="rounded-xl overflow-hidden !relative"
                >
                  <Image
                    src={thumbnail ? thumbnail : properti?.thumbnail}
                    style={{
                      aspectRatio: 4 / 3,
                    }}
                    layout="fill"
                    alt="thumbnail"
                    className="object-cover !w-full !relative"
                  />
                </div>
              </Card>
            </div>
            <div className="sm:w-[10.438rem] md:w-[18.438rem] overflow-x-auto sm:overflow-y-auto no-scrollbar h-[9.5rem] sm:h-full flex flex-row sm:flex-col gap-4 md:gap-8 pb-2 sm:pr-2">
              {properti?.images.length > 0 &&
                properti?.images.map(({ id, file_path }) => (
                  <Card className="shadow-md" key={id}>
                    <CardProducDetail
                      src={file_path}
                      alt={properti?.nama}
                      setThumbnail={setThumbnail}
                    />
                  </Card>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          {properti?.vr && (
            <iframe
              width="100%"
              height={340}
              frameBorder={0}
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen={true}
              scrolling="no"
              src={properti?.vr}
            />
          )}
        </div>
        <div className="py-8">
          <div className="flex sm:gap-0 gap-4 justify-between items-center">
            <Typography
              variant="h2"
              className="font-['Squada_One'] text-[#D1AE6C] text-xl md:text-4xl sm:text-3xl"
            >
              {properti?.nama}
            </Typography>
            <Chip
              value={`IDR ${properti?.harga}`}
              size="lg"
              className="w-fit bg-[#D1AE6C] text-base sm:text-xl md:text-3xl font-['Squada_One'] font-normal"
            />
          </div>
          <span className="flex items-center my-4">
            <Map />
            <Typography
              variant="h4"
              className="text-roboto ml-2 text-base md:text-2xl sm:text-xl"
            >
              {properti?.alamat}
            </Typography>
          </span>
          <div className="text-roboto flex md:flex-row flex-col gap-4 md:gap-8">
            <div className="bg-[#151D28] rounded-lg p-4">
              <Typography
                variant="lead"
                className="text-roboto text-base md:text-xl ml-2 mb-4 text-white  font-medium"
              >
                Spesifikasi bangunan:
              </Typography>
              <div className="ml-4 flex sm:flex-row flex-col-reverse justify-between gap-4 sm:gap-0 md:justify-start md:gap-32">
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="lead"
                    className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]"
                  >
                    {properti?.jumlah_kamar_mandi} Kamar mandi
                  </Typography>
                  <Typography
                    variant="lead"
                    className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]"
                  >
                    {properti?.jumlah_kamar_tidur} Kamar tidur
                  </Typography>
                  <Typography
                    variant="lead"
                    className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]"
                  >
                    {properti?.jumlah_dapur} Dapur
                  </Typography>

                  <Typography
                    variant="lead"
                    className="text-roboto text-base md:text-xl ml-2 text-white/80 bg-[#151D28]"
                  >
                    {properti?.tingkat} Lantai
                  </Typography>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="flex items-center gap-4">
                    <div style={{ width: "30px" }}>
                      <Image
                        src="/listrik.svg"
                        alt="listrik"
                        height={20}
                        width={20}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <Typography
                      variant="lead"
                      className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]"
                    >
                      {properti?.listrik}
                    </Typography>
                  </span>
                  <span className="flex items-center gap-4">
                    <div style={{ width: "30px" }}>
                      <Image
                        src="/panjang.svg"
                        alt="panjang"
                        height={20}
                        width={20}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <Typography
                      variant="lead"
                      className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]"
                    >
                      {properti?.luas_tanah}
                    </Typography>
                  </span>
                  <span className="flex items-center gap-4">
                    <div style={{ width: "30px" }}>
                      <Image
                        src="/luas.svg"
                        alt="luas"
                        height={20}
                        width={20}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <Typography
                      variant="lead"
                      className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]"
                    >
                      {properti?.luas_bangunan}
                    </Typography>
                  </span>
                  <span className="flex items-center gap-4">
                    <div style={{ width: "30px" }}>
                      <Image
                        src="/lantai.svg"
                        alt="lantai"
                        height={20}
                        width={20}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <Typography
                      variant="lead"
                      className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]"
                    >
                      {properti?.kolam_renang} Kolam renang
                    </Typography>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#151D28] rounded-lg p-4 flex-1">
              <Typography
                variant="lead"
                className="text-roboto text-base md:text-xl ml-2 mb-4 text-white bg-[#151D28] font-medium"
              >
                Detail
              </Typography>
              <div className="ml-4 flex gap-32">
                <div className="flex flex-col gap-4">
                  <span className="flex items-center gap-4">
                    <div style={{ width: "30px" }}>
                      <Image
                        src="/garasi.svg"
                        alt="garasi"
                        height={20}
                        width={20}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <Typography
                      variant="lead"
                      className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]"
                    >
                      {properti?.garasi}
                    </Typography>
                  </span>

                  <span className="flex items-center gap-4">
                    <div style={{ width: "30px" }}>
                      <Image
                        src="/kolam.svg"
                        alt="kolam"
                        height={20}
                        width={20}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <Typography
                      variant="lead"
                      className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]"
                    >
                      {properti?.kolam_renang}
                    </Typography>
                  </span>
                  <span className="flex items-center gap-4">
                    <div style={{ width: "30px" }}>
                      <Image
                        src="/gudang.svg"
                        alt="gedung"
                        height={20}
                        width={20}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <Typography
                      variant="lead"
                      className="text-roboto text-base md:text-xl text-white/80 bg-[#151D28]"
                    >
                      {properti?.gudang}
                    </Typography>
                  </span>
                  <span className="flex items-center gap-4">
                    <Typography
                      variant="lead"
                      className="text-roboto text-sm text-white/80 bg-[#151D28]"
                    >
                      {properti?.deskripsi}
                    </Typography>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          {properti?.lokasi && (
            <iframe
              src={properti?.lokasi}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
