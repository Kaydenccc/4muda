"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/legacy/image";
import React from "react";

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
          4Muda agen properti yang telah beroperasi selama satu tahun, adalah
          mitra terpercaya untuk kebutuhan pembelian properti Anda. Dengan
          dedikasi tinggi dan pengalaman yang solid, 4Muda memahami betul pasar
          properti lokal dan tren terkini. 4Muda tidak hanya menjual properti,
          tetapi juga menciptakan pengalaman penjualan yang mulus dan transparan
          bagi klien mereka. Dengan pengetahuan yang mendalam tentang nilai
          properti dan kemampuan untuk menyajikan informasi dengan jelas, 4Muda
          memastikan bahwa proses penjualan rumah Anda berjalan dengan lancar.
          Sebagai agen properti terpercaya kami menyediakan 4 jenis properti
          yang bisa kamu dapat dengan harga terjangkau.
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
          Apa Kata Mereka
        </Typography>
        <Typography
          variant="paragraph"
          className="text-justify leading-[3] text-roboto-mono"
        >
          Keberhasilan 4Muda selama setahun beroperasi tidak hanya didukung oleh
          keahlian timnya, tetapi juga oleh jaringan yang luas dalam industri
          properti. Hal ini memungkinkan kami untuk mencapai target penjualan
          dengan efektif dan memberikan nilai tambah kepada klien. Dengan fokus
          pada profesionalisme, integritas, dan pelayanan pelanggan yang unggul,
          4Muda siap membantu Anda mencapai kesuksesan dalam membeli properti
          impian Anda. Dengan satu tahun pengalaman yang sukses, 4Muda merupakan
          pilihan terbaik untuk membeli properti dengan aman dan nyaman.
        </Typography>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-8 justify-center items-center">
          <Card className="bg-[#151D28] w-full md:max-w-[22.25rem] flex flex-col justify-center items-center  shadow-none p-4 py-8">
            <div
              style={{ width: "100%" }}
              className=" !w-40 md:!w-full overflow-hidden flex  justify-center"
            >
              <Image
                src="/kontakimage.jpg"
                alt="Image contact"
                height={160}
                width={160}
                style={{ width: "auto", height: "auto" }}
                className="rounded-full"
              />
            </div>
            <CardBody className="p-2 md:p-6">
              <Typography
                variant="lead"
                className="font-['Squada_One'] mb-4 text-center text-white"
              >
                Raffi Ahmad
              </Typography>
              <Typography
                variant="paragraph"
                className="!text-roboto-mono text-justify text-white"
              >
                Saya sangat bersyukur memilih 4Muda sebagai mitra dalam
                pembelian properti saya. Pelayanan mereka luar biasa,
                profesionalisme tinggi, dan mereka benar-benar memahami
                kebutuhan saya. Pembelian properti tidak pernah semudah ini!
              </Typography>
            </CardBody>
          </Card>
          <Card className="bg-[#151D28] max-w-[22.25rem] flex flex-col justify-center items-center  shadow-none p-4 py-8">
            <div
              style={{ width: "100%" }}
              className=" !w-40 md:!w-full overflow-hidden flex  justify-center"
            >
              <Image
                src="/kontakimage.jpg"
                alt="Image contact"
                height={160}
                width={160}
                style={{ width: "auto", height: "auto" }}
                className="rounded-full"
              />
            </div>
            <CardBody className="p-2 md:p-6">
              <Typography
                variant="lead"
                className="font-['Squada_One'] mb-4 text-center text-white"
              >
                Horas
              </Typography>
              <Typography
                variant="paragraph"
                className="!text-roboto-mono text-justify text-white"
              >
                4Muda bukan hanya agen properti biasa. Mereka adalah mitra
                terpercaya yang memberikan panduan dan saran berharga sepanjang
                perjalanan pembelian properti saya. Prosesnya lancar, dan
                hasilnya melebihi ekspektasi saya.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
