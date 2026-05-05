'use client';

import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // stagger children by passing different delays
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  once?: boolean; // only animate once (true = don't re-animate on scroll back up)
}

const directionMap = {
  up: {y: 40, x: 0},
  down: {y: -40, x: 0},
  left: {x: 40, y: 0},
  right: {x: -40, y: 0},
  none: {x: 0, y: 0},
};

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
  once = true,
}: FadeInProps) {
  const ref = useRef(null);

  // useInView triggers when element enters the viewport
  // margin: "-80px" means it fires 80px before the element reaches the edge
  const isInView = useInView(ref, {once, margin: '-80px 0px'});

  const {x, y} = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{opacity: 0, x, y}}
      animate={isInView ? {opacity: 1, x: 0, y: 0} : {opacity: 0, x, y}}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // custom ease — feels more natural than linear
      }}
    >
      {children}
    </motion.div>
  );
}
