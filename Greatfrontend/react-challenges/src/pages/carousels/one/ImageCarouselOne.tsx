import { useEffect, useMemo, useRef, useState } from 'react';
import { Image, images } from '../common/data';
import './ImageCarouselOne.css';

enum DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
}

export default function ImageCarouselOne() {
  const prevImage = useRef(null);
  const [currentImage, setCurrentImage] = useState<Image[]>(
    images.map((item: Image, index) => ({ ...item, active: index === 0 })),
  );

  const changeCurrentImage = (value: number | DIRECTION | undefined) => {
    if (Object.values(DIRECTION).includes(value as DIRECTION)) {
      const currentActive = currentImage.findIndex((item) => item.active);

      if (value === DIRECTION.LEFT && currentActive > 0) {
        setCurrentImageByIndex(currentActive - 1);
        return;
      }

      if (value === DIRECTION.RIGHT && currentActive < images.length - 1) {
        setCurrentImageByIndex(currentActive + 1);
        return;
      }
    }

    if (typeof value === 'number') {
      setCurrentImageByIndex(value);
    }
  };

  const setCurrentImageByIndex = (currentIndex: number) => {
    setCurrentImage(
      currentImage.map((item, index) => {
        return {
          ...item,
          active: index === currentIndex,
        };
      }),
    );
  };

  const foundImage = useMemo(() => {
    return currentImage.find((item) => item.active);
  }, [currentImage]);

  useEffect(() => {
    prevImage.current = foundImage;
  }, [foundImage]);

  return (
    <div className="carouselWrapper">
      <div className="carouselBox">
        {prevImage.current && (
          <img
            key={prevImage.current.alt}
            alt={prevImage.current.alt}
            src={prevImage.current.src}
            className="image out"
          />
        )}
        {foundImage && (
          <img
            key={foundImage.alt}
            alt={foundImage.alt}
            src={foundImage.src}
            className="image in"
          />
        )}
        <div className="carouselPages">
          {currentImage.map((item: Image, index: number) => {
            return (
              <button
                className={`pagesButton ${item.active ? 'active' : ''}`}
                aria-label={`Navigate to ${item.alt}`}
                onClick={() => changeCurrentImage(index)}
              />
            );
          })}
        </div>
        <button
          className="arrows left"
          onClick={() => changeCurrentImage(DIRECTION.LEFT)}
        >
          ❮
        </button>
        <button
          className="arrows right"
          onClick={() => changeCurrentImage(DIRECTION.RIGHT)}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
