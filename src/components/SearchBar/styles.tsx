import styled from 'styled-components'

export const BarContainer = styled.div`
    display: flex;
    align-items: center;
    width: 700px;
    background: #fff;
    gap: 10px;
    padding: 6px 18px;
    border-radius: 8px;
    position: relative;

    @media(max-width: 780px){
        width: calc(100vw - 90px);
    }
`

export const HeaderBarContainer = styled.div`
    background: ${(props: any) => props.theme.searchBG};
    border: 1px solid ${(props: any) => props.theme.searchBorder};
    box-shadow: inset 0px 4px 19px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    display: flex;
    align-items: center;
    width: 400px;
    gap: 10px;
    padding: 6px 18px;
    border-radius: 8px;
    position: relative;

    @media(max-width: 1000px){
        width: calc(100% - 72px);
        margin: auto;
    }
`

export const SearchSuggestionsContainer = styled.div`
    position: absolute;
    background: ${(props: any) => props.theme.suggestionsBG};
    border: 1px solid ${(props: any) => props.theme.searchBorder};
    border-radius: 8px;
    z-index: 1;
    top: 56px;
    left: 0;
    right: 0;
    overflow-y: scroll;
    height: 200px;
    padding: 0;

    .suggestion-item{
        padding: 21px 17px;
        cursor: pointer;
        color: ${(props: any) => props.theme.text}
    }

    &.expand{
        height: ${(props: any) => props.height};
        transition: 0.5s;
    }

    &.collapse{
        height: 0;
        border: 0;
        transition: 0.5s;
    }
`