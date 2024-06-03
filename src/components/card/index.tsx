"use client"
import { Heart, Plus, Tote } from "phosphor-react";
import { CardContainer, HighlightContainer, PriceCartContainer } from "./styles";
import { useState } from "react";
import Image from "next/image";

interface CardProps {
    title: string,
    description: string,
    price: number,
    image: string,
}
export function Card({title, description, price, image}: CardProps){
    const [isFavoritie, setIsFavorite] = useState(false)
   
    return (
        <CardContainer>
            <div className="image-container">
                <Image src= {image} width={150} height={150} alt = ""/>
            </div>

            <HighlightContainer>
                <strong>{title}</strong>
                <p>{description}</p>
            </HighlightContainer>

            <PriceCartContainer>
                <span> {price} </span>
                <button onClick={ () => setIsFavorite(state => !state) }> 
                    { isFavoritie 
                        ?  
                        <Heart size={24} weight="fill"/> 
                        :
                        <Heart size={24} />
                    }
                   
                </button>
            </PriceCartContainer>

        </CardContainer>
    )
}