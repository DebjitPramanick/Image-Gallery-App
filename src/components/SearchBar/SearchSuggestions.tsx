import React, { useState } from 'react'
import { useImages } from '../../contexts/ImagesContext'
import { useMobile } from '../../contexts/MobileContext'
import { SearchSuggestionsContainer } from './styles'
import {data as suggestions} from "../../utils/suggestions"

const SearchSuggestions: React.FC<{
    show: boolean,
    type: "header" | "banner",
}> = ({ 
    show, 
    type,
}) => {

    const [expand, setExpand] = useState(show)

    const { handleQuery, toggleQueryView } = useImages()
    const {toggleMobileSearch} = useMobile()

    const selectQuery = (query: string) => {
        console.log(query)
        handleQuery(query)
        setExpand(!expand)
        toggleMobileSearch(false)
        toggleQueryView(true)
    }

    return (
        <SearchSuggestionsContainer className={`${show ? 'expand' : 'collapse'}`}
            style={type === 'banner' ? { background: "#fff", color: "#4F4F4F" } : {}}>
            {suggestions.map((sug) => (
                <div className='suggestion-item' key={sug.id} onClick={() => selectQuery(sug.query)}
                    style={type === 'banner' ? { color: "#4F4F4F" } : {}}>
                    {sug.query}
                </div>
            ))}
        </SearchSuggestionsContainer>
    )
}

export default SearchSuggestions