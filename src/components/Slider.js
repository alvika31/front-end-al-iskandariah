import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderHero = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'red' }}
                onClick={onClick}
            />
        )
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props
        return (
            <div
                className="z-10"
                style={{
                    ...style,
                    display: 'block',
                    background: 'green',
                    width: '100px',
                    size: '200px',
                }}
                onClick={onClick}
            />
        )
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <Slider {...settings} className="">
            <div>
                <div
                    style={{
                        backgroundImage: 'url(https://placekitten.com/800/401)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '700px',
                    }}
                    className="w-full"
                />
            </div>
            <div>
                <div
                    style={{
                        backgroundImage: 'url(https://placekitten.com/800/401)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '700px',
                    }}
                    className="w-full"
                />
            </div>
            <div>
                <div
                    style={{
                        backgroundImage: 'url(https://placekitten.com/800/401)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '700px',
                    }}
                    className="w-full"
                />
            </div>
            <div>
                <div
                    style={{
                        backgroundImage: 'url(https://placekitten.com/800/401)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '700px',
                    }}
                    className="w-full"
                />
            </div>

            {/* Add more slides as needed */}
        </Slider>
    )
}

export default SliderHero
