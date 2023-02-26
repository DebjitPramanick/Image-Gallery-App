import React from 'react'
import { DarkLikeIcon } from '../../assets/DarkLikeIcon';
import LikeIcon from '../../assets/LikeIcon'
import { useThemeMode } from '../../contexts/ThemeModeContext';
import { formatNumber } from '../../helper/common.helper';
import { Avatar, Flex } from '../../styles/ComponentStyles'
import { CardContainer, UserDetails } from './styles'

interface PropsType {
    image: any;
    openPopup: (image: any) => void
}

const ImageCard = ({ image, openPopup }: PropsType) => {

    const {theme} = useThemeMode()

    const user = image.user;
    const urls = image.urls;

    return (
        <CardContainer>
            <img src={urls.small} alt="/" width={"100%"} style={{cursor: 'pointer'}}
            onClick={() => openPopup(image)}/>
            <UserDetails>
                <Flex gap={10} className="info-part">
                    <Avatar src={user.profile_image.medium} width={39}/>
                    <div style={{width: 'calc(100% - 49px)'}}>
                        <p className='name-para'>{user.name}</p>
                        <p className='username-para'>@{user.username}</p>
                    </div>
                </Flex>
                <Flex gap={4} className="extras-part">
                    {theme === 'dark' ? <DarkLikeIcon /> : <LikeIcon />}
                    <p className='like-count'>{formatNumber(image.likes)}</p>
                </Flex>
            </UserDetails>
        </CardContainer>
    )
}

export default ImageCard