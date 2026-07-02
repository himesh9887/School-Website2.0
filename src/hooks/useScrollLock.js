import { useEffect } from 'react';

export default function useScrollLock(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
}
