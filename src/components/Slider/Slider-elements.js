import styled from "styled-components";

export const Back = styled.button`

    width: auto;
    height: auto;
    background: #FBFCF5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    padding: 50px;
    @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 40px;
}

@media only screen and (min-width:1370px){
    align-items: center;
}
    
`;
