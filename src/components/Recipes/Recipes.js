
import {Button} from '../../Globalstyles';
import Eco from '../../images/Eco.png';
import Plane from '../../images/Plane.png';
import Car from '../../images/Car.png';
import Inter from '../../images/Inter.png';
import Clain from '../../images/Clain.png';
import Energy from '../../images/Energy.png';
import Fin from '../../images/Fin.png';
import Fleet from '../../images/Fleet.png';
import {
    RecipeContainer,
    RecipeWrapper,
    RecipeTitle,
    RecipeContentContainer,
    RecipeTabContainer,
    RecipeCardWrapper,
    RecipeCardSection,
    RecipeSmallCards,
    RecipeCard,
    RecipeCardContent,
    RecipeCardHeading,
    RecipeCardDetails,
    RecipeCardItems,
    RecipeCardItem,
    Img,



} from './Recipes.styles';
const Recipes = () => {
    return (
        <div>
            <RecipeWrapper>
                <RecipeContainer>
                    <RecipeTitle>Used in Every Environment, to Save the Environment</RecipeTitle>
                    <RecipeContentContainer>
                        <RecipeTabContainer>
                        There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting.
                        </RecipeTabContainer>
                        <RecipeCardWrapper>
                            <RecipeCardSection>
                                <RecipeSmallCards>
                                    <RecipeCard>
                                        <Img src={Eco}/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Ecommerce
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                     See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.
                                                    <RecipeCardItem>Learn more</RecipeCardItem>
                                                
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={Plane}/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                                Flights
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated.
                                                
                                                <RecipeCardItem>Learn more</RecipeCardItem>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>

                                    <RecipeCard>
                                        <Img src={Energy}/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Energy
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world.
                                                <RecipeCardItem>Learn more</RecipeCardItem>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={Fin}/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Fintech
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects.
                                                <RecipeCardItem>Learn more</RecipeCardItem>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                </RecipeSmallCards>
                                <RecipeSmallCards>
                                    <RecipeCard>
                                        <Img src={Car}/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Rideshare
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly.
                                                
                                                <RecipeCardItem>Learn more</RecipeCardItem>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={Inter} />
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Enterprise Resource Planning
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects.
                                                
                                                <RecipeCardItem>Learn more</RecipeCardItem>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>

                                    <RecipeCard>
                                        <Img src={Clain} />
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Supply Chain
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too.
                                                
                                                <RecipeCardItem>Learn more</RecipeCardItem>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={Fleet} />
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Fleet
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact.
                                                
                                                <RecipeCardItem>Learn more</RecipeCardItem>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                </RecipeSmallCards>

                            </RecipeCardSection>
                            
                        </RecipeCardWrapper>
                        
                    </RecipeContentContainer>
                    <RecipeTitle>Don't See Your Industry?</RecipeTitle>
                    <RecipeTabContainer>
                    Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions.
                    </RecipeTabContainer>
                    <RecipeTabContainer>
                        <Button primary color big bigFont bigRadius>Contact Us  </Button>
                    </RecipeTabContainer>
                </RecipeContainer>
                
            </RecipeWrapper>
            
        </div>
    );
}

export default Recipes;
