"use client";

import { getAllArticles } from "@/api";
import Pagination from "./Pagination";
import { useState } from "react";


const Articles = async ({  }: any) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const articles = await getAllArticles(page, size);

  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {articles.data.map((item: any) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td className="flex flex-row">
                    <button className="btn btn-primary mr-1">Preview</button>
                    <button className="btn btn-neutral mr-1">Edit</button>
                    <button className="btn btn-error mr-1">Trash</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default Articles;
