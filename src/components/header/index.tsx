"use client"
import Image from "next/image";
import { CartContainer, HeaderContainer, NavBar, NavegationItems, NavItem, UserItems } from "./styles";

import Logo from "../../../public/SpaceStudioLogo.svg";
import { Heart, Tote, UserCircle } from "phosphor-react";
export function Header(){

    return (
        <HeaderContainer>
            <Image src={Logo} width={100} height={100} alt="" />

            <NavBar>
                <NavegationItems>
                    <NavItem isSelected> HOME </NavItem>
                    <NavItem> PRODUTOS </NavItem>
                    <NavItem> SOBRE NÓS </NavItem>
                    <NavItem> ENCOMENDAR </NavItem>
                    <NavItem> LOGIN </NavItem>
                    <NavItem> CADASTRO </NavItem>
                </NavegationItems>

                <UserItems>
                    <Heart size={30} weight="fill" />

                    <CartContainer>
                        <Tote size={30} weight="fill" />
                        <div className="cartQuantityIcon"> 43 </div>
                    </CartContainer>

                    <UserCircle size={42} weight="fill" />
                </UserItems>
            </NavBar>
        </HeaderContainer>
    )
}