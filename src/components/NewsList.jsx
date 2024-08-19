import React from "react";
import CardNews from "./CardNews";

const NewsList = ({ newsItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {newsItems.map((news, index) => (
        <CardNews key={index} news={news} index={index} />
      ))}
    </div>
  );
};

export default NewsList;
