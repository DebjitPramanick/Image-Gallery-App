import styled from "styled-components";

export const HeaderContaier = styled.div`
    position: fixed;
    height: 97px;
    top: 0;
    right: 0;
    left: 0;
    background: ${props => props.theme.headerBackground};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;

    @media(max-width: 900px) {
        height: 70px;
    }
`

export const HeaderContent = styled.div`
    width:1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-links{
        a {
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            color: ${props => props.theme.headerText};
            text-decoration: none;
        }
    }

    .theme-controller {
        p{
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            color: ${props => props.theme.headerText};
            text-decoration: none;
        }
    }

    @media(max-width: 1000px) {
        display: none;
    }

    @media(max-width: 1200px) {
        width: calc(100% - 32px);
    }

    
`

export const MobileHeaderContent = styled.div`
    height: 100%;
    margin: auto;
    display: none;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    padding: 0 16px;

    .page-links{
        flex-direction: column;
        align-items: flex-start;
        padding: 0 16px;
        a {
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            color: ${props => props.theme.headerText};
            text-decoration: none;
        }
    }

    .theme-controller {
        padding: 0 16px;
        justify-content: space-between;
        margin-top: 20px;
        p{
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            color: ${props => props.theme.headerText};
            text-decoration: none;
        }
    }

    @media(max-width: 1000px) {
        display: flex;
    }
`

export const FloatingContainer = styled.div<{height: string}>`
    position: absolute;
    background: ${props => props.theme.headerBackground};
    top: 70px;
    left: 0;
    right: 0;
    overflow: hidden;
    padding: 0;

    &.expand{
        height: ${(props: any) => props.height};
        transition: 0.5s;
    }

    &.collapse{
        height: 0;
        transition: 0.5s;
    }
`

