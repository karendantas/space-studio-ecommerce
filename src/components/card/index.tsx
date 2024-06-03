"use client"
import { Heart, Plus, Tote } from "phosphor-react";
import { CardContainer, HighlightContainer, PriceCartContainer } from "./styles";
import { useState } from "react";

interface CardProps {
    title: string,
    description: string,
    price: string,
    image: string,
}
export function Card({title, description, price, image}: CardProps){
    const [isFavoritie, setIsFavorite] = useState(false)
    return (
        <CardContainer>
            <div className="image-container">
                {image}
            </div>

            <HighlightContainer>
                <strong>{title}</strong>
                <p>Bolsa de algodão com detalhes petalhados em rosa clumpoin</p>
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