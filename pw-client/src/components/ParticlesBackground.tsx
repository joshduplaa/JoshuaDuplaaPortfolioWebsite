'use client'

import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
//import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { useEffect, useState } from "react";


export default function ParticlesBackground() {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Create a modified options object with proper z-index
    const modifiedOptions = {
        ...particlesOptions,
        fullScreen: {
            enable: true,
            zIndex: -1 // Set to negative to be behind content
        }
    } as unknown as ISourceOptions;

  return (
    <>
    <div className="particleBG" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      {init && (
          <Particles
              options={modifiedOptions}
          />
      )}
    </div>
    </>
  )
}
