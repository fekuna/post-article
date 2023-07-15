enum Status {
    PUBLISH = "publish",
    DRAFT = "draft",
    TRASH = "trash"
}

export interface IArticle {
    id: number,
    title: string,
    content: string,
    category: string,
    status: Status,
    created_at: Date,
    updated_at: Date,
}