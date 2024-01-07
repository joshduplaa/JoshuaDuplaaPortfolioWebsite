import React, { useEffect, useRef } from 'react';
import './componentStyles/slidingGallery.css'

export default function SlidingGallery() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        const handleOnDown = (e) => track.dataset.mouseDownAt = e.clientX;

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";  
            track.dataset.prevPercentage = track.dataset.percentage;
        };

        const handleOnMove = (e) => {
            if(track.dataset.mouseDownAt === "0") return;
  
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                    maxDelta = window.innerWidth / 2;
            
            const percentage = (mouseDelta / maxDelta) * -100,
                    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
            
            track.dataset.percentage = nextPercentage;
            
            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
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
            <img class="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
            <img class="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
            <img class="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
            <img class="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
            <img class="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
            <img class="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
            <img class="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
            <img class="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
 
        </div>
    </div>
    </>

    );
}