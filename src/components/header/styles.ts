import styled from "styled-components";

export const HeaderContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0 2rem;
`

export const NavBar =  styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

`

export const NavegationItems = styled.ul `
    display: flex;
    gap: 1rem;
    list-style: none;
`
interface NavItemsProps {
    isSelected?: boolean;
}

export const NavItem = styled.li<NavItemsProps>`
    font-family: inherit;
    color: ${props => props.theme.colors["medium-text"]};
    border-bottom: 3px solid ${props => props.isSelected ? props.theme.colors.purple : 'transparent' } ;
`

export const UserItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.675rem;

    svg{
        color: ${props => props.theme.colors.pink};
        cursor: pointer;
    }
    svg + svg + svg{
        margin-left: 1rem;
    }
`

export const CartContainer =  styled.div`
    position: relative;

    .cartQuantityIcon{
        position: absolute;
        left: 50%;
        top: 50%;

        height: 20px;
        width: 20px;

        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${props => props.theme.colors.purple};
        font-size: ${props => props.theme.fontSize.sm};
        color: ${props => props.theme.colors["medium-text"]};
    }
`