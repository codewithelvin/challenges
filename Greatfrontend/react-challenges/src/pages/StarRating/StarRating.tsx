import { useEffect, useState, MouseEventHandler, useRef } from 'react';
import Star from './component/Star';
import './StarRating.css';

const defaultState = Array(6).fill(false);

export default function StarRating() {
  const ref = useRef<boolean[]>(defaultState);
  const [star, setStar] = useState<boolean[]>(defaultState);

  const starMapper = (stars: boolean[], index: number) =>
    stars.map((_, i) => i <= index);

  const handleStarSelect = (index: number) => {
    const activeStars = starMapper(star, index);
    setStar(activeStars);
    ref.current = activeStars;
  };

  const onMouseEnterHandle = (index: number) => {
    setStar(star.map((_, i) => i <= index));
  };

  const onMouseLeaveHandle = () => {
    const prevStarsLength = ref.current.filter(Boolean).length;
    const currentStars = star.filter(Boolean).length;
    if (prevStarsLength !== currentStars) {
      setStar(ref.current);
    }
  };

  return (
    <div style={{ display: 'flex', padding: 10 }}>
      {star.map((item, index) => (
        <div
          key={index}
          onClick={() => handleStarSelect(index)}
          onMouseEnter={() => onMouseEnterHandle(index)}
          onMouseLeave={onMouseLeaveHandle}
        >
          <Star isFilled={item} />
        </div>
      ))}
    </div>
  );
}
