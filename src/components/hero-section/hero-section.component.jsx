import React from 'react';
import './hero-section.styles.css';

import heroImage1 from '../../assets/banner_ihelp.jpg';
import heroImage3 from '../../assets/banner_ihelp2.jpg';
import heroImage4 from '../../assets/banner_ihelp3.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";


const HeroSection = () => {
    return (
        <div className="hero-container"> 
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={false}
                    showIndicators={false}
                    className="z-depth-1"
                    slide
                >
                    <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                        <img
                            className="d-block w-100"
                            src={heroImage1}
                            alt="First slide"
                        />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                        <img
                            className="d-block w-100"
                            src={heroImage3}
                            alt="Second slide"
                        />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                        <img
                            className="d-block w-100"
                            src={heroImage4}
                            alt="Third slide"
                        />
                        </MDBView>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        </div>
    )
}

export default HeroSection;