"use client";
import Axios from "@/axios/axios";
import { getTokenCookie } from "@/cookie";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  Radio,
} from "@material-tailwind/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditForm() {
  const route = useRouter();
  const [properti, setProperti] = useState(null);
  const { id_property } = useParams();
  const [refresh, setRefresh] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  // Fungsi untuk menangani perubahan input
  const handleInput = (e) => {
    setProperti({ ...properti, [e.target.name]: e.target.value });
  };

  // Fungsi untuk menangani perubahan file
  const handleFileInput = (e) => {
    const files = e.target.files;
    setProperti({ ...properti, [e.target.name]: files });
  };

  // Fungsi untuk menangani perubahan select
  const handleSelect = (value) => {
    setProperti({ ...properti, type: value });
  };
  const handleSelectIsBaru = (value) => {
    console.log(value.target.value);
    setProperti({ ...properti, baru: value.target.value === "true" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setLoading(true);

    // Membuat form-data untuk file upload
    const formData = new FormData();

    // Looping properti untuk memasukkan setiap field ke dalam formData
    for (const key in properti) {
      if (key === "images[]") {
        // Jika inputan file gambar
        for (let i = 0; i < properti[key].length; i++) {
          formData.append("images[]", properti[key][i]);
        }
      } else if (key === "newThumbnail") {
        formData.append("newThumbnail", properti[key][0]); // Ambil file pertama (karena thumbnail hanya satu file)
      } else {
        formData.append(key, properti[key]);
      }
    }
    console.log("formdata", formData);
    try {
      // Kirim data menggunakan axios
      const response = await Axios.post(
        "/property/" + id_property + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: getTokenCookie(),
          },
        }
      );

      // Jika berhasil
      console.log("Sukses:", response.data);
      route.back();
    } catch (error) {
      // Jika gagal
      console.error("Error:", error.response?.data || error.message);
      alert("Terjadi kesalahan saat mengirim data.");
    } finally {
      setLoading(false);
    }
  };

  const getProperty = async () => {
    try {
      const res = await Axios.get(`/property/${id_property}`, {
        headers: {
          Authorization: getTokenCookie(),
        },
      });
      //   console.log(res.data?.data);
      setProperti(res.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProperty();
  }, [refresh]);

  console.log(properti);

  const deletedImages = async (idImage) => {
    setLoadingImage(true);
    try {
      // Kirim data menggunakan axios
      const response = await Axios.delete("/property/image/" + idImage, {
        headers: {
          Authorization: getTokenCookie(),
        },
      });

      // Jika berhasil
      console.log("Sukses:", response.data);
      //   alert("Data berhasil dihapus!");
      setRefresh(!refresh);
    } catch (error) {
      // Jika gagal
      console.error("Error:", error.response?.data || error.message);
      alert("Terjadi kesalahan saat pengahapusan data.");
    } finally {
      setLoadingImage(false);
    }
  };
  return (
    <div>
      <Image
        src={"/Logo.png"}
        alt="logo"
        className="opacity-10"
        fill
        priority
      />
      <div className="container mx-auto flex justify-center">
        {properti ? (
          <Card className="mt-12" color="transparent" shadow={false}>
            <Button
              onClick={() => route.back()}
              variant="outlined"
              className="w-fit mb-4 flex items-center gap-2"
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
            <Typography
              variant="h4"
              color="blue-gray"
              className="text-[#D1AE6C]"
            >
              Form Edit Properti
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Masukan data yang diperlukan sesuai dengan inputan yang diminta.
            </Typography>
            <form className="mt-8 mb-2 w-full " onSubmit={handleSubmit}>
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Nama Properti
                </Typography>
                <Input
                  size="lg"
                  name="nama"
                  defaultValue={properti?.nama}
                  onChange={handleInput}
                  required
                  disabled={loading || loadingImage}
                  placeholder="Nama properti"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Select
                  variant="standard"
                  label="Tipe Properti"
                  value={properti?.type}
                  disabled={loading || loadingImage}
                  required
                  onChange={(value) => handleSelect(value)}
                >
                  <Option value="Rumah">Rumah</Option>
                  <Option value="Ruko">Ruko</Option>
                  <Option value="Tanah">Tanah</Option>
                  <Option value="Apartemen">Apartemen</Option>
                </Select>
                <input
                  hidden
                  //   label="oldThumbnail"
                  name="thumbnail"
                  defaultValue={properti?.thumbnail}
                  onChange={handleFileInput}
                  placeholder="Standard"
                  type="text"
                />
                <Image
                  width={300}
                  height={100}
                  alt="thumbnail"
                  priority
                  src={properti?.thumbnail}
                  className="object-cover"
                  style={{
                    aspectRatio: 4 / 3,
                    height: "auto",
                  }}
                />

                <Input
                  variant="standard"
                  label="Edit Thumbnail"
                  name="newThumbnail"
                  onChange={handleFileInput}
                  placeholder="Standard"
                  type="file"
                />
                <div className="flex gap-10">
                  <Radio
                    name="baru"
                    checked={properti?.baru}
                    onChange={handleSelectIsBaru}
                    value={true}
                    label="Baru"
                    disabled={loading || loadingImage}
                    ripple={true}
                  />
                  <Radio
                    name="baru"
                    onChange={handleSelectIsBaru}
                    checked={!properti?.baru}
                    value={false}
                    label="Bekas"
                    disabled={loading || loadingImage}
                    ripple={false}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {loadingImage ? (
                    <div>Deleting image..</div>
                  ) : (
                    properti?.images.length >= 0 &&
                    properti?.images.map(({ id, properti_id, file_path }) => (
                      <Card className="relative" key={id}>
                        <button
                          onClick={() => deletedImages(id)}
                          className="bg-white rounded-full absolute -top-2 -right-2 hover:scale-125"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5  text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>

                        <Image
                          key={id}
                          width={200}
                          height={100}
                          alt="thumbnail"
                          src={file_path}
                          className="object-cover"
                          style={{
                            aspectRatio: 4 / 3,
                            height: "auto",
                          }}
                        />
                      </Card>
                    ))
                  )}
                </div>
                <Input
                  multiple
                  variant="standard"
                  label="Tambah Gambar Properti"
                  onChange={handleFileInput}
                  name="images[]"
                  placeholder="Standard"
                  disabled={loading || loadingImage}
                  type="file"
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Harga
                </Typography>
                <Input
                  size="lg"
                  required
                  onChange={handleInput}
                  defaultValue={properti?.harga}
                  disabled={loading || loadingImage}
                  placeholder="Gunakan koma (,)(ex: 100,190,000)"
                  name="harga"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Sertifikat
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  name="sertifikat"
                  onChange={handleInput}
                  defaultValue={properti?.sertifikat}
                  disabled={loading || loadingImage}
                  placeholder="Masukan jenis sertifikat"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Alamat
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  defaultValue={properti?.alamat}
                  name="alamat"
                  onChange={handleInput}
                  disabled={loading || loadingImage}
                  placeholder="Masukan alamat properti"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Jumlah kamar tidur
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  defaultValue={properti?.jumlah_kamar_tidur}
                  name="jumlah_kamar_tidur"
                  onChange={handleInput}
                  disabled={loading || loadingImage}
                  placeholder="Masukan jumlah kamar tidur"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Jumlah kamar mandi
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  name="jumlah_kamar_mandi"
                  defaultValue={properti?.jumlah_kamar_mandi}
                  disabled={loading || loadingImage}
                  onChange={handleInput}
                  placeholder="Masukan jumlah kamar mandi"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Jumlah dapur
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  defaultValue={properti?.jumlah_dapur}
                  name="jumlah_dapur"
                  disabled={loading || loadingImage}
                  onChange={handleInput}
                  placeholder="Masukan jumlah dapur"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Jumlah kolam renang
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  name="kolam_renang"
                  defaultValue={properti?.kolam_renang}
                  onChange={handleInput}
                  disabled={loading || loadingImage}
                  placeholder="Masukan jumlah kolam renang"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Gudang
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  onChange={handleInput}
                  defaultValue={properti?.gudang}
                  name="gudang"
                  disabled={loading || loadingImage}
                  placeholder="Masukan keterangan gudang"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Garasi
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  name="garasi"
                  onChange={handleInput}
                  defaultValue={properti?.garasi}
                  disabled={loading || loadingImage}
                  placeholder="Masukan keterangan garasi"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Tingkat
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  name="tingkat"
                  onChange={handleInput}
                  defaultValue={properti?.tingkat}
                  disabled={loading || loadingImage}
                  placeholder="Masukan berapa lantai"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Listrik
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  name="listrik"
                  onChange={handleInput}
                  disabled={loading || loadingImage}
                  defaultValue={properti?.listrik}
                  placeholder="Masukan berapa watt listrik yang digunakan"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Luas tanah
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  defaultValue={properti?.luas_tanah}
                  name="luas_tanah"
                  onChange={handleInput}
                  disabled={loading || loadingImage}
                  placeholder="Masukan luas tanah"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Luas bangunan
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  name="luas_bangunan"
                  onChange={handleInput}
                  defaultValue={properti?.luas_bangunan}
                  placeholder="Masukan luas bangunan"
                  disabled={loading || loadingImage}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Deskripsi
                </Typography>
                <Input
                  type="text"
                  size="lg"
                  defaultValue={properti?.deskripsi}
                  name="deskripsi"
                  onChange={handleInput}
                  disabled={loading || loadingImage}
                  placeholder="Masukan deskripsi"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Lokasi
                </Typography>
                <Input
                  required
                  type="text"
                  size="lg"
                  name="lokasi"
                  defaultValue={properti?.lokasi}
                  onChange={handleInput}
                  disabled={loading || loadingImage}
                  placeholder="Masukan url lokasi properti"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Code vr
                </Typography>
                <Input
                  required
                  type="text"
                  size="lg"
                  name="vr"
                  onChange={handleInput}
                  defaultValue={properti?.vr}
                  disabled={loading || loadingImage}
                  placeholder="Masukan url vr"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Button
                type="submit"
                className="mt-6"
                fullWidth
                disabled={loading || loadingImage}
              >
                {loading ? "Mengedit..." : "Edit"}
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Tekan tombol Edit untuk mengubah data!{" "}
                <a href="#" className="font-medium text-gray-900">
                  Hati-Hati
                </a>
              </Typography>
            </form>
          </Card>
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
}
