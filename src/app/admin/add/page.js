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
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function SimpleRegistrationForm() {
  const route = useRouter();
  const [properti, setProperti] = useState({
    baru: true,
  });

  // Menggunakan ref untuk mendapatkan referensi ke form
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
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
      } else if (key === "thumbnail") {
        formData.append("thumbnail", properti[key][0]); // Ambil file pertama (karena thumbnail hanya satu file)
      } else {
        formData.append(key, properti[key]);
      }
    }
    console.log("formdata", formData);
    try {
      // Kirim data menggunakan axios
      const response = await Axios.post("/property", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: getTokenCookie(),
        },
      });

      // Jika berhasil
      console.log("Sukses:", response.data);
      alert("Data berhasil dikirim!");
      // Reset form dan state setelah submit berhasil
      formRef.current.reset(); // Reset form HTML
      setProperti({ baru: true }); // Reset state
    } catch (error) {
      // Jika gagal
      console.error("Error:", error.response?.data || error.message);
      alert("Terjadi kesalahan saat mengirim data.");
    } finally {
      setLoading(false);
    }
  };

  console.log(properti);
  return (
    <div className="container mx-auto flex justify-center">
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
        <Typography variant="h4" color="blue-gray">
          Form Tambah Properti
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Masukan data yang diperlukan sesuai dengan inputan yang diminta.
        </Typography>
        <form
          className="mt-8 mb-2 w-full "
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nama Properti
            </Typography>
            <Input
              size="lg"
              name="nama"
              onChange={handleInput}
              required
              placeholder="Nama properti"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Select
              variant="standard"
              label="Tipe Properti"
              required
              onChange={(value) => handleSelect(value)}
            >
              <Option value="Rumah">Rumah</Option>
              <Option value="Ruko">Ruko</Option>
              <Option value="Tanah">Tanah</Option>
              <Option value="Apartemen">Apartemen</Option>
            </Select>
            <Input
              variant="standard"
              label="Thumbnail"
              name="thumbnail"
              onChange={handleFileInput}
              placeholder="Standard"
              type="file"
            />
            <div className="flex gap-10">
              <Radio
                name="baru"
                defaultChecked
                onChange={handleSelectIsBaru}
                value={true}
                label="Baru"
                ripple={true}
              />
              <Radio
                name="baru"
                onChange={handleSelectIsBaru}
                value={false}
                label="Bekas"
                ripple={false}
              />
            </div>
            <Input
              multiple
              variant="standard"
              label="Foto-Foto Properti"
              onChange={handleFileInput}
              name="images[]"
              required
              placeholder="Standard"
              type="file"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Harga
            </Typography>
            <Input
              size="lg"
              required
              onChange={handleInput}
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
              name="alamat"
              onChange={handleInput}
              placeholder="Masukan jenis sertifikat"
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
              name="jumlah_kamar_tidur"
              onChange={handleInput}
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
              name="jumlah_dapur"
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
              onChange={handleInput}
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
              name="gudang"
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
              name="luas_tanah"
              onChange={handleInput}
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
              placeholder="Masukan luas bangunan"
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
              name="deskripsi"
              onChange={handleInput}
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
              onChange={handleInput}
              placeholder="Masukan lokasi properti"
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
              placeholder="Masukan code vr"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth disabled={loading}>
            {loading ? "Mengirim..." : "Tambah"}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Tekan tombol tambah untuk menambah data!{" "}
            <a href="#" className="font-medium text-gray-900">
              Hati-Hati
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
