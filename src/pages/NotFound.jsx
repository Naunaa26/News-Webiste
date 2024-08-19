import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img
          src="https://assets-a1.kompasiana.com/items/album/2021/08/14/images-6117992706310e0d285e54d2.jpeg"
          alt="Halaman Tidak Ditemukan"
          className="w-48 h-48 mb-8 mt-[-2rem]"
        />
        <h1 className="text-4xl font-bold mb-4 text-black">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-600 mb-8">
          Mohon periksa kembali alamat URL atau gunakan kotak pencarian di
          bawah.
        </p>
      </div>
      <Link to="/" className="py-2 px-4 bg-blue-500 text-white rounded">
        Kembali
      </Link>
    </>
  );
};

export default NotFound;
