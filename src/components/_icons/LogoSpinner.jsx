'use client';
import { motion } from 'framer-motion';
function LogoSpinner(props) {
  return (
    <svg
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='spinnerComponent'>
        <motion.g
          id='spinnerCircle4'
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 50, repeat: Infinity }}
          style={{
            transformOrigin: 'center center 0px',
          }}
        >
          <circle
            cx={50}
            cy={50}
            r={36}
            fill='none'
            strokeWidth={1}
            strokeDasharray='1%,10.3%,22%'
            stroke='rgba(95, 143, 181, 1)'
          />
          <circle
            cx={50}
            cy={50}
            r={36}
            fill='none'
            strokeWidth={1}
            strokeDasharray='20%,12%'
            stroke='rgba(95, 143, 181, 0.3)'
          />
          {/* <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            to={360}
            repeatCount='indefinite'
            from={0}
            dur='50s'
          />*/}
        </motion.g>
        <motion.g
          id='spinnerCircle3'
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 43, repeat: Infinity }}
          style={{
            transformOrigin: 'center center 0px',
          }}
        >
          <circle
            cx={50}
            cy={50}
            r={29}
            fill='none'
            strokeWidth={1}
            strokeDasharray='1%,12.3%,15.3%'
            stroke='rgba(120, 175, 159, 1)'
          />
          <circle
            cx={50}
            cy={50}
            r={29}
            fill='none'
            strokeWidth={1}
            strokeDasharray='1%,14%,15%,5%,6%'
            stroke='rgba(120, 175, 159, 0.3)'
          />
          {/*          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            to={360}
            repeatCount='indefinite'
            from={-8}
            dur='43s'
          />*/}
        </motion.g>
        <motion.g
          id='spinnerCircle2'
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
          style={{
            transformOrigin: 'center center 0px',
          }}
        >
          <circle
            cx={50}
            cy={50}
            r={29}
            fill='none'
            strokeWidth={1}
            strokeDasharray='1%,8%,20%'
            stroke='rgba(198, 139, 34, 1)'
          />
          <circle
            cx={50}
            cy={50}
            r={29}
            fill='none'
            strokeWidth={1}
            strokeDasharray='1%,20%,5%'
            stroke='rgba(198, 139, 34, 0.3)'
          />
          {/*<animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            to={360}
            repeatCount='indefinite'
            from={15}
            dur='40s'
          />*/}
        </motion.g>
        <motion.g
          id='spinnerCircle1'
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 35, repeat: Infinity }}
          style={{
            transformOrigin: 'center center 0px',
          }}
        >
          <circle
            cx={50}
            cy={50}
            r={27}
            fill='none'
            strokeWidth={1}
            strokeDasharray='1%,13%,5%'
            stroke='rgba(193, 93, 5, 1)'
          />
          <circle
            cx={50}
            cy={50}
            r={27}
            fill='none'
            strokeWidth={1}
            strokeDasharray='14%,15%'
            stroke='rgba(193, 93, 5, 0.3)'
          />
          {/*<animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            to={360}
            repeatCount='indefinite'
            from={-6}
            dur='35s'
          />*/}
        </motion.g>
        <motion.g
          id='spinnerCircle0'
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
          style={{
            transformOrigin: 'center center 0px',
          }}
        >
          <circle
            cx={50}
            cy={50}
            r={25}
            fill='none'
            strokeWidth={1}
            strokeDasharray='2%,8%,0.4%'
            stroke='rgba(170,52,9,1)'
          />
          <circle
            cx={50}
            cy={50}
            r={25}
            fill='none'
            strokeWidth={1}
            strokeDasharray='15%'
            stroke='rgba(170,52,9,0.3)'
          />
          {/*<animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            to={360}
            repeatCount='indefinite'
            from={8}
            dur='28s'
          />*/}
        </motion.g>
      </g>
    </svg>
  );
}
export default LogoSpinner;
