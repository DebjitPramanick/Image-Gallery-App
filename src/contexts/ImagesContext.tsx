import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getLatestImages, searchImages } from '../api'
import { data as demoSearches} from '../utils/suggestions'

export const useImages = () => {
    return useContext(ImagesContext)
}

const ImagesContext = createContext<{
    images: any[],
    query: string,
    handleQuery: (val: string) => void,
    fetching: boolean,
    hadleSearch: () => void,
    fetchMoreImages: () => void,
    relatedSearches: string[],
    toggleQueryView: (val:boolean) =>void,
    queryView: boolean,
}>({
    images: [],
    query: "",
    handleQuery: (val: string) => { },
    fetching: false,
    hadleSearch: () => {},
    fetchMoreImages: () => {},
    relatedSearches: [],
    toggleQueryView: (val: boolean) => {},
    queryView: false
})

export const ImagesProvider = ({ children }: any) => {

    const [images, setImages] = useState<any[]>([])
    const [query, setQuery] = useState<string>("");
    const [fetching, setFetching] = useState(false);
    const [pageNum, setPageNum] = useState<number>(1);
    const [relatedSearches, setRelatedSearches] = useState<string[]>([])
    const [queryView, setQueryView] = useState(false)

    useEffect(() => {
        fetchImages()
    }, [])

    useEffect(() => {
        if(query === '') {
            toggleQueryView(false)
            setRelatedSearches([])
            fetchImages()
        }
    }, [query])

    const fetchImages = async () => {
        setFetching(true)
        try {
            const results = await getLatestImages();
            setImages(results)
            setFetching(false)
            setPageNum(pageNum+1)
        } catch (err) {
            toast.error("Error occurred!", {
                autoClose: 3500,
                pauseOnHover: true
            })
            setFetching(false)
        }
    }

    const handleQuery = (val: string) => {
        setFetching(true)
        setQuery(val)
    }

    const toggleQueryView = (val: boolean) => {
        setQueryView(val)
    }

    const hadleSearch = async () => {
        setFetching(true)
        try {
            const results = await searchImages(query);
            const demoSearch = demoSearches.find(search => search.query === query)
            setImages(results)
            if(demoSearch && demoSearch.relatedSearches.length){
                setRelatedSearches(demoSearch.relatedSearches)
            }
            setFetching(false)
            setPageNum(pageNum+1)
        } catch (err: any) {
            toast.error("Error occurred!", {
                autoClose: 3500,
                pauseOnHover: true
            })
            setFetching(false)
        }
    }

    const fetchMoreImages = async () => {
        setFetching(true)
        try {
            let photos: any[] = [];
            if (query) {
                photos = await searchImages(query, pageNum);
            } else {
                photos = await getLatestImages(pageNum);
            }
            let allImages = images;
            allImages.push(...photos)
            setImages(allImages)
            setPageNum(pageNum + 1)
            setFetching(false)
        } catch (err) {
            toast.error("Error occurred!", {
                autoClose: 3500,
                pauseOnHover: true
            })
            setFetching(false)
        }
    }

    return (
        <ImagesContext.Provider value={{ images, query, handleQuery, fetching, hadleSearch, fetchMoreImages, relatedSearches, queryView, toggleQueryView }}>
            {children}
        </ImagesContext.Provider>
    )
}