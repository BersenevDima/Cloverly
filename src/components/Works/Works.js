import {Button} from '../../Globalstyles';
import Loc from '../../images/Loc.png';
import Lypa from '../../images/Lypa.png';
import last from '../../images/last.png';
import {
    MealsContainer,
    MealsWrapper,
    Img2,
    MealsContent,
    MealsContentTitle,
    MealsContentText,
    MealsContentBtn,
    RecipeCard,
    RecipeCardContent,
    RecipeCardHeading,
    RecipeCardDetails,
    RecipeCardItems,
    RecipeCardWrapper,
    RecipeCardSection,
    RecipeSmallCards
} from './works.styles';
function Meals() {
    return (
        <div>
            <MealsContainer>
                <MealsWrapper>
                    <MealsContent>
                        <MealsContentTitle>Connecting the Carbon Offset Infrastructure for a More Sustainable World</MealsContentTitle>
                        <MealsContentText>
                        Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster.
                        </MealsContentText>
                        <MealsContentBtn to='/'>
                            <Button primary color>Learn More</Button>
                        </MealsContentBtn>
                    </MealsContent>

                    <RecipeCardWrapper>
                        <RecipeCardSection>
                            <RecipeSmallCards>
                            <RecipeCard>
                                        <Img2 src={Loc} />
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Matching the Offset
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local.
                                                
                                                
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img2 src={Lypa} />
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Transaction Transparency
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset.
                                                
                                                
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img2 src={last} />
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                            Verified Sources
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects.
                                                
                                                
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                            </RecipeSmallCards>
                        </RecipeCardSection>
                    </RecipeCardWrapper>
                            
                                


                    
                </MealsWrapper>
            </MealsContainer>     
        </div>
    )
}

export default Meals;
