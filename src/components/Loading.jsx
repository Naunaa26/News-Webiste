import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      (
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
      )<h2 className="mt-4 text-2xl font-medium">Tunggu Sebentar...</h2>
    </div>
  );
}
