import React, { useEffect, useState } from 'react';
import './guideNavigator.css';

function GuideNavigator({ onOpenContents }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`guide-navigator ${visible ? 'show' : ''}`}>
      <button className="navigator-button" onClick={onOpenContents}>
        Chapters
      </button>

      <button className="navigator-button" onClick={goTop}>
        ↑ Top
      </button>
    </div>
  );
}

export default GuideNavigator;
