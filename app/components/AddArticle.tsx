"use client"

import { AiOutlinePlus } from "react-icons/ai";

const AddArticle = () => {
    return (
        <div>
            <button className="btn btn-primary">
                Add new article <AiOutlinePlus className="ml-2" size={18} />
            </button>
        </div>
    )
}

export default AddArticle