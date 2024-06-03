import styled from "styled-components";

export const CardContainer = styled.div`

    width: 300px;
    height: 350px;

    border-radius: 8px;
    padding: 1.3rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    .image-container{
        flex:1    
    }

`
export const HighlightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1rem 0 1rem;
    text-align: center;

`

export const PriceCartContainer = styled.div `
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        color: ${props => props.theme.colors["dark-purple"]};
        font-size: ${props => props.theme.fontSize.xlg};
        font-weight: 800;
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.675rem;
        background-color: transparent;
        border: none;
        cursor: pointer;

        svg {
            color: ${props => props.theme.colors["dark-pink"]}
        }
    }

`