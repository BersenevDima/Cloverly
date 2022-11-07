import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeroImage = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-wrap: nowrap;
background-color: #FBFCF5;
padding-top: 250px;
padding-bottom: 100px;
`

export const Img = styled.img`

@media only screen and (min-width:300px) {
    width: 300px;
}
@media only screen and (min-width:400px) {
    width: 400px;
}
@media only screen and (min-width:600px) {
    width: 500px;
}
@media only screen and (min-width:800px) {
    width: 800px;
}
@media only screen and (min-width:1000px) {
    width: 500px;
    height: 400px;
}
@media only screen and (min-width:1200px) {
    width: 600px;
}
@media only screen and (min-width:1500px) {
    width: 750px;
}
@media only screen and (min-width:1800px) {
    width: 900px;
}
`;

export const HeroContainer = styled.div`
background-color: #FBFCF5;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 74vh;

@media only screen and (max-width:1600px) {
    height: 85vh;
}
`;

export const HeroContent = styled.section`
height: 100%;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color: black;

@media only screen and (max-width:375px) {
    text-align: start;
    height: 80%;
}
`;

export const HeroContentText = styled.div`
width: 50%;
padding-top: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media only screen and (max-width:600px) {
    width: 80%;
}
@media only screen and (max-width:375px) {
    position: absolute;
    align-items: flex-start;
}
`;

export const HeroTitle = styled.h1`
font-size: 42px;
font-weight: 900;
letter-spacing: .5rem;
line-height: 1.3;
padding-top: 300px;
`;

export const HeroTitleText = styled.span`
display: block;
`;

export const HeroSubTitle = styled.h2`
font-size: clamp(2rem, 3vw, 4rem);
font-weight: 300;
letter-spacing: 1rem;
padding-top: 1rem;
`;

export const HeroText = styled.h3`
font-size: clamp(2rem, 2.5vw, 3rem);
font-weight: 400;
padding: 2.5rem 2rem;

@media only screen and (max-width:375px) {
    padding: 1.5rem 0;
}
`;

export const HeroBtn = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
gap: 50px;
margin-top: 30px;
`;