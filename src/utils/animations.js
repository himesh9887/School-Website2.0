export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -34 },
  show: { opacity: 1, x: 0, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 34 },
  show: { opacity: 1, x: 0, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
