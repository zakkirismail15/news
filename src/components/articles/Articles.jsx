import React from 'react'
import { ArticleContent, ArticleContentWrapper, ArticleImage, ArticleWrapper } from './Articles.style'
import { H3, H4, H5, Para } from '../../styles/Typography.style'
import retro from '../../images/image-retro-pcs.jpg'
import gaming from '../../images/image-gaming-growth.jpg'
import laptop from '../../images/image-top-laptops.jpg'


function Articles() {
    return (
        <div><ArticleWrapper>
            <ArticleContentWrapper>
                <ArticleImage>
                    <img src={retro} alt="" />
                </ArticleImage>
                <ArticleContent>
                    <H3>01</H3>
                    <H5>
                        Reviving Retro PCs
                    </H5>
                    <Para>
                        What happens when old PCs are given modern upgrades?
                    </Para>
                </ArticleContent>
            </ArticleContentWrapper>
            <ArticleContentWrapper>
                <ArticleImage>
                    <img src={laptop} alt="" />
                </ArticleImage>
                <ArticleContent>
                    <H3>02</H3>
                    <H5>
                        Top 10 Laptops of 2022
                    </H5>
                    <Para>
                        Our best picks for various needs and budgets.
                    </Para>
                </ArticleContent>
            </ArticleContentWrapper>
            <ArticleContentWrapper>
                <ArticleImage>
                    <img src={gaming} alt="" />
                </ArticleImage>
                <ArticleContent>
                    <H3>03</H3>
                    <H5>
                        The Growth of Gaming
                    </H5>
                    <Para>
                        How the pandemic has sparked fresh opportunities.
                    </Para>
                </ArticleContent>
            </ArticleContentWrapper>
        </ArticleWrapper></div>
    )
}

export default Articles