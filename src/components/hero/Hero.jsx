import React from 'react'
import { HeroArticle, HeroArticleContent, HeroContent, HeroContentWrapper, HeroImage, HeroWrapper } from './Hero.style'
import banner from '../../images/image-web-3-desktop.jpg'
import { H1, H2, H3, H5, Para } from '../../styles/Typography.style'
import { Button } from '../../styles/Common.style'

function Hero() {
    return (
        <div><HeroWrapper>
            <HeroContent className='left-column'>
                <HeroImage>
                    <img src={banner} alt="" />
                </HeroImage>
                <H1>
                    The Bright Future of Web 3.0?
                </H1>
                <HeroContentWrapper>
                    <Para>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </Para>
                    <Button>
                        READ MORE
                    </Button>
                </HeroContentWrapper>
            </HeroContent>
            <HeroArticle>
                <H3>
                    New
                </H3>
                <HeroArticleContent>
                    <H5>
                        Hydrogen VS Electric Cars
                    </H5>
                    <Para>
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </Para>
                    <hr />
                </HeroArticleContent>
                <HeroArticleContent>
                    <H5>
                        The Downsides of AI Artistry
                    </H5>
                    <Para>
                        What are the possible adverse effects of on-demand AI image generation?
                    </Para>
                    <hr />
                </HeroArticleContent>
                <HeroArticleContent>
                    <H5>
                        Is VC Funding Drying Up?
                    </H5>
                    <Para>
                        Private funding by VC firms is down 50% YOY. We take a look at what that means.
                    </Para>
                    <hr />
                </HeroArticleContent>
            </HeroArticle>
        </HeroWrapper></div>
    )
}

export default Hero