import World from '../../images/World.png';
import {Button} from '../../Globalstyles';

import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroTitleText,
    HeroImage,
    HeroText,
    HeroBtn,
    Img

} from './Hero.styles';

const Hero = () =>{
    return(
        <div>
           <HeroContainer>
               <HeroContent>
                   <HeroContentText>
                        <HeroTitle>
                            <HeroTitleText>Offset Your Carbon Footprint in Real Time</HeroTitleText>
                        </HeroTitle>
                        <HeroText>
                        Cloverly's powerful API calculates the impact of common carbon-intensive activities in real time and uses verified, quality carbon offset projects to neutralize them. Ready to get started? Create an account to integrate the Cloverly API for free, or contact us for custom solutions.
                        </HeroText>
                        <HeroBtn to="/">
                           <Button primary big bigFont bigRadius>Get Started for Free</Button>
                           <Button primary color big bigFont bigRadius>Get Started for Free</Button>
                        </HeroBtn>
                   </HeroContentText>
               </HeroContent>
           </HeroContainer>
           <HeroImage>
                <Img src={World}/> 
            </HeroImage>
        </div>
    )
}

export default Hero;