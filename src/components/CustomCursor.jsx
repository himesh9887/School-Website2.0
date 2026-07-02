import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 280, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 280, damping: 28 });

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const setFromQuery = () => setEnabled(query.matches);
    setFromQuery();
    query.addEventListener('change', setFromQuery);
    return () => query.removeEventListener('change', setFromQuery);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (event) => {
      x.set(event.clientX - 17);
      y.set(event.clientY - 17);
    };

    const enter = (event) => {
      if (event.target.closest('a, button, .interactive-card, input, select, textarea')) setActive(true);
    };

    const leave = (event) => {
      if (event.target.closest('a, button, .interactive-card, input, select, textarea')) setActive(false);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    document.documentElement.classList.add('custom-cursor-enabled');
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`custom-cursor ${active ? 'active' : ''}`}
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    />
  );
}
