import styled from "styled-components"

export const Banner = styled.div`
    background-image: url(${require("../../assets/bgImage.jpg")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;

    .head-text{
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        margin-bottom: 17px;
        text-align: center
    }

    .sub-head-text{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #C4C4C4;
        margin-bottom: 16px;
        text-align: center
    }

    @media(max-width: 1200px) {
        width: calc(100vw - 20px);
        padding: 0 10px;
    }
`

export const ResultsHeader = styled.div`
    max-width: 1200PX;
    margin: 46px auto 40px auto;

    .head-text{
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        color: ${props => props.theme.text};
        margin-bottom: 24px;
    }

    @media(max-width: 1200px) {
        width: calc(100vw - 20px);
        padding: 0 10px;
    }
`

export const SuggestionsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    .related-searches{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 12px;
        gap: 10px;
        border: 1px solid #C4C4C4;
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: ${props => props.theme.text};
        text-transform: capitalize;
        cursor: pointer;
    }
`

export const LoadingSection = styled.div`
    p{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #A7A7A7;
    }
`