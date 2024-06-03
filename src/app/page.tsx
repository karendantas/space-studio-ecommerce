"use client"
import Image from "next/image";
import { CardsContainer, HeroContainer, HomeContainer } from "./page-styles";

import HomeImage from '@/assets/HomeImage.svg';
import HorizontalDivider from '@/assets/horizontal-divider.svg';

import i from '@/assets/products/brincos-1.jpg'
import { Card } from "@/components/card";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { products } = useProducts();
  return (
   <HomeContainer>
      <HeroContainer>
        <div>
          <h1> EXPLORE O SPACE STUDIO </h1>
          <p>
            Encontre aqui uma variedade de roupas de croche e acessórios artesanais de biscuit fofinhos e aconchegantes para alegrar o seu vesturário intergaláctico!
    
          </p>
          <button>Acesse a lojinha </button>
        </div>

        <Image src={HomeImage} width={500} height={500} alt= "" />
      </HeroContainer>

      <Image src ={HorizontalDivider} width={700} height={300} alt = "" />
   
      <CardsContainer>
        {products.map( (product) => {
          return (
            <Card 
              key={product.id}
              title={product.title ?? "bosa"}
              description={product.description}
              image={product.image}
              price={product.price_in_cents}
            />
          )
        })}
      </CardsContainer>
   </HomeContainer>
  );
}
