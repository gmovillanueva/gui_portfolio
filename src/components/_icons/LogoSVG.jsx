const LogoSVG = (props) => (
  <svg
    /*    width={48}
    height={48}*/
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='logoComponent'>
      <g id='logoBody'>
        <path
          id='logoCenter'
          d='M24 31.2L19.2 18L24 20.4L28.8 18L24 31.2Z'
          fill='white'
        />
        <path
          id='logoRightWing'
          d='M46.8 1.2L34.8 46.8L31.2 39.6L40.8 4.8L46.8 1.2Z'
          fill='white'
        />
        <path
          id='logoLeftWing'
          d='M1.2 1.2L13.2 46.8L16.8 39.6L7.2 4.8L1.2 1.2Z'
          fill='white'
        />
      </g>
    </g>
  </svg>
);
export default LogoSVG;
