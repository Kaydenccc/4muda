"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/legacy/image";
import React from "react";
import { DefaultGallery } from "../../components/Gallery";

const page = () => {
  return (
    <div className="px-4 w-full md:px-[10rem]">
      <div className="border-[6px] border-solid border-[#151D28] rounded-xl px-4 md:px-[5.25rem] py-8">
        <Typography
          variant="h1"
          className="text-center font-['Squada_One'] font-light mb-4 text-4xl md:text-5xl"
        >
          Tentang Kami
        </Typography>
        <Typography
          variant="paragraph"
          className="text-justify leading-[3] text-roboto-mono"
        >
          Selamat datang di JQueen Star Property, agensi properti terkemuka kami
          yang berbasis di Makassar sejak 2022. Di JQueen Star, kami
          menggabungkan keahlian lokal dengan pengalaman yang luas untuk
          menawarkan layanan yang tidak pernah terlampaui di pasar properti.
        </Typography>
        <Typography
          variant="paragraph"
          className="text-justify leading-[3] text-roboto-mono my-4 font-semibold"
        >
          Mengapa Memilih JQueen Star Property?
        </Typography>
        <ol className="list-decimal space-y-4 pl-8">
          <li>
            {" "}
            <Typography
              variant="paragraph"
              className="text-justify leading-[3] text-roboto-mono"
            >
              Akar Lokal Mendalam: Didirikan di Makassar, kami memiliki
              pemahaman yang mendalam tentang lanskap properti lokal, memastikan
              bahwa Anda mendapatkan wawasan dan strategi properti yang paling
              akurat dan strategis.
            </Typography>
          </li>
          <li>
            {" "}
            <Typography
              variant="paragraph"
              className="text-justify leading-[3] text-roboto-mono"
            >
              Kepemimpinan yang Berpengalaman: Direktur kami telah menjadi
              bagian dinamis dari industri properti sejak 2009, membawa lebih
              dari satu dekade keahlian dan rekam jejak sukses yang
              menginspirasi kepercayaan dan kepercayaan.
            </Typography>
          </li>
          <li>
            <Typography
              variant="paragraph"
              className="text-justify leading-[3] text-roboto-mono"
            >
              Pendekatan yang Berpusat pada Klien: Di JQueen Star, kami
              menetapkan kebutuhan dan tujuan Anda. Apakah Anda membeli rumah
              pertama Anda, mencari properti investasi yang menguntungkan, atau
              menjual rumah yang dicintai, kami menyesuaikan layanan kami untuk
              memenuhi kebutuhan unik Anda.
            </Typography>
          </li>
          <li>
            <Typography
              variant="paragraph"
              className="text-justify leading-[3] text-roboto-mono"
            >
              Layanan Komprehensif: Dari penjualan dan pembelian properti hingga
              sewa dan manajemen, kami menawarkan spektrum penuh layanan real
              estat untuk memastikan bahwa semua kebutuhan Anda dikelola secara
              profesional di bawah satu atap.
            </Typography>
          </li>
          <li>
            {" "}
            <Typography
              variant="paragraph"
              className="text-justify leading-[3] text-roboto-mono"
            >
              Komitmen Kami terhadap Kualitas Tinggi: Kami berkomitmen untuk
              memberikan Anda layanan yang luar biasa dan nasihat yang dapat
              dipercaya, membimbing Anda melalui setiap langkah perjalanan
              properti Anda. Tim kami berdedikasi untuk memastikan bahwa setiap
              transaksi secepat dan sukses mungkin, memanfaatkan pengetahuan dan
              sumber daya kami yang luas untuk menguntungkan Anda.
            </Typography>
          </li>
        </ol>

        <Typography
          variant="paragraph"
          className="text-justify leading-[3] text-roboto-mono mt-4 font-semibold"
        >
          Hubungi Kami Jelajahi bagaimana JQueen Star Property dapat membuat
          impian properti Anda menjadi realitas
        </Typography>
        <div className="flex justify-center items-center gap-8 mt-8">
          <div
            style={{ width: "130px" }}
            className="!w-10 md:!w-[130px] flex justify-center items-center flex-col"
          >
            <div
              style={{ width: "100%" }}
              className=" overflow-hidden flex  justify-center mb-4"
            >
              <Image
                src="/homeIcon.svg"
                alt="Home icon"
                height={130}
                width={130}
                style={{ width: "auto", height: "auto" }}
                className="rounded-full"
              />
            </div>
            <Typography
              variant="h4"
              className=" text-base md:text-2xl text-center font-['Squada_One']"
            >
              Rumah
            </Typography>
          </div>
          <div
            style={{ width: "130px" }}
            className="!w-10 md:!w-[130px] flex justify-center items-center flex-col"
          >
            <div
              style={{ width: "100%" }}
              className=" overflow-hidden flex  justify-center mb-4"
            >
              <Image
                src="/tanahIcon.svg"
                alt="Tanah Icon"
                height={130}
                width={130}
                style={{ width: "auto", height: "auto" }}
                className="rounded-full"
              />
            </div>
            <Typography
              variant="h4"
              className=" text-base md:text-2xl text-center font-['Squada_One']"
            >
              Tanah
            </Typography>
          </div>
          <div
            style={{ width: "130px" }}
            className="!w-10 md:!w-[130px] flex justify-center items-center flex-col"
          >
            <div
              style={{ width: "100%" }}
              className=" overflow-hidden flex  justify-center mb-4"
            >
              <Image
                src="/apartemenIcon.svg"
                alt="Apartemen Icon"
                height={130}
                width={130}
                style={{ width: "auto", height: "auto" }}
                className="rounded-full"
              />
            </div>
            <Typography
              variant="h4"
              className=" text-base md:text-2xl text-center font-['Squada_One']"
            >
              Apartemen
            </Typography>
          </div>
          <div
            style={{ width: "130px" }}
            className="!w-10 md:!w-[130px] flex justify-center items-center flex-col"
          >
            <div
              style={{ width: "100%" }}
              className=" overflow-hidden flex  justify-center mb-4"
            >
              <Image
                src="/rukoIcon.svg"
                alt="Ruko Icon"
                height={130}
                width={130}
                style={{ width: "auto", height: "auto" }}
                className="rounded-full"
              />
            </div>
            <Typography
              variant="h4"
              className=" text-base md:text-2xl text-center font-['Squada_One']"
            >
              Ruko
            </Typography>
          </div>
        </div>
      </div>
      <div className="px-0 pt-[5.25rem] w-full md:p-[5.25rem]">
        <Typography
          variant="h1"
          className="text-center font-['Squada_One'] font-light mb-4 text-4xl md:text-5xl"
        >
          Prestasi
        </Typography>
        <Typography
          variant="paragraph"
          className="text-justify leading-[3] text-roboto-mono pb-8"
        >
          Keberhasilan Jqueen Star Properti tidak hanya didukung oleh keahlian
          timnya, tetapi juga oleh jaringan yang luas dalam industri properti.
          Hal ini memungkinkan kami untuk mencapai target penjualan dengan
          efektif dan memberikan nilai tambah kepada klien. Dengan fokus pada
          profesionalisme, integritas, dan pelayanan pelanggan yang unggul,
          Jqueen Star Properti siap membantu Anda mencapai kesuksesan dalam
          membeli properti impian Anda. Jqueen Star Properti merupakan pilihan
          terbaik untuk membeli properti dengan aman dan nyaman.
        </Typography>
        <DefaultGallery />
      </div>
    </div>
  );
};

export default page;
