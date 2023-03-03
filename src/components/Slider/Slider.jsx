import React, { useEffect, useRef, useState } from "react";
import Slide from "./Slide";

const Slider = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const sliderWidth = useRef(null);


    const initialSlider = () => {
        setSlideWidth(sliderWidth.current.getBoundingClientRect().width);
    };

    const nextSlide = () => {
        if (slides.length === activeSlide + 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide <= 0) {
            setActiveSlide(slides.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    };

    useEffect(() => {
        initialSlider();
    }, []);

    return (
        <div className="slider-wrapper" ref={sliderWidth}>
            <div
                className="slides-wrapper"
                style={{
                    transform: ` translate3d(-${
                        activeSlide * slideWidth
                    }px, 0px, 0px)`,
                }}
            >
                {slides.map((slide, index) => (
                    <Slide key={index} slide={slide} width={slideWidth} />
                ))}
            </div>
            <ul className="dots-slider">
                {slides.map((slide, index) => (
                    activeSlide === index ?
                    <li key={index}>
                        <button className="active-dot" onClick={() => setActiveSlide(index)}>
                            {index + 1}
                        </button>
                    </li>
                    :
                    <li key={index}>
                        <button onClick={() => setActiveSlide(index)}>
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="arrows-slider">
                <button className="prev" onClick={() => prevSlide()}>
                    prev
                </button>
                <button className="next" onClick={() => nextSlide()}>
                    next
                </button>
            </div>
        </div>
    );
};

export default Slider;
