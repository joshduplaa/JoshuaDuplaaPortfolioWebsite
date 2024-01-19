import React, { useEffect, useRef } from 'react';
import './componentStyles/slidingGallery.css'

export default function SlidingGallery() {
    //TODO: add sidescrolling with a trackpad.

    
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        const handleOnDown = (e) => track.dataset.mouseDownAt = e.clientX;

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";  
            track.dataset.prevPercentage = track.dataset.percentage;
        };

        const handleOnMove = (e) => {

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            const trackWidth = window.innerWidth ; // Calculate the track width
            const maxDelta = trackWidth / 2; // Adjust maxDelta based on track width

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
            
            // Constrain nextPercentage within the bounds of trackWidth
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -trackWidth * 100 / window.innerWidth);
            
            track.dataset.percentage = nextPercentage;


            //Unsticks the mouse
            if(track.dataset.mouseDownAt === "0") return;
            
            //duration makes the track flow after releasing the mouse
            track.animate({
                transform: `translate(${nextPercentage}%, 0%)`
            }, { duration: 1200, fill: "forwards" });
            
            for(const image of track.getElementsByClassName("image")) {
                image.animate({
                objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        }

        // Attaching event listeners to the track element instead of the window
        track.addEventListener('mousedown', handleOnDown);
        track.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
        track.addEventListener('mouseup', handleOnUp);
        track.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
        track.addEventListener('mousemove', handleOnMove);
        track.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

        // Clean up event listeners on component unmount
        return () => {
            track.removeEventListener('mousedown', handleOnDown);
            track.removeEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
            track.removeEventListener('mouseup', handleOnUp);
            track.removeEventListener('touchend', (e) => handleOnUp(e.touches[0]));
            track.removeEventListener('mousemove', handleOnMove);
            track.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
        };
        }, []);
        return (
            <>
                <div ref={trackRef} id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                    <figure className="image-container">
                        <img className="image lottery" src="https://i.imgur.com/itWmXTO.jpg" draggable="false" />
                        <figcaption>Lottery</figcaption>
                    </figure>
                    <figure className="image-container">
                        <img className="image assembly" src="https://i.imgur.com/5dPXoTY.jpg" draggable="false" />
                        <figcaption>AVR Assembly Asteroids Game</figcaption>
                    </figure>
                    <figure className="image-container">
                        <img className="image bioinformatics" src="https://i.imgur.com/bRzg0cD.jpg" draggable="false" />
                        <figcaption>Bioinformatics Drug Discovery App</figcaption>
                    </figure>
                    <figure className="image-container">
                        <img className="image waterTest" src="https://i.imgur.com/BivwvkL.jpg" draggable="false" />
                        <figcaption>Water Test</figcaption>
                    </figure>
                    <figure className="image-container">
                        <img className="image videochat" src="https://i.imgur.com/kyQobki.jpg" draggable="false" />
                        <figcaption>Video Chat</figcaption>
                    </figure>
                    <figure className="image-container">
                        <img className="image chatBot" src="https://i.imgur.com/kyQobki.jpg" draggable="false" />
                        <figcaption>Chat Bot</figcaption>
                    </figure>
                    <figure className="image-container">
                        <img className="image tradingBot" src="https://i.imgur.com/pkwrT45.png" draggable="false" />
                        <figcaption>Trading Bot</figcaption>
                    </figure>
                    <figure className="image-container">
                        <img className="image leetcode" src="https://i.imgur.com/pkwrT45.png" draggable="false" />
                        <figcaption>LeetCode</figcaption>
                    </figure>
                </div>
            </>
        );
}