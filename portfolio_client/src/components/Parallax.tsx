"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"
import { Link } from "react-router-dom";


function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

const imageTitles = [
    "BioInformatics Pipeline",
    "CIFAR-10 Video recognition network",
    "Molecular Diagnostic Dashboard",
    "NeedleMan Wunsch Implementation",
    "Smith Waterman Implementation",
    "CI/CD Pipelines for NW and SW",
    "MultiProcessed Conway's game of life",
    "Lottery SWE Project",
    "Assembly Asteroids Game",
    "This Portfolio website",
]
const imageRoutes: { [key: string]: string } = {
    "BioInformatics Pipeline": "/bioinformatics",
    "CIFAR-10 Video recognition network": "/redraiderskater",
    "Molecular Diagnostic Dashboard": "/mis-website",
    "NeedleMan Wunsch Implementation": "/needleman-wunsch",
    "Smith Waterman Implementation": "/smith-waterman",
    "CI/CD Pipelines for NW and SW": "/cicd",
    "MultiProcessed Conway's game of life": "/conway",
    "Lottery SWE Project": "/lottery",
    "Assembly Asteroids Game": "/asmasteroid",
    "This Portfolio website": "/portfolioDetails",
    
};
const imageLinks: { [key: string]: string } = {
    "BioInformatics Pipeline": "https://i.imgur.com/bRzg0cD.jpg",
    "CIFAR-10 Video recognition network": "https://i.imgur.com/D3Sw6xO.jpeg",
    "Molecular Diagnostic Dashboard": "https://i.imgur.com/dhjCDSv.png",
    "NeedleMan Wunsch Implementation": "https://i.imgur.com/fFsmtym.png",
    "Smith Waterman Implementation": "https://i.imgur.com/93neges.jpg",
    "CI/CD Pipelines for NW and SW": "https://i.imgur.com/MeR9wwx.jpeg",
    "MultiProcessed Conway's game of life": "https://i.imgur.com/CdDJrJz.jpeg",
    "Lottery SWE Project": "https://i.imgur.com/itWmXTO.jpg",
    "Assembly Asteroids Game": "https://i.imgur.com/bioLLuW.jpeg",
    "This Portfolio website": "https://i.imgur.com/yDt08oR.png",
    
};

function Image({ title }: { title: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    const route = imageRoutes[title] || "/projects"; // Default to "/projects" if no specific route is found
    const imgUrl = imageLinks[title] || "https://i.imgur.com/default.jpg"; // Default image in case title not found

    return (
        <section className="img-container">
            <div ref={ref}>
                <img src={imgUrl} alt={title} />
            </div>
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >
                <Link to={route} className="title-link">
                    {title}
                </Link>
            </motion.h2>
        </section>
    );
}

export default function Parallax() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div id="example">
            {imageTitles.map((title, index) => (
                <Image key={index} title={title} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
         html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #4ff0b7;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #4ff0b7;
            bottom: 50px;
            transform: scaleX(0);
        }
        .title-link {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s ease-in-out;
        }
        .title-link:visited {
            color: inherit; /* Ensures visited links keep the same color */
        }

        .title-link:hover {
            color: #fff;
            text-decoration: underline;
        }
        
    `}</style>
    )
}
