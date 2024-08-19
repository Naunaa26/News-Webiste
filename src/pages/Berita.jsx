import React, { useState } from "react";
import Header from "../components/Header";
import CardNews from "../components/CardNews";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDate from "../hooks/useDate";
import Loading from "../components/Loading";
import useBerita from "../hooks/useBerita";

const Berita = () => {
  const { berita, loading } = useBerita([]);
  const { dayname, date, month, year } = useDate();

  const [countBerita, setCountBerita] = useState(9);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const loadBerita = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountBerita((prev) => prev + 9);
      setLoadingBtn(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className="p-4 sm:p-6 lg:p-10">
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-4 sm:mb-5 capitalize">
            Berita {location.pathname.substring(1)} {dayname}, {date} {month}{" "}
            {year}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {berita.slice(0, countBerita).map((news, index) => (
              <CardNews key={index} news={news} index={index} />
            ))}
          </div>

          {loadingBtn ? (
            <h2 className="text-center font-medium text-lg sm:text-2xl mt-3">
              Loading...
            </h2>
          ) : (
            <button
              onClick={loadBerita}
              className="p-2 sm:p-3 mt-4 sm:mt-6 text-xs sm:text-sm mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white items-center justify-center mx-auto flex rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Lihat Berita Lainnya
            </button>
          )}
        </main>
      )}
    </>
  );
};

export default Berita;
