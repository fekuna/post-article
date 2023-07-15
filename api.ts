import { IArticle } from "./types/articles";

const baseUrl = "http://localhost:5000";

export const getAllArticles = async (page: number, size: number): Promise<any> => {
    const res = await fetch(`${baseUrl}/article?page=${page}&size=${size}`)
    const articles = await res.json(); 


    return articles
}