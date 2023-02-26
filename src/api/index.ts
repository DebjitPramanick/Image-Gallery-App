import axios from 'axios'

const API_URL = "https://api.unsplash.com"
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY

const api = axios.create({
    baseURL: API_URL,
})

export const getLatestImages = async (page: number = 1) => {
    try {
        const res = await api.get(`/photos?page=${page}&per_page=15&client_id=${ACCESS_KEY}`);
        const photos = res.data;
        return photos;
        
    } catch (err: any) {
        throw new Error(err)
    } 
}

export const getImageData = async (imageId: any) => {
    try {
        const res = await api.get(`/photos/${imageId}?client_id=${ACCESS_KEY}`);
        const photo = res.data;
        return photo;
        
    } catch (err: any) {
        throw new Error(err)
    } 
}

export const searchImages = async (query: string, page: number = 1) => {
    try {
        const res = await api.get(`/search/photos?page=${page}&query=${query}&per_page=15&client_id=${ACCESS_KEY}`);
        const photos = res.data.results;
        return photos;
        
    } catch (err: any) {
        throw new Error(err)
    }
}