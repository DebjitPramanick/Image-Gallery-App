import React, { useEffect } from 'react'
import Gallery from '../../components/Gallery'
import SearchBar from '../../components/SearchBar'
import { PageLayout } from '../../styles/PageStyles'
import Loader from '../../components/Loader'
import { Banner, LoadingSection, ResultsHeader, SuggestionsContainer } from './styles'
import { useImages } from '../../contexts/ImagesContext'


const Home = () => {

    const { images, fetching, fetchMoreImages, query, relatedSearches, handleQuery, queryView } = useImages()


    return (
        <PageLayout>
            {!queryView && (
                <Banner>
                    <p className='head-text'>Download High Quality Images by creators</p>
                    <p className='sub-head-text'>Over 2.4 million+ stock Images by our talented community</p>
                    <SearchBar />
                </Banner>
            )}
            <ResultsHeader>
                <p className='head-text'>{query}</p>
                <SuggestionsContainer>
                    {relatedSearches.map(relSearch => (
                        <p className='related-searches' onClick={() => handleQuery(relSearch)}>{relSearch}</p>
                    ))}
                </SuggestionsContainer>
            </ResultsHeader>

            <Gallery images={images} fetchMoreImages={fetchMoreImages} />

            {fetching && (
                <LoadingSection>
                    <Loader />
                    <p>Loading some awesome Images...</p>
                </LoadingSection>
            )}

        </PageLayout>
    )
}

export default Home