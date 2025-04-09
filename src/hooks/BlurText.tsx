import { useRef, useEffect, useState, FC } from 'react';
import { useSprings, animated } from '@react-spring/web';
import '../styles/Blurtext.css';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const BlurText: FC<BlurTextProps> = ({ text, delay = 200, className = '' }) => {
  const words: string[] = text.split(' ');
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement>(null!); // Fixed ref type error

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!); // Safe unobserve
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' },
      to: async (next: (props: Record<string, unknown>) => Promise<void>) => {
        if (inView) {
          await next({ filter: 'blur(5px)', opacity: 0.5, transform: 'translate3d(0,5px,0)' });
          await next({ filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' });
        } else {
          await next({ filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' });
        }
      },
      delay: i * delay,
    }))
  );

  return (
    <p ref={ref} className={className}>
      {springs.map((props, index) => (
        <animated.span key={index} style={props} className="word">
          {words[index]}&nbsp;
        </animated.span>
      ))}
    </p>
  );
};
