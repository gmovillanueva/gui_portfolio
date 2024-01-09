'use client';
import { motion } from 'framer-motion';
const HexagonSVG = (props) => (
  <svg
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g
      id='spinnerComponent'
      fill='none'
    >
      <motion.path
        d='m12 0 10.392 6v12L12 24 1.608 18V6z'
        style={{
          fill: 'white',
          fillOpacity: 0,
          stroke: '#fcfcfc',
          strokeWidth: 0.26146117,
          strokeDasharray: 'none',
          strokeDashoffset: 0,
          transformOrigin: 'center center 0px',
        }}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 50, repeat: Infinity }}
        transform='matrix(.95616 0 0 .95616 .526 .526)'
      />
      <path
        d='m12 0 10.392 6v12L12 24 1.608 18V6z'
        style={{
          fill: 'none',
          fillOpacity: 0,
          stroke: '#fcfcfc',
          strokeWidth: 0.26146117,
          strokeDasharray: 'none',
          strokeDashoffset: 0,
        }}
        transform='scale(.95616) rotate(45 11.61 12.939)'
      />
      <path
        d='m12 0 10.392 6v12L12 24 1.608 18V6z'
        style={{
          fill: 'none',
          fillOpacity: 0,
          stroke: '#fcfcfc',
          strokeWidth: 0.26146117,
          strokeDasharray: 'none',
          strokeDashoffset: 0,
        }}
        transform='matrix(0 .95616 -.95616 0 23.474 .526)'
      />
      <path
        d='m12 0 10.392 6v12L12 24 1.608 18V6z'
        style={{
          fill: 'none',
          fillOpacity: 0,
          stroke: '#fcfcfc',
          strokeWidth: 0.26146117,
          strokeDasharray: 'none',
          strokeDashoffset: 0,
        }}
        transform='scale(.95616) rotate(-45 12.939 11.611)'
      />
    </g>
  </svg>
);

export default HexagonSVG;
