import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { getImageData } from '../../api';
import CloseIcon from '../../assets/CloseIcon';
import { DarkLikeIcon } from '../../assets/DarkLikeIcon';
import DarkModeIGIcon from '../../assets/DarkModeIGIcon';
import DarkModeTwitterIcon from '../../assets/DarkModeTwitterIcon';
import InfoButton from '../../assets/InfoButton';
import InstagramIcon from '../../assets/InstagramIcon';
import LikeIcon from '../../assets/LikeIcon';
import ShareButton from '../../assets/ShareButton';
import TwitterIcon from '../../assets/TwitterIcon';
import { useThemeMode } from '../../contexts/ThemeModeContext';
import { formatNumber } from '../../helper/common.helper';
import { Avatar, Flex } from '../../styles/ComponentStyles';
import { DownloadButton } from '../../styles/FormStyles';
import Loader from '../Loader';
import { ImageContainer, Overlay, PopupContainer, ScrollContainer, TagsContainer, TagsHeading, UserDetails, PopupBody, Options, SocialHandleContainer } from './styles';

interface PropsType {
  imageId: any;
  closePopup: () => void
}

const Popup = ({ imageId, closePopup }: PropsType) => {

  const { theme } = useThemeMode()

  const [image, setImage] = useState<any>(null);
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImageData()
  }, [])

  const fetchImageData = async () => {
    setLoading(true)
    try {
      const response = await getImageData(imageId);
      setImage(response)
      setUser(response.user)
      setLoading(false)
    } catch (err: any) {
      toast.error("Error occurred!", {
        autoClose: 3500,
        pauseOnHover: true
      })
      setLoading(false)
    }
  }

  return (
    <Overlay>
      <PopupContainer>
        <PopupBody>
          <ScrollContainer>
            {loading ? <Loader /> : (
              <>
                <div style={{ position: 'absolute', top: '-18px', right: '-18px', cursor: 'pointer', zIndex: 999 }}
                  onClick={closePopup}>
                  <CloseIcon />
                </div>
                <ImageContainer>
                  <img src={image?.urls.full} alt="/" />
                  <Options>
                    <div style={{ display: "flex", gap: '8px', alignItems: 'center', cursor: 'pointer' }}>
                      <ShareButton />
                      <InfoButton />
                    </div>
                    <DownloadButton>Download Image</DownloadButton>
                  </Options>
                </ImageContainer>


                <UserDetails>
                  <Flex gap={20} className="user-info-part">
                    <Flex gap={10}>
                      <Avatar src={user?.profile_image.medium} width={56} />
                      <div style={{ width: 'fit-content' }}>
                        <p className='name-para'>{user?.name}</p>
                        <p className='username-para'>@{user?.username}</p>
                      </div>
                    </Flex>
                    <SocialHandleContainer>
                      {user?.social.instagram_username && (
                        <Flex gap={4}>
                          {theme === 'dark' ? <DarkModeIGIcon /> : <InstagramIcon />}
                          <p className='social-handle'>/{user?.social.instagram_username}</p>
                        </Flex>
                      )}
                      {user?.social.twitter_username && (
                        <Flex gap={4}>
                          {theme === 'dark' ? <DarkModeTwitterIcon /> : <TwitterIcon />}
                          <p className='social-handle'>/{user?.social.twitter_username}</p>
                        </Flex>
                      )}
                    </SocialHandleContainer>
                  </Flex>
                  <Flex gap={20}>
                    <p className='downloads-text'>{formatNumber(image?.downloads)} downlods</p>
                    <Flex gap={4}>
                      {theme === 'dark' ? <DarkLikeIcon /> : <LikeIcon />}
                      <p className='like-count'>{formatNumber(image?.likes)}</p>
                    </Flex>
                  </Flex>
                </UserDetails>

                {image?.tags.length > 0 && (
                  <>
                    <TagsHeading>Related Tags</TagsHeading>
                    <TagsContainer>
                      {image?.tags.map((tag: any) => (
                        <div className='pic-tag'>{tag.title}</div>
                      ))}
                    </TagsContainer>
                  </>
                )}
              </>
            )}
          </ScrollContainer>
        </PopupBody>
      </PopupContainer>
    </Overlay >
  )
}

export default Popup