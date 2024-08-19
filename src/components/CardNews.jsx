import React from "react";
import ModalComponents from "./ModalComponents";

const CardNews = ({ news, index }) => {
  const formattedDate = news.isoDate.slice(0, 10);
  return (
    <div key={index} className="shadow-2xl rounded-lg p-1">
      <img
        src={news.image.large}
        alt="news"
        className="w-full rounded-lg max-w-96 flex mx-auto items-center "
      />
      <p className="text-gray-400 pl-3 text-sm mt-2">{formattedDate}</p>
      <h2 className="font-medium text-xl p-3 mt-[-8px] cursor-pointer hover:text-yellow-600">
        {news.title}
      </h2>
      <p className="p-3 mt-[-1rem]">{news.contentSnippet}</p>

      <ModalComponents news={news} />
    </div>
  );
};

export default CardNews;
