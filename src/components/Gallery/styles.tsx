import styled from "styled-components"

export const GalleryContainer = styled.div`
    max-width: 1200px;
    margin: 58px auto;

    @media(max-width: 1220px) {
        width: calc(100vw - 32px);
        margin: 58px 16px;
    }

    @media(max-width: 820px) {
        width: calc(100vw - 36px);
        margin: 58px 16px;
    }

    @media(max-width: 500px) {
        width: calc(100vw - 56px);
        margin: 58px 16px;
    }
`

export const CardContainer = styled.div`
    border-radius: 8px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    overflow: hidden;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
`

export const UserDetails = styled.div`
    margin-top: -4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;
    height: 59px;
    background: ${props => props.theme.cardBackground};
    border-radius: 0px 0px 8px 8px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    border: 1px solid ${props => props.theme.cardBorder}#E5E5E5;
    border-radius: 0px 0px 8px 8px;
    gap: 20px;

    .name-para { 
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        color: ${props => props.theme.text};
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 50%;

        @media(max-width: 760px) {
            width: 90%
        }
    }

    .username-para{
        font-style: italic;
        font-weight: 600;
        font-size: 10px;
        line-height: 15px;
        color: ${props => props.theme.subText};
        order: 1;
        flex-grow: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 50%;

        @media(max-width: 760px) {
            width: 96%
        }
    }

    .like-count {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
        color: ${props => props.theme.text};
    }

    .info-part{
        width: 100%;
        @media(max-width: 760px) {
            width: calc(100% - 62px);
        } 
    }
`