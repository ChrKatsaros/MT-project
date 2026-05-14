import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ageWarning.css';

function AgeWarning() {
  const [showWarning, setShowWarning] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setFadeOut(true);

    setTimeout(() => {
      setShowWarning(false);
    }, 500); // διάρκεια fade
  };

  const handleLeave = () => {
    navigate('/underage');
  };

  if (!showWarning) return null;

  return (
    <div className={`age-warning-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="age-warning-box">
        <span className="warning-badge">18+</span>

        <h1>Adults Only</h1>

        <p>
          This website contains adult-oriented content intended only for
          visitors who are 18 years of age or older.
        </p>

        <p className="small-text">
          By entering this website, you confirm that you are at least 18 years
          old and legally permitted to view adult material in your location.
        </p>

        <div className="buttons">
          <button className="enter-btn" onClick={handleEnter}>
            I am Over 18
          </button>

          <button className="leave-btn" onClick={handleLeave}>
            I am Under 18
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgeWarning;
