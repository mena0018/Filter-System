'use client';

import { motion } from 'framer-motion';
import { fadeInVariants } from '@/lib/animation';

type FadeInTitleProps = {
  value: string;
  className?: string;
};

export const FadeInTitle = ({ value, className }: FadeInTitleProps) => {
  const words = value.split(' ');

  return (
    <motion.h1 initial="hidden" animate="visible" className={className}>
      {words.map((word, i) => (
        <motion.span key={word} variants={fadeInVariants} custom={i}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.h1>
  );
};
