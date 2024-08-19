import React from "react";

const useDate = () => {
  const datenow = new Date();

  const days = ["ahad", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
  const months = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const dayname = days[datenow.getDay()];
  const date = datenow.getDate();
  const month = months[datenow.getMonth()];
  const year = datenow.getFullYear();

  return { dayname, date, month, year };
};

export default useDate;
