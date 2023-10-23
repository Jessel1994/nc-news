import axios from 'axios';


const newsAPI = axios.create({
    baseURL: "https://nc-news-project-5lfl.onrender.com/api"
})

export function getAllArticles() {
    return newsAPI.get('/articles')
}