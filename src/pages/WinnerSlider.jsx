import React, { useRef, useState } from 'react';
import './WinnerSlider.css';

const WinnerSlider = ({ winners }) => {
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1; // Scroll-fast
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
        setIsDown(true);
        setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleTouchEnd = () => {
        setIsDown(false);
    };

    const handleTouchMove = (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div 
            className="winner-cards" 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            {winners.map((winner, index) => (
                <div className="winner-card" key={index}>
                    <div className="winner-img">
                        <img src={winner.image} alt="Winner" />
                    </div>
                    <div className="winner-content">
                        <p>{winner.name}</p>
                        <p className="winnerPrice">{winner.price}</p>
                    </div>
                    <div className="win-asset">
                        <img src={winner.asset} alt="Win Asset" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WinnerSlider;
