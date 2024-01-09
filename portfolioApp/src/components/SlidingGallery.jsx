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
            const trackWidth = window.innerWidth; // Calculate the track width
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

        // Adding event listeners
        window.addEventListener('mousedown', handleOnDown);
        window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
        window.addEventListener('mouseup', handleOnUp);
        window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
        window.addEventListener('mousemove', handleOnMove);
        window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('mousedown', handleOnDown);
            window.removeEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
            window.removeEventListener('mouseup', handleOnUp);
            window.removeEventListener('touchend', (e) => handleOnUp(e.touches[0]));
            window.removeEventListener('mousemove', handleOnMove);
            window.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
        };
    }, []);

    return (
    <>
    <div className = 'galleryBody'>
        <div ref={trackRef} id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
            
            <div className="image-container">
                <img className="image" src="https://i.imgur.com/itWmXTO.jpg" draggable="false" />
                <a href = "https://github.com/joshduplaa/SWE_Lottery_Project" target="_blank">
                <button className="image-label">Mock Texas Lottery Web App</button>
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="https://i.imgur.com/bRzg0cD.jpg" draggable="false" />
                <a href = "https://github.com/joshduplaa/BioInformaticsDrugDiscovery" target="_blank">
                <button className="image-label">BioInformatics Drug Discovery Web App</button>
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="https://i.imgur.com/BivwvkL.jpg" draggable="false" />
                <a href = "https://github.com/joshduplaa/IoT-Water-Quality-App" target="_blank">
                <button className="image-label">IOT local water quality Indicator</button>
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="https://i.imgur.com/kyQobki.jpg" draggable="false" />
                <a href = "https://github.com/joshduplaa" target="_blank">
                <button className="image-label">Staring Contest Video Chat</button>
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="https://i.imgur.com/5dPXoTY.jpg" draggable="false" />
                <a href = "https://github.com/joshduplaa" target="_blank">
                <button className="image-label">AVR Arduino Asteroids game</button>
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="https://i.imgur.com/pkwrT45.png" draggable="false" />
                <a href = "https://github.com/joshduplaa" target="_blank">
                <button className="image-label">LeetCode</button>
                </a>
            </div>

            <div className="image-container">
                <img className="image" src="https://i.imgur.com/pkwrT45.png" draggable="false" />
                <a href = "https://github.com/joshduplaa" target="_blank">
                <button className="image-label">LeetCode</button>
                </a>
            </div>
            <div className="image-container">
                <img className="image" src="https://i.imgur.com/pkwrT45.png" draggable="false" />
                <a href = "https://github.com/joshduplaa" target="_blank">
                <button className="image-label">LeetCode</button>
                </a>
            </div>
            

        
        </div>
    </div>
    </>

    );
}