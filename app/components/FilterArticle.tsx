"use client";

const FilterArticle = () => {
  return (
    <div>
      <select className="select w-full max-w-xs">
        <option selected>
          All Posts
        </option>
        <option>Published</option>
        <option>Draft</option>
        <option>Trashed</option>
      </select>
    </div>
  );
};

export default FilterArticle;
