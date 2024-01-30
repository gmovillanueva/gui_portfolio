'use client';
import particleConfig from '@/utils/configs/particleConfig.json';
import { loadTrailEffect } from '@tsparticles/effect-trail';
import { loadPolygonPath } from '@tsparticles/path-polygon';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadPolygonPath(engine);
      await loadTrailEffect(engine);
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  if (init) {
    return (
      <Particles
        id='background'
        particlesLoaded={particlesLoaded}
        options={particleConfig}
      />
    );
  }

  return <></>;
}

export default function Background() {
  /*  const { openDrawer: curDrawerState } = useDrawerStore();*/

  return (
    <div
    /*className={curDrawerState ? CanvasStyle.canvas_blur : CanvasStyle.canvas}*/
    >
      <Particle />
    </div>
  );
}
