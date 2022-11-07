import styled from 'styled-components';
import {BiCheck} from 'react-icons/bi';
import {Link} from 'react-router-dom';

export const RecipeCardWrapper = styled.div`                                                
display: flex;                                                                                                                                                                                                                                                                                                                                                                                                                                        
justify-content: space-between;
align-items: center;
margin-top: 6rem;
flex-direction: column;

@media only screen and (min-width:1800px) {
    flex-direction: row;
}
`;

export const RecipeSmallCards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (min-width: 1200px){
    margin-left: 2rem;
}
@media only screen and (min-width: 1500px){
    margin-left: 3.5rem;
}

`;

export const RecipeCardSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media only screen and (min-width: 900px) {
    flex-direction: row;
}
`;

export const RecipeCard = styled.div`
margin-top:160px; 
display: flex;
justify-content: center;
align-items: center;
width: 500px;
height: 130px;
margin-bottom: 4rem;
cursor: pointer;

@media only screen and (max-width:1200px) {
    width: 397px;
    margin-right: 5rem;
}
@media only screen and (max-width:1000px) {
    width: 420px;
    margin-right: 2.5rem;
}
 
@media only screen and (max-width:700px){
    width: 380px;
    &:hover {
    transform: scale(1.1);
    }
}

@media only screen and (max-width:500px){
    margin-right: 0;
    &:hover {
    transform: scale(1);
    }
}
@media only screen and (max-width:400px){
    flex-direction: column;
    width: 280px;
}
`;

export const Img2 = styled.img`
height: 10rem;
transition: all .5s ease;
@media only screen and (max-width: 1000px){
    height: 9rem;
}

@media only screen and (max-width: 400px){
    display: none;
}
`;

export const RecipeCardContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;
`;

export const RecipeCardHeading = styled.h3`
font-size: 2.4rem;
font-weight: bold;

@media only screen and (max-width:700px){
    font-size: 2rem;
}
`;

export const RecipeCardDetails = styled.div`
display: flex;
align-items: center;
margin-top: 1.5rem;
`;

export const RecipeCardItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
&:not(:last-child){
    margin-right: 2.5rem;
}
`;
export const RecipeCardItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 2.5rem;
font-weight: bold;
`;

export const SliderPos =styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
flex-wrap: nowrap;
padding-left: 150px;
padding-bottom: 100px;
background-color:#1FBD8A;
`

export const MealsContainer = styled.section`
display: flex;
align-items: center;
justify-content: center;
background-color: #F2F4E8;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding-bottom: 200px;
`;

export const MealsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
overflow: hidden;

@media only screen and (max-width: 1000px) {
    flex-direction: column;
}

@media only screen and (min-width:1370px){
    align-items: center;
}
`;

export const MealsImage = styled.div`
width: 100%;
height: 100%;

@media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
}
`;

export const Img = styled.img`
@media only screen and (min-width:1800px){
    width: 900px;
}
@media only screen and (max-width:1400px){
    width: 650px;
}

@media only screen and (max-width:1200px){
    
    width: 500px;
}
@media only screen and (max-width:1000px){
    width: 700px;

    height: 500px;
}
@media only screen and (max-width:700px){
    width: 600px;
}
@media only screen and (max-width:500px){
    width: 400px;
    height: 300px;
}
@media only screen and (max-width:400px){
    width: 350px;
}
`;

export const MealsContent = styled.div`
padding: 0 10rem;
@media only screen and (min-width:1800px){
    margin: 0 20rem;
}

@media only screen and (max-width: 1300px){
    padding: 2rem 5rem;
}

@media only screen and (max-width: 1000px) {
    text-align: center;
}

@media only screen and (max-width: 500px){
    padding: 2rem;
}

`;

export const MealsContentTitle = styled.h2`
font-size: clamp(2rem, 8vw, 5rem);
margin-bottom: 3rem;
text-align: left;
line-height: 1.2;
`;

export const MealsContentText = styled.p`
font-size: 1.8rem;
text-align: left;
@media only screen and (max-width: 1000px) {
    font-size: 2rem;
}
`;

export const MealsContentItems = styled.div`
display: flex;
margin-bottom: 3rem;
margin-top: 3rem;
@media only screen and (max-width: 1000px) {
    justify-content: center;
}
`;

export const MealsContentList = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
&:not(:last-child) {
    margin-right: 10rem;
}
@media only screen and (max-width: 500px){
    &:not(:last-child) {
    margin-right: 3rem;
}
}
`;

export const MealsContentDetails = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const MealsContentIcon = styled(BiCheck)`
font-size: 1.6rem;
color: #E38B06;
margin-right: 1rem;
`;

export const MealsContentCategory = styled.h3`
font-weight: 400;
font-size: 1.8rem;

@media only screen and (max-width:450px){
    font-size: 1.7rem;
}
@media only screen and (max-width:340px){
    font-size: 1.5rem;
}
@media only screen and (max-width:335px){
    font-size: 1.2rem;
}
`;

export const MealsContentBtn = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
gap: 50px;
margin-top: 30px;

@media only screen and (max-width: 1000px) {
    justify-content: center;
}
`;
