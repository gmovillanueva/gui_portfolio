'use client';
import particleConfig from '@/utils/configs/particleConfig.json';
import { loadTrailEffect } from '@tsparticles/effect-trail';
import { loadPolygonPath } from '@tsparticles/path-polygon';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

export default function Background() {
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

  const particlesLoaded = (container) => {
    console.log(container._options);
  };

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
