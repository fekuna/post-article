"use client";

import Pagination from "./Pagination";


const Articles = () => {
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
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className="flex flex-row">
                <button className="btn btn-primary mr-1">Preview</button>
                <button className="btn btn-neutral mr-1">Edit</button>
                <button className="btn btn-error mr-1">Trash</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default Articles;
