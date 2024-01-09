'use client';
const LogoComboSVG = (props) => (
  <svg
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='logoCombo'>
      <g id='logoOuter'>
        <path
          id='logoHexagon'
          d='M23.9999 2.93035L42.2468 13.4652V34.5349L23.9999 45.0697L5.75305 34.5349L5.75305 13.4652L23.9999 2.93035Z'
          stroke='#FCFCFC'
          strokeWidth={1.83629}
          strokeLinejoin='bevel'
          transform='matrix(.95616 0 0 .95616 .526 .526)'
        />
      </g>
      <g id='logoBody'>
        <path
          id='logoMiddle'
          d='M24.065 27.875L21.525 20.89L24.065 22.16L26.605 20.89L24.065 27.875Z'
          fill='white'
        />
        <path
          id='logoRight'
          d='M36.13 12L29.78 36.13L27.875 32.32L32.955 13.905L36.13 12Z'
          fill='white'
        />
        <path
          id='logoLeft'
          d='M12 12L18.35 36.13L20.255 32.32L15.175 13.905L12 12Z'
          fill='white'
        />
      </g>
    </g>
  </svg>
);
export default LogoComboSVG;
