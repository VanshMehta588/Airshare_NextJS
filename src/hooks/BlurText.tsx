import { useRef, useEffect, useState, FC } from 'react';
import { useSprings, animated } from '@react-spring/web';
import '../styles/Blurtext.css';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

// Define the type for the animation properties
type AnimationProps = {
  filter: string;
  opacity: number;
  transform: string;
};

export const BlurText: FC<BlurTextProps> = ({ text, delay = 200, className = '' }) => {
  const words: string[] = text.split(' ');
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' },
      to: inView
        ? async (next: (props: AnimationProps) => Promise<void>) => {
            await next({ filter: 'blur(5px)', opacity: 0.5, transform: 'translate3d(0,5px,0)' });
            await next({ filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' });
          }
        : { filter: 'blur(10px)', opacity: 0 },
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
