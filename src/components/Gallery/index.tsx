import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import { LoadMoreButton } from '../../styles/FormStyles'
import Popup from '../Popup'
import "./gallery.css"
import ImageCard from './ImageCard'
import { GalleryContainer } from './styles'

interface PropsType {
    images: any[];
    fetchMoreImages: () => void
}

const breakpointColumnsObj = {
    default: 3,
    770: 2,
};

const Gallery = ({ images, fetchMoreImages }: PropsType) => {

    const [popupState, setPopupState] = useState<{
        show: boolean,
        image: any
    }>({
        show: false,
        image: null
    })

    const handlePopup = (image?: any) => {
        if (popupState.show) {
            document.body.style.overflowY = 'scroll';
            setPopupState({
                show: false,
                image: null
            })
        } else {
            document.body.style.overflowY = 'hidden';
            setPopupState({
                show: true,
                image: image
            })
        }
    }

    return (
        <GalleryContainer>

            {images.length > 0 ? (
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {images.map((image: any) => (
                        <ImageCard key={image.id}
                            image={image}
                            openPopup={handlePopup} />
                    ))}
                </Masonry>
            ) : (
                <p style={{ textAlign: 'center', margin: '0 0 20px 0', color: 'grey' }}>No image found</p>
            )}

            {popupState.show && (
                <Popup
                    imageId={popupState.image.id}
                    closePopup={handlePopup} />
            )}

            {images.length > 0 && (
                <LoadMoreButton onClick={() => fetchMoreImages()}>Load More</LoadMoreButton>
            )}
        </GalleryContainer>
    )
}

export default Gallery