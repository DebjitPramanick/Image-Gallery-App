import React, { useEffect, useState } from 'react'
import SearchIcon from '../../assets/SearchIcon'
import { Input } from '../../styles/FormStyles'
import { BarContainer, HeaderBarContainer } from './styles'
import { useImages } from '../../contexts/ImagesContext'
import SearchSuggestions from './SearchSuggestions'
import { useMobile } from '../../contexts/MobileContext'

interface PropsType {
    type?: 'header' | 'banner';
}

const SearchBar = ({
    type = 'banner',
}: PropsType) => {

    const { query, handleQuery, hadleSearch, toggleQueryView } = useImages()
    const {toggleMobileSearch} = useMobile()

    const [focused, setFocused] = useState<"banner" | "header" | "">("")

    useEffect(() => {
        let delayDebounceFn: any;

        if (query) {
            delayDebounceFn = setTimeout(() => {
                hadleSearch()
            }, 1000)
        }

        return () => clearTimeout(delayDebounceFn)
    }, [query])

    const triggerQueryView = (event: any) => {
        if (event.key === 'Enter' && query) {
            setFocused("")
            toggleMobileSearch(false)
            toggleQueryView(true)
        }
    }

    return (
        <>
            {type === 'banner' ? (
                <BarContainer>
                    <SearchIcon />
                    <Input
                        value={query}
                        onChange={(e) => handleQuery(e.target.value)}
                        placeholder="Search high resolution Images, categories, wallpapers"
                        onFocus={() => setFocused("banner")}
                        onBlur={() => setFocused("")}
                        onKeyDown={(e) => triggerQueryView(e)}
                        style={{ background: "#fff", color: "#4F4F4F" }}
                    />
                    <SearchSuggestions 
                    show={query !== "" && focused === 'banner'} 
                    type="banner" />
                </BarContainer>
            ) : (
                <HeaderBarContainer>
                    <SearchIcon />
                    <Input
                        value={query}
                        onChange={(e) => handleQuery(e.target.value)}
                        placeholder="Search Images here"
                        onFocus={() => setFocused("header")}
                        onBlur={() => setFocused("")}
                        onKeyDown={(e) => triggerQueryView(e)}
                    />
                    <SearchSuggestions
                        show={query !== "" && focused === 'header'}
                        type="header" />
                </HeaderBarContainer>
            )}
        </>
    )
}

export default SearchBar