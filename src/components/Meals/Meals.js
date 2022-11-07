import {Button} from '../../Globalstyles';
import Phone from '../../images/Phone.png';
import Slider from '../Slider/Slider';
import Navbar from '../Navbar/Navbar';
import {
    MealsContainer,
    MealsWrapper,
    MealsImage,
    Img,
    MealsContent,
    MealsContentTitle,
    MealsContentText,
    MealsContentBtn,
    SliderPos
} from './Meals.styles';
function Meals() {
    return (
        <div>
            <Navbar/>
            <MealsContainer>
                <MealsWrapper>
                    <MealsContent>
                        <MealsContentTitle>Helping the World Go Carbon Neutral</MealsContentTitle>
                        <MealsContentText>
                        Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more. 
                        </MealsContentText>
                        <MealsContentBtn to='/'>
                            <Button primary color>Get Started</Button>
                            <Button primary color>Let's Talk</Button>
                        </MealsContentBtn>
                    </MealsContent>
                    <MealsImage>
                        <Img src={Phone}/> 
                    </MealsImage>
                </MealsWrapper>
            </MealsContainer>
            <SliderPos>
                <Slider/>
            </SliderPos>

            
            
        </div>
    )
}

export default Meals;
