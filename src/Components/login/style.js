import styled from 'styled-components'

export const Article = styled.article`
min-height: 200px;
`

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height:0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Button = styled.button`
    padding-top: 8px;
    display: flex;
    align-items: center;
    & svg{
        margin-right:4px;
    }
`
