import axios from 'axios';


const newsAPI = axios.create({
    baseURL: "https://nc-news-project-5lfl.onrender.com/api"
})

export function getAllArticles() {
    return newsAPI.get('/articles')
}

export function getArticleByArticleId(id) {
    return newsAPI.get(`/articles/${id}`)
}

export function getCommentsByArticleId(id) {
    return newsAPI.get(`/articles/${id}/comments`)
}

export const votingOnArticles= async (id, value) => {
    return newsAPI.patch(`/articles/${id}`, {inc_votes: value})
}

export const postComment =  (id, data) => {
    return newsAPI.post(`/articles/${id}/comments`, data)

}