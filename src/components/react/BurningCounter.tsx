import { useEffect, useRef, useState } from 'react';

/**
 * BurningCounter — shows real-time ad spend waste calculation.
 * €50,000/month * 40% loss = €20,000/month = ~€0.00771/second
 */
const LOSS_PER_SECOND = (50_000 * 0.4) / (30 * 24 * 60 * 60);

export default function BurningCounter() {
  const [value, setValue] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const startTimeRef = useRef<number>(0);
  const lastEuroRef = useRef<number>(0);
  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  useEffect(() => {
    if (prefersReduced) {
      setValue(12.47);
      return;
    }

    startTimeRef.current = Date.now();
    let frameId: number;

    function tick() {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const newValue = elapsed * LOSS_PER_SECOND;
      setValue(newValue);

      // Red glow pulse at each full euro milestone
      const currentEuro = Math.floor(newValue);
      if (currentEuro > lastEuroRef.current) {
        lastEuroRef.current = currentEuro;
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 600);
      }

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [prefersReduced]);

  const euros = value.toFixed(2);

  return (
    <div className="burning-counter">
      <span className="burning-counter__label">
        Ø Adspend-Verlust seit Seitenaufruf
      </span>
      <span
        className={`burning-counter__value${isPulsing ? ' burning-counter__value--pulse' : ''}`}
      >
        €&thinsp;{euros}
      </span>
      <span className="burning-counter__footnote">
        * bei €50k/Monat mit branchenüblichem Datenverlust
      </span>
    </div>
  );
}
