const revealEase = [0.22, 1, 0.36, 1] as const;

export const sectionReveal = {
  initial: { opacity: 0, y: 48, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.8, ease: revealEase },
};

export const cardReveal = (index: number) => {
  const entersFromLeft = index % 2 === 0;

  return {
    initial: {
      opacity: 0,
      x: entersFromLeft ? -38 : 38,
      y: 28,
      scale: 0.9,
      rotate: entersFromLeft ? -1 : 1,
    },
    whileInView: { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: {
      duration: 0.72,
      delay: (index % 5) * 0.07,
      ease: revealEase,
    },
  };
};
