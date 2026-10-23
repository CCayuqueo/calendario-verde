import type { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
};

export function FadeIn({ children, className = '', stagger = false }: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const classes = [
    'reveal',
    stagger && 'reveal-escalonado',
    isVisible && 'reveal-visible',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
