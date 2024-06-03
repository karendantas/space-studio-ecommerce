"use client"
import Image from "next/image";
import { HeroContainer, HomeContainer } from "./page-styles";

import HomeImage from '@/assets/HomeImage.svg';
import HorizontalDivider from '@/assets/horizontal-divider.svg';

export default function Home() {
  return (
   <HomeContainer>
      <HeroContainer>
        <div>
          <h1> EXPLORE O SPACE STUDIO </h1>
          <p>
            Encontre aqui uma variedade de roupas de croche e acessórios artesanais de biscuit fofinhos e aconchegantes para alegrar o vesturário intergaláctico!
    
          </p>
          <button>Acesse a lojinha </button>
        </div>

        <Image src={HomeImage} width={500} height={500} alt= "" />
      </HeroContainer>

      <Image src ={HorizontalDivider} width={700} height={300} alt = "" />
   </HomeContainer>
  );
}
