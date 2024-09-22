export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export const multiDirectionSlideVariants = {
  hidden: { opacity: 0, x: '-25vw' },
  visible: { opacity: 1, x: 0 },
  right: { opacity: 0, x: '25vw' },
};

export const pullUpVariant = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
    },
  }),
};
