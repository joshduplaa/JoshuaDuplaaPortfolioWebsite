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
    "'RedRaiderSkater' video recognition network",
    "MIS Website",
    "NeedleMan Wuncsch Implementation",
    "SmithWaterman Implementation",
    "Molecular Diagnostic Dashboard",
    "AI-Driven Drug Discovery Research",
    "CIFAR-10 CNN Experiment",
    "Genome Sequence Alignment",
    "Automated DevOps Pipeline",
]
const imageRoutes: { [key: string]: string } = {
    "BioInformatics Pipeline": "/bioinformatics",
    "'RedRaiderSkater' video recognition network": "/redraiderskater",
    "MIS Website": "/mis-website",
    "NeedleMan Wuncsch Implementation": "/needleman-wunsch",
    "SmithWaterman Implementation": "/smith-waterman",
    "Molecular Diagnostic Dashboard": "/molecular-diagnostic",
    "AI-Driven Drug Discovery Research": "/drugdiscovery",
    "CIFAR-10 CNN Experiment": "/cifar10",
    "Genome Sequence Alignment": "/genome-alignment",
    "Automated DevOps Pipeline": "/devops-pipeline",
};

function Image({ id, title }: { id: number; title: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    const route = imageRoutes[title] || "/projects"; // Default to "/projects" if no specific route is found

    return (
        <section className="img-container">
            <div ref={ref}>
                <img src={`/photos/cityscape/${id}.jpg`} alt={title} />
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
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="example">
            {imageTitles.map((title, index) => (
                <Image key={index} id={index + 1} title={title} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    )
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

        .title-link:hover {
            color: #fff;
            text-decoration: underline;
        }
    `}</style>
    )
}
