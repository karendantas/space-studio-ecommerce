"use client"
import Image from "next/image";
import { HeaderContainer, NavBar } from "./styles";

import Logo from "../../../public/SpaceStudioLogo.svg";
export function Header(){

    return (
        <HeaderContainer>
            <Image src={Logo} width={100} height={100} alt="" />

            <NavBar>
                <li> HOME </li>
                <li> PRODUTOS </li>
                <li> SOBRE NÓS </li>
                <li> ENCOMENDAR </li>
                <li> LOGIN </li>
                <li> CADASTRO </li>
            </NavBar>
        </HeaderContainer>
    )
}