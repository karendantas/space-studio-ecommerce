import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 700px;

` 
export const HeroContainer = styled.div`
    width: 90%;
    position: relative;

    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 4rem 0 4rem;
    gap: 4rem;

   div {
    width: 50%;
    height: 300px;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

        h1{
            color: ${props => props.theme.colors.purple};
            font-size: ${props => props.theme.fontSize.xxlg};
            font-weight: 900;
        }

       
        p {
            text-align: justify;
            font-size: ${props => props.theme.fontSize.md};
            width: 90%;
        }

        button {
            background-color: ${props => props.theme.colors.green};
            border: none;
            border-radius: 6px;
            padding: 1.2rem;

            max-width: 250px;
            width: 100%;

            color: ${props => props.theme.colors.white};
            font-weight: 600;
            font-size: ${props => props.theme.fontSize.xlg};
            
        }     
   }

   img {
        position: absolute;
        top: -40px;
        left: 60%;

    }
`;