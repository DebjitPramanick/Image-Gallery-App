import styled from 'styled-components'

// Header IP - #ECECEC
// Body IP - #fff

export const Input = styled.input`  
    padding: 10px 12px;
    border: 0;
    outline: 0;
    color: ${(props: any) => props.theme.text};
    background: ${(props: any) => props.theme.searchBG};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    width: 100%;
    box-sizing: border-box;
`

export const LoadMoreButton = styled.button`
    border: 0;
    outline: 0;
    width: 157px;
    height: 39px;

    border-radius: 4px;
    font-style: normal;
    font-size: 14px;
    line-height: 12px;
    letter-spacing: -0.02em;
    cursor: pointer;
    margin: auto;
    display: block;
    background: transparent;
    border: 1px solid ${props => props.theme.loadButtonBorder};
    color: ${props => props.theme.loadButtonText}
`

export const DownloadButton = styled.button`
    border: 0;
    outline: 0;
    height: 39px;
    background: #3CB46E;
    border-radius: 4px;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.02em;
    padding: 10px 16px;
    color: #FFFFFF;
    cursor: pointer;
`